import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/utils/prisma";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, message } = body;

    const lastMessage = await prisma.message.findFirst({
      where: { email },
      orderBy: { createdAt: "desc" },
    });

    if (lastMessage) {
      const oneDayInMs = 24 * 60 * 60 * 1000;
      const now = new Date();
      if (now.getTime() - lastMessage.createdAt.getTime() < oneDayInMs) {
        return NextResponse.json(
          {
            error: "Please wait 24 hours before sending another message.",
            lastSent: lastMessage.createdAt,
          },
          { status: 429 }
        );
      };
    };

    await prisma.message.create({
      data: {
        email,
        name,
        message,
      },
    });

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["artem.99.zaikin@gmail.com"],
      subject: `datair: Message from ${name}`,
      html: `
        <h1>New message from datair!</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
