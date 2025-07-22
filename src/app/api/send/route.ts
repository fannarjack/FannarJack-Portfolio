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

    // Check that data.data exists and has id
    if (!data.data || !data.data.id) {
      return new Response(
        JSON.stringify({ success: false, error: 'No email ID returned' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ success: true, id: data.data.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
