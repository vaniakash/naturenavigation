import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, trekName, dates, groupSize, message } = await req.json();

        // Validate input
        if (!name || !email || !phone) {
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
                pass: 'wotv agmw xeic aoiq', // App Password
            },
        });

        // Email to Admin
        const mailOptionsAdmin = {
            from: process.env.EMAIL_USER,
            to: 'naturenavigation56@gmail.com', // Admin email
            subject: `New Private Trek Request from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                    <h2 style="color: #059669;">New Custom Trek Request</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Interested Trek:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${trekName || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Group Size:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${groupSize || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Preferred Dates:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${dates || 'Not specified'}</td></tr>
                    </table>
                    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #059669; margin-top: 20px;">
                        <p style="margin: 0;"><strong>Message/Requirements:</strong></p>
                        <p style="white-space: pre-wrap; margin-top: 10px;">${message || 'No additional message'}</p>
                    </div>
                </div>
            `,
        };

        // Auto-reply Email to User
        const mailOptionsUser = {
            from: 'Nature Navigation <naturenavigation56@gmail.com>',
            to: email,
            subject: 'We received your Private Trek Request',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                    <h2 style="color: #059669;">Request Received!</h2>
                    <p>Hi ${name},</p>
                    <p>Thanks for interesting in a custom adventure with <strong>Nature Navigation</strong>!</p>
                    <p>We have successfully received your request for <strong>${trekName || 'a private trek'}</strong> (approx. ${groupSize || 'some'} people).</p>
                    <p>Our team will analyze your requirements and get back to you with a tailored itinerary and quote within 24-48 hours.</p>
                    <br/>
                    <p>Best Regards,<br/><strong>Team Nature Navigation</strong></p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="font-size: 12px; color: #888;">This is an automated confirmation.</p>
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
