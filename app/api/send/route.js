//import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["fuss.matthew.j@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for reaching out!</p>
          <p>Your email has been sent</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
