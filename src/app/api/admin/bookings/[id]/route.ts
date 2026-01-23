import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Booking from '@/models/Booking';
import { sendBookingApprovalToUser, sendBookingRejectionToUser } from '@/lib/email';

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth();

        if (!session || session.user.role !== 'admin') {
            return NextResponse.json(
                { error: 'Unauthorized. Admin access required.' },
                { status: 401 }
            );
        }

        const { id } = params;
        const body = await req.json();
        const { status, adminNotes } = body;

        if (!status || !['confirmed', 'cancelled'].includes(status)) {
            return NextResponse.json(
                { error: 'Invalid status. Must be "confirmed" or "cancelled"' },
                { status: 400 }
            );
        }

        await dbConnect();

        const booking = await Booking.findById(id);

        if (!booking) {
            return NextResponse.json(
                { error: 'Booking not found' },
                { status: 404 }
            );
        }

        // Update booking
        booking.status = status;
        if (adminNotes) {
            booking.adminNotes = adminNotes;
        }
        booking.updatedAt = new Date();

        await booking.save();

        // Send appropriate email
        try {
            if (status === 'confirmed') {
                await sendBookingApprovalToUser(booking);
            } else if (status === 'cancelled') {
                await sendBookingRejectionToUser(booking, adminNotes);
            }
        } catch (emailError) {
            console.error('Error sending email:', emailError);
        }

        return NextResponse.json(
            {
                success: true,
                booking,
                message: `Booking ${status} successfully`
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating booking:', error);
        return NextResponse.json(
            { error: 'Failed to update booking' },
            { status: 500 }
        );
    }
}
