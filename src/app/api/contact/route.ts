import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, location, difficulty, participants, message } = await req.json();

        // Validate input
        if (!name || !email) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create a transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'naturenavigation56@gmail.com',
                pass: 'wotv agmw xeic aoiq', // App Password provided by user
            },
        });

        // Email to Admin (You)
        const mailOptionsAdmin = {
            from: process.env.EMAIL_USER,
            to: 'naturenavigation56@gmail.com', // Sending to yourself
            subject: `New Expedition Enquiry from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                    <h2 style="color: #1a1a1a;">New Expedition Enquiry</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Location:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${location || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Difficulty:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${difficulty || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Participants:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${participants || 'Not specified'}</td></tr>
                    </table>
                    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #10b981; margin-top: 20px;">
                        <p style="margin: 0;"><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap; margin-top: 10px;">${message || 'No additional message'}</p>
                    </div>
                </div>
            `,
        };

        // Auto-reply Email to User
        const mailOptionsUser = {
            from: 'Nature Navigation <naturenavigation56@gmail.com>',
            to: email,
            subject: 'Thank you for contacting Nature Navigation',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                    <h2 style="color: #10b981;">Thank You for Reaching Out!</h2>
                    <p>Dear ${name},</p>
                    <p>Thank you for inquiring about an expedition with <strong>Nature Navigation</strong>. We have received your details.</p>
                    <p>Our team will review your requirements for <strong>${location || 'a Himalayan trek'}</strong> and get back to you shortly.</p>
                    <p>Best Regards,<br/><strong>Team Nature Navigation</strong></p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="font-size: 12px; color: #888;">This is an automated response. Please do not reply directly to this email.</p>
                </div>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(mailOptionsAdmin),
            transporter.sendMail(mailOptionsUser),
        ]);

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { message: 'Failed to send message', error: String(error) },
            { status: 500 }
        );
    }
}
