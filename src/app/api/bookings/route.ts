import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Booking from '@/models/Booking';
import { sendBookingNotificationToAdmin, sendBookingConfirmationToUser } from '@/lib/email';

export async function POST(req: Request) {
    try {
        const session = await auth();

        if (!session || !session.user) {
            return NextResponse.json(
                { error: 'You must be logged in to make a booking' },
                { status: 401 }
            );
        }

        const body = await req.json();
        const {
            trekId,
            trekName,
            date,
            participants,
            amount,
            userName,
            userEmail,
            phoneNumber,
            specialRequests
        } = body;

        // Validation
        if (!trekId || !trekName || !date || !participants || !amount || !userName || !userEmail || !phoneNumber) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (participants < 1 || participants > 10) {
            return NextResponse.json(
                { error: 'Participants must be between 1 and 10' },
                { status: 400 }
            );
        }

        // Check if date is in the future
        const trekDate = new Date(date);
        if (trekDate < new Date()) {
            return NextResponse.json(
                { error: 'Trek date must be in the future' },
                { status: 400 }
            );
        }

        await dbConnect();

        // Create booking
        const booking = await Booking.create({
            userId: session.user.id,
            trekId,
            trekName,
            date: trekDate,
            participants,
            amount,
            userName,
            userEmail,
            phoneNumber,
            specialRequests: specialRequests || '',
            status: 'pending'
        });

        // Send emails
        try {
            await Promise.all([
                sendBookingNotificationToAdmin(booking),
                sendBookingConfirmationToUser(booking)
            ]);
        } catch (emailError) {
            console.error('Error sending emails:', emailError);
            // Don't fail the booking if emails fail
        }

        return NextResponse.json(
            {
                success: true,
                bookingId: booking._id,
                message: 'Booking request submitted successfully'
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating booking:', error);
        return NextResponse.json(
            { error: 'Failed to create booking' },
            { status: 500 }
        );
    }
}
