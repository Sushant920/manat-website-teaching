import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  program?: string;
  message?: string;
  website?: string; // honeypot - must stay empty
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  // Bot filled the honeypot - pretend success without sending.
  if ((body.website || "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const program = (body.program || "").trim();
  const message =
    (body.message || "").trim() || "Quick enquiry from website form.";

  if (!name || !phone || !program) {
    return NextResponse.json(
      { ok: false, error: "Please fill in name, phone, and course." },
      { status: 400 },
    );
  }

  if (email && !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  if (name.length > 120 || message.length > 4000 || phone.length > 40) {
    return NextResponse.json(
      { ok: false, error: "One of the fields is too long." },
      { status: 400 },
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error("[contact] RESEND_API_KEY is not configured.");
    return NextResponse.json(
      {
        ok: false,
        error:
          "Enquiry email is not configured yet. Please call or WhatsApp us instead.",
      },
      { status: 503 },
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Manat Website <onboarding@resend.dev>";
  const submittedAt = new Date().toISOString();

  const textBody = [
    "New enquiry from the Manat website",
    "",
    `Submitted at: ${submittedAt}`,
    `Name: ${name}`,
    `Phone / WhatsApp: ${phone}`,
    `Email: ${email || "(not provided)"}`,
    `Course: ${program}`,
    "",
    "Message:",
    message,
    "",
    `Reply phone: ${phone}`,
    email ? `Reply email: ${email}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      ...(email ? { reply_to: email } : {}),
      subject: `New Manat enquiry - ${program} - ${name}`,
      text: textBody,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Resend error:", detail);
    return NextResponse.json(
      {
        ok: false,
        error: "Could not deliver the enquiry. Please call or WhatsApp.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
