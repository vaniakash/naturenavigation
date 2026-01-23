import mongoose, { Schema, models, Model } from 'mongoose';

export interface IBooking {
    _id: string;
    userId: string;
    trekId: string; // trek slug
    trekName: string;
    date: Date;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    participants: number;
    amount: number;
    userName: string;
    userEmail: string;
    phoneNumber: string;
    specialRequests?: string;
    adminNotes?: string;
    createdAt: Date;
    updatedAt?: Date;
}

const BookingSchema = new Schema<IBooking>({
    userId: {
        type: String,
        required: true,
        ref: 'User',
    },
    trekId: {
        type: String,
        required: true,
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
        required: true,
    },
    specialRequests: {
        type: String,
    },
    adminNotes: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
});

const Booking: Model<IBooking> = models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
