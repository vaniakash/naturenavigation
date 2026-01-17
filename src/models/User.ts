import mongoose, { Schema, models, Model } from 'mongoose';

export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
    createdAt: Date;
    image?: string;
}

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        // Password is not required for Google Auth users
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User: Model<IUser> = models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
