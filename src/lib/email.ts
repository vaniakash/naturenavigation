import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'naturenavigation56@gmail.com',
        pass: 'wotv agmw xeic aoiq',
    },
});

export async function sendBookingNotificationToAdmin(booking: any) {
    const mailOptions = {
        from: '"Nature Navigation" <naturenavigation56@gmail.com>',
        to: 'naturenavigation56@gmail.com',
        subject: `🏔️ New Trek Booking Request - ${booking.trekName}`,
        html: `
            <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 12px;">
                <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">🏔️ New Booking Request</h1>
                </div>
                
                <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px;">
                    <h2 style="color: #0f172a; margin-top: 0;">Trek: ${booking.trekName}</h2>
                    
                    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Customer Name:</td>
                            <td style="padding: 12px 0; color: #0f172a;">${booking.userName}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Email:</td>
                            <td style="padding: 12px 0; color: #0f172a;">${booking.userEmail}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Phone:</td>
                            <td style="padding: 12px 0; color: #0f172a;">${booking.phoneNumber}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Trek Date:</td>
                            <td style="padding: 12px 0; color: #0f172a;">${new Date(booking.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Participants:</td>
                            <td style="padding: 12px 0; color: #0f172a;">${booking.participants}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Total Amount:</td>
                            <td style="padding: 12px 0; color: #10b981; font-weight: 700; font-size: 18px;">₹${booking.amount.toLocaleString()}</td>
                        </tr>
                    </table>
                    
                    ${booking.specialRequests ? `
                    <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 15px; margin: 20px 0; border-radius: 8px;">
                        <p style="margin: 0 0 8px 0; color: #0f172a; font-weight: 600;">Special Requests:</p>
                        <p style="margin: 0; color: #334155; white-space: pre-wrap;">${booking.specialRequests}</p>
                    </div>
                    ` : ''}
                    
                    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%); padding: 20px; border-radius: 8px; margin-top: 30px; text-align: center;">
                        <p style="margin: 0; color: #64748b; font-size: 14px;">View and manage this booking in your admin panel</p>
                        <a href="http://localhost:3000/admin/bookings" style="display: inline-block; margin-top: 15px; padding: 12px 30px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">Go to Admin Panel</a>
                    </div>
                </div>
                
                <div style="text-align: center; padding: 20px; color: #94a3b8; font-size: 12px;">
                    <p style="margin: 0;">This is an automated notification from Nature Navigation</p>
                </div>
            </div>
        `,
    };

    await transporter.sendMail(mailOptions);
}

export async function sendBookingConfirmationToUser(booking: any) {
    const mailOptions = {
        from: '"Nature Navigation" <naturenavigation56@gmail.com>',
        to: booking.userEmail,
        subject: `🎉 Trek Booking Request Received - ${booking.trekName}`,
        html: `
            <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 12px;">
                <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">🎉 Booking Request Received!</h1>
                </div>
                
                <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px;">
                    <p style="color: #0f172a; font-size: 16px; line-height: 1.6;">Hi <strong>${booking.userName}</strong>,</p>
                    
                    <p style="color: #334155; font-size: 16px; line-height: 1.6;">
                        Thank you for your interest in <strong>${booking.trekName}</strong>! We're excited to have you join us on this adventure.
                    </p>
                    
                    <div style="background: #f0fdf4; border: 2px dashed #10b981; padding: 20px; border-radius: 8px; margin: 25px 0;">
                        <h3 style="color: #0f172a; margin-top: 0;">📋 Booking Summary</h3>
                        <table style="width: 100%;">
                            <tr>
                                <td style="padding: 8px 0; color: #64748b;">Trek:</td>
                                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${booking.trekName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b;">Date:</td>
                                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${new Date(booking.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b;">Participants:</td>
                                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${booking.participants}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b;">Total Amount:</td>
                                <td style="padding: 8px 0; color: #10b981; font-weight: 700; font-size: 18px;">₹${booking.amount.toLocaleString()}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 0; color: #92400e;">
                            <strong>⏳ What's Next?</strong><br/>
                            Your booking request is being reviewed by our team. You will receive a confirmation email once your booking is approved (usually within 24 hours).
                        </p>
                    </div>
                    
                    <h3 style="color: #0f172a; margin-top: 30px;">📞 Need Help?</h3>
                    <p style="color: #64748b; line-height: 1.6;">
                        If you have any questions, feel free to reach out:<br/>
                        📧 Email: naturenavigation56@gmail.com<br/>
                        📱 WhatsApp: +91 95481 77756
                    </p>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <p style="color: #64748b; margin-bottom: 15px;">View your booking status anytime</p>
                        <a href="http://localhost:3000/dashboard" style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">Go to Dashboard</a>
                    </div>
                </div>
                
                <div style="text-align: center; padding: 20px; color: #94a3b8; font-size: 12px;">
                    <p style="margin: 0;">Ready for an adventure? We can't wait to trek with you! 🏔️</p>
                    <p style="margin: 8px 0 0 0;">© 2026 Nature Navigation. All rights reserved.</p>
                </div>
            </div>
        `,
    };

    await transporter.sendMail(mailOptions);
}

export async function sendBookingApprovalToUser(booking: any) {
    const mailOptions = {
        from: '"Nature Navigation" <naturenavigation56@gmail.com>',
        to: booking.userEmail,
        subject: `✅ Trek Booking Confirmed - ${booking.trekName}`,
        html: `
            <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 12px;">
                <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">✅ Booking Confirmed!</h1>
                </div>
                
                <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px;">
                    <p style="color: #0f172a; font-size: 18px; line-height: 1.6;">Hi <strong>${booking.userName}</strong>,</p>
                    
                    <div style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); padding: 20px; border-radius: 12px; text-align: center; margin: 25px 0;">
                        <p style="font-size: 20px; margin: 0; color: #065f46; font-weight: 700;">🎉 Great news!</p>
                        <p style="font-size: 16px; margin: 10px 0 0 0; color: #047857;">Your trek booking has been confirmed!</p>
                    </div>
                    
                    <div style="background: #f0fdf4; border: 2px solid #10b981; padding: 20px; border-radius: 8px; margin: 25px 0;">
                        <h3 style="color: #0f172a; margin-top: 0;">📋 Confirmed Trek Details</h3>
                        <table style="width: 100%;">
                            <tr>
                                <td style="padding: 8px 0; color: #64748b;">Trek:</td>
                                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${booking.trekName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b;">Date:</td>
                                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${new Date(booking.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b;">Participants:</td>
                                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${booking.participants}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b;">Total Amount:</td>
                                <td style="padding: 8px 0; color: #10b981; font-weight: 700; font-size: 18px;">₹${booking.amount.toLocaleString()}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <h3 style="color: #0f172a; margin-top: 30px;">🎒 Next Steps:</h3>
                    <ol style="color: #334155; line-height: 1.8; padding-left: 20px;">
                        <li>Complete payment (payment instructions will be shared separately via WhatsApp)</li>
                        <li>We'll send you a detailed itinerary and packing list 7 days before your trek</li>
                        <li>Prepare your fitness and gear as per our guidelines</li>
                        <li>Get ready for an amazing adventure!</li>
                    </ol>
                    
                    <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 0; color: #1e40af;">
                            <strong>💡 Important:</strong> Our team will contact you shortly with payment details and pre-trek preparation instructions.
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="http://localhost:3000/dashboard" style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">View Booking Details</a>
                    </div>
                </div>
                
                <div style="text-align: center; padding: 20px; color: #94a3b8; font-size: 12px;">
                    <p style="margin: 0;">We're thrilled to have you join us! See you on the trail! 🥾⛰️</p>
                    <p style="margin: 8px 0 0 0;">© 2026 Nature Navigation. All rights reserved.</p>
                </div>
            </div>
        `,
    };

    await transporter.sendMail(mailOptions);
}

export async function sendBookingRejectionToUser(booking: any, reason?: string) {
    const mailOptions = {
        from: '"Nature Navigation" <naturenavigation56@gmail.com>',
        to: booking.userEmail,
        subject: `Trek Booking Update - ${booking.trekName}`,
        html: `
            <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 12px;">
                <div style="background: linear-gradient(135deg, #64748b 0%, #475569 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">Trek Booking Update</h1>
                </div>
                
                <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px;">
                    <p style="color: #0f172a; font-size: 16px; line-height: 1.6;">Hi <strong>${booking.userName}</strong>,</p>
                    
                    <p style="color: #334155; font-size: 16px; line-height: 1.6;">
                        Thank you for your interest in <strong>${booking.trekName}</strong>.
                    </p>
                    
                    <p style="color: #334155; font-size: 16px; line-height: 1.6;">
                        Unfortunately, we're unable to confirm your booking for the selected date due to ${reason || 'unavailability'}.
                    </p>
                    
                    <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 0; color: #92400e;">
                            <strong>Don't worry!</strong> We'd love to help you find an alternative date or trek. Our team will contact you shortly to discuss other options.
                        </p>
                    </div>
                    
                    <h3 style="color: #0f172a; margin-top: 30px;">📞 Contact Us:</h3>
                    <p style="color: #64748b; line-height: 1.6;">
                        📧 Email: naturenavigation56@gmail.com<br/>
                        📱 WhatsApp: +91 95481 77756
                    </p>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="http://localhost:3000/treks" style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">Explore Other Treks</a>
                    </div>
                </div>
                
                <div style="text-align: center; padding: 20px; color: #94a3b8; font-size: 12px;">
                    <p style="margin: 0;">We hope to trek with you soon! 🏔️</p>
                    <p style="margin: 8px 0 0 0;">© 2026 Nature Navigation. All rights reserved.</p>
                </div>
            </div>
        `,
    };

    await transporter.sendMail(mailOptions);
}
