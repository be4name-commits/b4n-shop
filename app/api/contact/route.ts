import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, name, email, phone, message, type } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email notification payload
    const emailData = {
      to: process.env.CONTACT_EMAIL || 'b2b@be4name.ch',
      subject: type === 'b2b' ? 'New B2B Partnership Request' : 'New Contact Form Submission',
      html: `
        <h2>New ${type === 'b2b' ? 'B2B Partnership' : 'Contact'} Request</h2>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><small>Sent from B4N website contact form</small></p>
      `,
    };

    // For now, we'll use a simple SMTP service or third-party API
    // You can integrate with SendGrid, Mailgun, Resend, etc.
    // Example with fetch to a mail service:
    
    const mailServiceUrl = process.env.MAIL_SERVICE_URL;
    const mailServiceKey = process.env.MAIL_SERVICE_KEY;

    if (mailServiceUrl && mailServiceKey) {
      const mailResponse = await fetch(mailServiceUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${mailServiceKey}`,
        },
        body: JSON.stringify(emailData),
      });

      if (!mailResponse.ok) {
        console.error('Mail service error:', await mailResponse.text());
        throw new Error('Failed to send email');
      }
    } else {
      // Log to console for development
      console.log('📧 Email notification (configure MAIL_SERVICE_URL to send):', emailData);
    }

    return NextResponse.json({ success: true, message: 'Request received successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
