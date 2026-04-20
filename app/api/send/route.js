import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Email, subject, and message are required." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.TO_EMAIL || "your-email@gmail.com"], // Important: if using free tier, this MUST be the email address you registered with Resend
      subject: subject,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Contact Form Message</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return NextResponse.json(
        { error: data.error.message || "Failed to send message via Resend." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
