import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  phoneCountryCode?: string;
  city?: string;
  state?: string;
  businessName?: string;
  serviceUrgency?: string;
  message: string;
};

function requiredString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    if (!requiredString(body.name) || !requiredString(body.email) || !requiredString(body.phone) || !requiredString(body.message)) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields (name, email, phone, message)." },
        { status: 400 },
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_SECURE,
      CONTACT_TO,
      CONTACT_FROM,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { ok: false, error: "Email server is not configured. Missing SMTP env vars." },
        { status: 500 },
      );
    }

    const to = CONTACT_TO || "attaa.779@gmail.com";
    const from = CONTACT_FROM || SMTP_USER;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: String(SMTP_SECURE).toLowerCase() === "true", // true for 465, false for 587
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const phoneFull = `${(body.phoneCountryCode || "US").toUpperCase()} ${body.phone}`;

    const lines: string[] = [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Phone: ${phoneFull}`,
      `Business: ${body.businessName || "-"}`,
      `Urgency: ${body.serviceUrgency || "-"}`,
      `City: ${body.city || "-"}`,
      `State: ${body.state || "-"}`,
      "",
      "Message:",
      body.message,
    ];

    await transporter.sendMail({
      from,
      to,
      replyTo: body.email,
      subject: `New Contact Form Submission — ${body.name}`,
      text: lines.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to send message." }, { status: 500 });
  }
}


