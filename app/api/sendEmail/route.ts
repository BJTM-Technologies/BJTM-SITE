import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Parse the incoming request body from  contact form
    const { name, email, subject, message } = await req.json();

    // Create a Nodemailer transporter using your email service configuration
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
    });

    // Define the email options (from, to, subject, and body)
    const mailOptions = {
      from: email, // Sender email address
      to: process.env.NEXT_PUBLIC_SMTP_USER,
      subject: subject,
      text: `Message from: ${name}\nEmail: ${email}\n\n${message}\n\nSubject:${subject}`,
      html: `<p><strong>Message from:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p><p><strong>Subject:</strong> ${subject}</p>`,
    };

    // Send the email using the transporter
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
