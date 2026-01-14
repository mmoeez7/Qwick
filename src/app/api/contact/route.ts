import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      phoneCountryCode,
      address,
      city,
      state,
      businessName,
      serviceUrgency,
      message,
    } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const phoneFull = phoneCountryCode
      ? `${phoneCountryCode} ${phone}`
      : phone;

    const emailText = `
Name: ${name}
Email: ${email}
Phone: ${phoneFull}
${businessName ? `Business: ${businessName}` : ""}
${serviceUrgency ? `Urgency: ${serviceUrgency}` : ""}
${address ? `Address: ${address}` : ""}
${city ? `City: ${city}` : ""}
${state ? `State: ${state}` : ""}

Message:
${message}
    `.trim();

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission — ${name}`,
      text: emailText,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
