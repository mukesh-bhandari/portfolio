import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
   const { email, message } = body;

  // if (!email || !message) {
  //   return NextResponse.json(
  //     { error: "Email and message are required" },
  //     { status: 400 }
  //   );
  // }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL}>`,
      to: process.env.GMAIL, // where you want to receive messages
      subject: `New message from ${email}`,
      text: message,
      replyTo: email,  
      html: `<p>${message}</p><p>From: ${email}</p>`,
    });
    console.log("Message received:", email, message); // placeholder
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
