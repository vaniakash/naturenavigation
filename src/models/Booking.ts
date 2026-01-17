import mongoose, { Schema, models, Model } from 'mongoose';

export interface IBooking {
    _id: string;
    userId: string;
    trekName: string;
    date: Date;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    participants: number;
    amount: number;
    userName: string;
    userEmail: string;
    phoneNumber?: string;
    createdAt: Date;
}

const BookingSchema = new Schema<IBooking>({
    userId: {
        type: String,
        required: true,
        ref: 'User',
    },
    trekName: {
        type: String,
        required: [true, 'Trek name is required'],
    },
    date: {
        type: Date,
        required: [true, 'Trek date is required'],
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'],
        default: 'pending',
    },
    participants: {
        type: Number,
        required: [true, 'Number of participants is required'],
        min: 1,
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
    },
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Booking: Model<IBooking> = models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
