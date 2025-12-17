import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message, subject } = body;
    console.log('Contact API called with:', { name, email, subject });

    if (!name || !email || !message) {
      console.log('Error: Missing required fields');
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    console.log('Creating transporter for info@bizondigital.com');
    // Create transporter for info@bizondigital.com
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'info@bizondigital.com',
        pass: 'Bizon@9125',
      },
      tls: {
        rejectUnauthorized: false // Accept self-signed certificates
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 10000,
      debug: true, // Enable debug output
      logger: true // Enable logger
    });

    console.log('Verifying transporter connection...');
    // Verify connection
    try {
      await transporter.verify();
      console.log('Transporter verified successfully');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json({ error: 'Email configuration error: ' + (verifyError as Error).message }, { status: 500 });
    }

    // Determine email type
    const isQuote = subject?.includes('Quote') || service;
    const emailType = isQuote ? 'Quote Request' : 'Contact Form';

    // Email to admin (info@bizondigital.com)
    const adminMailOptions = {
      from: 'info@bizondigital.com',
      to: 'info@bizondigital.com',
      subject: `New ${emailType} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #FF7A00; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 5px 5px; }
            .field { background-color: white; padding: 12px; margin: 10px 0; border-left: 4px solid #FF7A00; }
            .field-label { font-weight: bold; color: #FF7A00; margin-bottom: 5px; }
            .field-value { color: #333; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${emailType} Received</h1>
            </div>
            <div class="content">
              <h2>Contact Details</h2>
              
              <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="field-label">Phone:</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}

              ${company ? `
              <div class="field">
                <div class="field-label">Company:</div>
                <div class="field-value">${company}</div>
              </div>
              ` : ''}

              ${service ? `
              <div class="field">
                <div class="field-label">Service Interested:</div>
                <div class="field-value">${service}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value">${message}</div>
              </div>

              <div class="field">
                <div class="field-label">Received at:</div>
                <div class="field-value">${new Date().toLocaleString()}</div>
              </div>
            </div>
            <div class="footer">
              <p>BizOn Digital - Digital Marketing Agency</p>
              <p>169 Madison Ave STE 2945, New York, NY 10016</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Thank you email to user
    const userMailOptions = {
      from: 'BizOn Digital <info@bizondigital.com>',
      to: email,
      subject: isQuote ? 'Thank You for Your Quote Request!' : 'Thank You for Contacting BizOn Digital!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #FF7A00; color: white; padding: 30px; text-align: center; border-radius: 5px 5px 0 0; }
            .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 5px 5px; }
            .message-box { background-color: white; padding: 20px; margin: 20px 0; border-radius: 5px; border-left: 5px solid #FF7A00; }
            .button { display: inline-block; background-color: #FF7A00; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin: 15px 0; font-weight: bold; }
            .contact-box { background-color: white; padding: 20px; margin: 20px 0; border-radius: 5px; text-align: center; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">BizOn Digital</div>
              <p style="font-size: 14px; font-style: italic; margin: 0;">We Will Connect Soon</p>
            </div>
            <div class="content">
              <div class="message-box">
                <h2 style="color: #FF7A00; margin-top: 0;">${isQuote ? 'Thank You for Your Quote Request! 🎯' : 'Thank You for Reaching Out! 👋'}</h2>
                <p>Hi ${name},</p>
                <p>Thank you for contacting BizOn Digital! We've received your ${isQuote ? 'quote request' : 'message'} and appreciate your interest in our services.</p>
                <p><strong>Our team will review your request and get back to you within 24 hours.</strong></p>
                ${isQuote ? `
                <p>In the meantime, feel free to explore our services and success stories on our website.</p>
                ` : `
                <p>We're excited to learn more about your project and how we can help you achieve your digital marketing goals.</p>
                `}
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <p style="margin-bottom: 15px;"><strong>Want to schedule a call right away?</strong></p>
                <a href="https://bizondigital.com/contact" class="button">Schedule a Call</a>
              </div>

              <div class="contact-box">
                <p style="margin: 0; font-size: 14px;"><strong>Need immediate assistance?</strong></p>
                <p style="margin: 10px 0;">📞 <a href="tel:+15164405037" style="color: #FF7A00; text-decoration: none;">+1 (516) 440-5037</a></p>
                <p style="margin: 10px 0;">📧 <a href="mailto:info@bizondigital.com" style="color: #FF7A00; text-decoration: none;">info@bizondigital.com</a></p>
                <p style="margin: 10px 0;">💬 <a href="https://wa.me/918554044682" style="color: #FF7A00; text-decoration: none;">WhatsApp Us</a></p>
              </div>

              <div style="background-color: white; padding: 20px; margin: 20px 0; border-radius: 5px;">
                <h3 style="color: #333; margin-top: 0;">What Happens Next?</h3>
                <ul style="color: #666; line-height: 1.8;">
                  <li>✅ Our team reviews your ${isQuote ? 'quote request' : 'inquiry'}</li>
                  <li>✅ We prepare a personalized response</li>
                  <li>✅ You'll receive a detailed reply within 24 hours</li>
                  <li>✅ We'll schedule a consultation call if needed</li>
                </ul>
              </div>
            </div>

            <div class="footer">
              <p><strong>BizOn Digital</strong> - Your Growth Partner In Digital Marketing Excellence</p>
              <p>169 Madison Ave STE 2945, New York, NY 10016</p>
              <p style="margin-top: 15px;">
                <a href="#" style="color: #FF7A00; margin: 0 5px;">Facebook</a> | 
                <a href="#" style="color: #FF7A00; margin: 0 5px;">LinkedIn</a> | 
                <a href="#" style="color: #FF7A00; margin: 0 5px;">Twitter</a> | 
                <a href="#" style="color: #FF7A00; margin: 0 5px;">Instagram</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    console.log('Sending admin email to info@bizondigital.com');
    // Send both emails
    await transporter.sendMail(adminMailOptions);
    console.log('Admin email sent successfully');

    console.log('Sending confirmation email to user:', email);
    await transporter.sendMail(userMailOptions);
    console.log('Confirmation email sent successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Your message has been sent successfully! Check your email for confirmation.' 
    }, { status: 200 });

  } catch (error: any) {
    console.error('Contact form error:', error);
    console.error('Error details:', error.message, error.stack);
    return NextResponse.json({ 
      error: 'Failed to send message', 
      details: error.message 
    }, { status: 500 });
  }
}
