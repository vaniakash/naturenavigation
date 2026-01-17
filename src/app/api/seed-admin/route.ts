import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
    try {
        await dbConnect();

        const email = 'naturenavigation56@gmail.com';
        const password = '0110#Rudera';
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if user exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // Update existing user to admin with new password
            existingUser.role = 'admin';
            existingUser.password = hashedPassword;
            await existingUser.save();
            return NextResponse.json({ message: 'Existing user updated to Admin successfully', email });
        } else {
            // Create new admin user
            await User.create({
                name: 'Nature Admin',
                email,
                password: hashedPassword,
                role: 'admin',
            });
            return NextResponse.json({ message: 'Admin user created successfully', email });
        }
    } catch (error) {
        console.error('Admin seed error:', error);
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
