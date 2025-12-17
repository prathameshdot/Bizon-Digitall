import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email, name, subject, message, isHelpDesk } = await request.json();
    console.log('Subscribe API called with:', { email, isHelpDesk });

    if (!email) {
      console.log('Error: Email is required');
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    console.log('Creating transporter for connect@bizondigital.com');
    // Create transporter for connect@bizondigital.com
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'connect@bizondigital.com',
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

    // Check if this is a help desk request
    if (isHelpDesk) {
      // Email to admin (connect@bizondigital.com) for help desk
      const helpDeskMailOptions = {
        from: 'connect@bizondigital.com',
        to: 'connect@bizondigital.com',
        subject: `Help Desk Support Request - ${subject}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #FF7A00; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
              .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 5px 5px; }
              .info { background-color: white; padding: 15px; margin: 15px 0; border-left: 4px solid #FF7A00; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Help Desk Support Request</h1>
              </div>
              <div class="content">
                <h2>Request Details</h2>
                <div class="info">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
                </div>
                <div class="info">
                  <p><strong>Message:</strong></p>
                  <p>${message}</p>
                </div>
                <p>Please respond to this support request as soon as possible.</p>
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

      console.log('Sending help desk email to connect@bizondigital.com');
      await transporter.sendMail(helpDeskMailOptions);
      console.log('Help desk email sent successfully');

      return NextResponse.json({ 
        success: true, 
        message: 'Support request submitted successfully! We will respond within 24 hours.' 
      }, { status: 200 });
    }

    // Email to admin (connect@bizondigital.com) for newsletter subscription
    const adminMailOptions = {
      from: 'connect@bizondigital.com',
      to: 'connect@bizondigital.com',
      subject: 'New Newsletter Subscription',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #FF7A00; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 5px 5px; }
            .info { background-color: white; padding: 15px; margin: 15px 0; border-left: 4px solid #FF7A00; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Newsletter Subscription</h1>
            </div>
            <div class="content">
              <h2>Subscriber Details</h2>
              <div class="info">
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
              </div>
              <p>A new user has subscribed to your newsletter. Please add them to your mailing list.</p>
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

    // Thank you email to subscriber
    const subscriberMailOptions = {
      from: 'BizOn Digital <connect@bizondigital.com>',
      to: email,
      subject: 'Welcome to BizOn Digital! Your Free Marketing Tips Await 🚀',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #FF7A00; color: white; padding: 30px; text-align: center; border-radius: 5px 5px 0 0; }
            .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
            .tagline { font-size: 14px; font-style: italic; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 5px 5px; }
            .welcome { background-color: white; padding: 20px; margin: 20px 0; border-radius: 5px; border-left: 5px solid #FF7A00; }
            .button { display: inline-block; background-color: #FF7A00; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin: 15px 0; font-weight: bold; }
            .benefits { background-color: white; padding: 20px; margin: 20px 0; border-radius: 5px; }
            .benefits ul { list-style: none; padding: 0; }
            .benefits li { padding: 8px 0; padding-left: 25px; position: relative; }
            .benefits li:before { content: "✓"; position: absolute; left: 0; color: #FF7A00; font-weight: bold; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
            .social-links { margin: 20px 0; }
            .social-links a { display: inline-block; margin: 0 10px; color: #FF7A00; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">BizOn Digital</div>
              <div class="tagline">We Will Connect Soon</div>
            </div>
            <div class="content">
              <div class="welcome">
                <h2 style="color: #FF7A00; margin-top: 0;">Welcome to BizOn Digital! 🎉</h2>
                <p>Hi there,</p>
                <p>Thank you for subscribing to our newsletter! We're thrilled to have you as part of our community of forward-thinking marketers and business owners.</p>
                <p><strong>We will connect with you soon</strong> with valuable insights, exclusive strategies, and the latest trends in digital marketing to help your business thrive online.</p>
              </div>

              <div class="benefits">
                <h3 style="color: #333;">Here's what you'll receive:</h3>
                <ul>
                  <li>Weekly digital marketing tips and best practices</li>
                  <li>Exclusive case studies and success stories</li>
                  <li>Early access to our latest tools and resources</li>
                  <li>Special offers and promotions for subscribers only</li>
                  <li>Expert insights on SEO, PPC, Social Media & more</li>
                </ul>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <p>Want to accelerate your growth even faster?</p>
                <a href="https://bizondigital.com/contact" class="button">Schedule Your Free Consultation</a>
              </div>

              <div style="background-color: white; padding: 20px; margin: 20px 0; border-radius: 5px; text-align: center;">
                <p style="margin: 0; font-size: 14px;"><strong>Need immediate help?</strong></p>
                <p style="margin: 5px 0;">Call us: <a href="tel:+15164405037" style="color: #FF7A00; text-decoration: none;">+1 (516) 440-5037</a></p>
                <p style="margin: 5px 0;">Email: <a href="mailto:info@bizondigital.com" style="color: #FF7A00; text-decoration: none;">info@bizondigital.com</a></p>
              </div>
            </div>

            <div class="footer">
              <div class="social-links">
                <a href="#">Facebook</a> | 
                <a href="#">LinkedIn</a> | 
                <a href="#">Twitter</a> | 
                <a href="#">Instagram</a>
              </div>
              <p><strong>BizOn Digital</strong> - Your Growth Partner In Digital Marketing Excellence</p>
              <p>169 Madison Ave STE 2945, New York, NY 10016</p>
              <p style="font-size: 11px; margin-top: 15px;">
                You're receiving this email because you subscribed to BizOn Digital's newsletter.
                <br>If you wish to unsubscribe, please <a href="#" style="color: #FF7A00;">click here</a>.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    console.log('Sending admin email to connect@bizondigital.com');
    // Send both emails
    await transporter.sendMail(adminMailOptions);
    console.log('Admin email sent successfully');

    console.log('Sending confirmation email to subscriber:', email);
    await transporter.sendMail(subscriberMailOptions);
    console.log('Confirmation email sent successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Subscription successful! Check your email for confirmation.' 
    }, { status: 200 });

  } catch (error: any) {
    console.error('Subscription error:', error);
    console.error('Error details:', error.message, error.stack);
    return NextResponse.json({ 
      error: 'Failed to process subscription', 
      details: error.message 
    }, { status: 500 });
  }
}
