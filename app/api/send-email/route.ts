// app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { fullName, phoneNumber, email, company, industry, package: selectedPackage, source, businessInterests } = body;

        // Customer confirmation email
        const customerEmail = {
            from: 'Turkey Biz Beyond Borders <noreply@bonvastours.com>',
            to: [email],
            subject: 'Your Turkey Business Tour Booking Request Received',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #D34A26 0%, #FF6B47 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="margin: 0; font-size: 24px;">Turkey Biz Beyond Borders 2025</h1>
                        <p style="margin: 10px 0 0 0; font-size: 16px;">International Business Exploration Tour</p>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
                        <h2 style="color: #333; margin-bottom: 20px;">Dear ${fullName},</h2>
                        
                        <p style="color: #555; line-height: 1.6;">
                            Thank you for your interest in our Turkey Business Exploration Tour! We have received your booking request and our team will contact you within 24 hours to discuss the next steps.
                        </p>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D34A26;">
                            <h3 style="color: #D34A26; margin-top: 0;">Your Booking Details:</h3>
                            <p style="margin: 8px 0; color: #333;"><strong>Package:</strong> ${selectedPackage}</p>
                            <p style="margin: 8px 0; color: #333;"><strong>Company:</strong> ${company}</p>
                            <p style="margin: 8px 0; color: #333;"><strong>Industry:</strong> ${industry}</p>
                            <p style="margin: 8px 0; color: #333;"><strong>Phone:</strong> ${phoneNumber}</p>
                        </div>
                        
                        <div style="background: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #2c5282; margin-top: 0;">Tour Highlights:</h3>
                            <ul style="color: #555; line-height: 1.6; margin: 0; padding-left: 20px;">
                                <li>September 9-15, 2025 (6 Days / 5 Nights)</li>
                                <li>Visit Istanbul, Bursa, and Kocaeli</li>
                                <li>Factory tours and manufacturing site visits</li>
                                <li>Access to Zuchex & TTM international trade fairs</li>
                                <li>B2B networking with Turkish manufacturers</li>
                                <li>Cultural experiences including Bosphorus cruise</li>
                            </ul>
                        </div>
                        
                        <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #ffeaa7;">
                            <h3 style="color: #856404; margin-top: 0;">⏰ Important Deadlines:</h3>
                            <p style="margin: 8px 0; color: #856404;"><strong>Early Bird Deadline:</strong> July 31st, 2025</p>
                            <p style="margin: 8px 0; color: #856404;"><strong>Final Registration:</strong> August 25th, 2025</p>
                            <p style="margin: 8px 0; color: #856404;"><strong>Limited to:</strong> 25 participants only</p>
                        </div>
                        
                        <div style="text-align: center; margin: 30px 0;">
                            <p style="color: #555; margin-bottom: 15px;">Questions? We're here to help!</p>
                            <p style="color: #333; margin: 5px 0;"><strong>Email:</strong> info@bonvastours.com</p>
                            <p style="color: #333; margin: 5px 0;"><strong>Phone/WhatsApp:</strong> +233 261 671 686</p>
                        </div>
                        
                        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
                            <p style="color: #999; font-size: 12px;">
                                This email was sent by Bonvas Tours Limited<br>
                                Follow us: @BonvasTours
                            </p>
                        </div>
                    </div>
                </div>
            `,
        };

        // Admin notification email
        const adminEmail = {
            from: 'Turkey Biz Beyond Borders <noreply@bonvastours.com>',
            to: ['admin@bonvastours.com'],
            subject: `New Turkey Tour Booking Request - ${fullName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: #D34A26; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="margin: 0; font-size: 24px;">New Turkey Tour Booking Request</h1>
                        <p style="margin: 10px 0 0 0;">Turkey Biz Beyond Borders 2025</p>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
                        <h2 style="color: #333; margin-bottom: 20px;">Customer Details:</h2>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Full Name:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${fullName}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${email}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${phoneNumber}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Company:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${company}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Industry:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${industry}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Package:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${selectedPackage}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Source:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${source}</td>
                                </tr>
                            </table>
                        </div>
                        
                        ${businessInterests ? `
                        <div style="background: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #2c5282; margin-top: 0;">Business Interests & Goals:</h3>
                            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${businessInterests}</p>
                        </div>
                        ` : ''}
                        
                        <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #ffeaa7;">
                            <h3 style="color: #856404; margin-top: 0;">⚡ Action Required:</h3>
                            <p style="color: #856404; margin: 8px 0;">Follow up with this customer within 24 hours</p>
                            <p style="color: #856404; margin: 8px 0;">Send detailed itinerary and payment instructions</p>
                            <p style="color: #856404; margin: 8px 0;">Confirm industry-specific factory visits</p>
                        </div>
                        
                        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
                            <p style="color: #999; font-size: 12px;">
                                Booking submitted at ${new Date().toLocaleString()}<br>
                                Turkey Biz Beyond Borders 2025
                            </p>
                        </div>
                    </div>
                </div>
            `,
        };

        // Send both emails
        await Promise.all([
            resend.emails.send(customerEmail),
            resend.emails.send(adminEmail)
        ]);

        return NextResponse.json({ message: 'Emails sent successfully' });

    } catch (error) {
        console.error('Error sending emails:', error);
        return NextResponse.json(
            { error: 'Failed to send emails' },
            { status: 500 }
        );
    }
}