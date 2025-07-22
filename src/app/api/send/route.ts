import { Resend } from 'resend';
import ContactEmail from '@/components/specific/ContactEmail'; // Adjust if needed

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const data = await resend.emails.send({
      from: 'Your Portfolio <onboarding@resend.dev>',
      to: ['fannarjack@gmail.com'],
      subject: `New message from ${name}`,
      react: ContactEmail({ name, email, subject, message }),
    });

    return Response.json({ success: true, id: data.id });
  } catch (error) {
    console.error('Email sending error:', error);
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
