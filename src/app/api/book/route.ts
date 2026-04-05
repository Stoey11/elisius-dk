import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, interest, message } = body;

    if (!name || !email || !company || !interest) {
      return NextResponse.json(
        { error: "Udfyld venligst alle påkrævede felter." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Elisius Booking <onboarding@resend.dev>",
      to: "victor@elisius.dk",
      replyTo: email,
      subject: `Ny booking: ${name} fra ${company}`,
      html: `
        <h2>Ny AI Sparring Booking</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px 12px;font-weight:bold;color:#374151;">Navn</td><td style="padding:8px 12px;">${name}</td></tr>
          <tr style="background:#f9fafb;"><td style="padding:8px 12px;font-weight:bold;color:#374151;">Email</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;color:#374151;">Telefon</td><td style="padding:8px 12px;">${phone || "Ikke angivet"}</td></tr>
          <tr style="background:#f9fafb;"><td style="padding:8px 12px;font-weight:bold;color:#374151;">Virksomhed</td><td style="padding:8px 12px;">${company}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;color:#374151;">Interesse</td><td style="padding:8px 12px;">${interest}</td></tr>
          <tr style="background:#f9fafb;"><td style="padding:8px 12px;font-weight:bold;color:#374151;">Besked</td><td style="padding:8px 12px;">${message || "Ingen besked"}</td></tr>
        </table>
        <hr style="margin-top:24px;border:none;border-top:1px solid #e5e7eb;" />
        <p style="color:#9ca3af;font-size:12px;">Sendt fra elisius.dk booking-formular</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Der opstod en fejl. Prøv igen senere." },
      { status: 500 }
    );
  }
}
