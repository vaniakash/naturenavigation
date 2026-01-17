import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Booking from '@/models/Booking';

export async function GET() {
    try {
        const session = await auth();

        if (!session || !session.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const bookings = await Booking.find({ userId: session.user.id }).sort({
            createdAt: -1,
        });

        return NextResponse.json({ bookings }, { status: 200 });
    } catch (error) {
        console.error('Error fetching user bookings:', error);
        return NextResponse.json(
            { error: 'Failed to fetch bookings' },
            { status: 500 }
        );
    }
}
