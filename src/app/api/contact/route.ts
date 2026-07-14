import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/content";
import { contactFormSchema } from "@/components/sections/contact-form-schema";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Please check your inputs and try again." },
      { status: 400 }
    );
  }

  const { name, email, company, phone, service, message, website } = parsed.data;

  if (website) {
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey) {
    console.error(
      "Contact form submission received but RESEND_API_KEY is not configured. Set it in .env.local."
    );
    return NextResponse.json(
      { error: "Email service is not configured yet. Please try again later or email us directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: `${site.name} Website <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New consultation request from ${name}`,
      html: `
        <h2>New consultation request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        <p><strong>Service interest:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { error: "We couldn't send your request right now. Please email us directly." },
      { status: 500 }
    );
  }
}
