import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  // Configure nodemailer with SMTP settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT), // Explicitly convert to number
    secure: Number(process.env.SMTP_PORT) === 465, // Check if port is 465 for secure connection
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "Thanks for Subscribing!",
    text: `Hello ${name},\n\nThank you for subscribing to our newsletter!`,
    html: `<p>Hello ${name},</p><p>Thank you for subscribing to our newsletter!</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Subscription successful" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "There was an error processing your request." });
  }
}
