import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Values come from a public form, so escape them before putting them in HTML
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// wa.me links need digits only in international format. A number typed in the
// local South African style (082...) is assumed to be +27; anything starting
// with "+" is taken as already international.
const toWhatsAppLink = (raw) => {
  // "(0)" is written to mark a trunk prefix that is dropped when dialling
  // internationally, e.g. +27 (0)82 ... , so remove it before reading digits
  const trimmed = String(raw).trim().replace(/\(\s*0\s*\)/g, "");
  let digits = trimmed.replace(/\D/g, "");
  // "+" and a leading "00" both mean the country code follows
  const isInternational = trimmed.startsWith("+") || digits.startsWith("00");

  if (isInternational) {
    digits = digits.replace(/^00/, "");
  } else if (digits.startsWith("0")) {
    digits = `27${digits.slice(1)}`;
  }

  // E.164 allows 8-15 digits; outside that it isn't a usable number
  if (digits.length < 8 || digits.length > 15) return null;
  return `https://wa.me/${digits}`;
};

export async function POST(req) {
  try {
    const { email, subject, message, whatsapp } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Email, subject, and message are required." },
        { status: 400 }
      );
    }

    const whatsappLink = whatsapp ? toWhatsAppLink(whatsapp) : null;
    const whatsappRow = whatsapp
      ? `<p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}${
          whatsappLink
            ? ` &mdash; <a href="${whatsappLink}">Reply on WhatsApp</a>`
            : " (number not recognised, please dial manually)"
        }</p>`
      : "";

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.TO_EMAIL || "your-email@gmail.com"], // Important: if using free tier, this MUST be the email address you registered with Resend
      subject: subject,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Contact Form Message</h2>
          <p><strong>From:</strong> ${escapeHtml(email)}</p>
          ${whatsappRow}
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
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
