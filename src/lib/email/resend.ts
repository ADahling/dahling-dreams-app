import { Resend } from 'resend';
export const resend = new Resend(process.env.RESEND_API_KEY!);
export async function sendSignupEmail(to: string) {
  return resend.emails.send({
    from: 'Dahling Dreams <noreply@dahlingdreams.app>',
    to,
    subject: 'Welcome to Dahling Dreams',
    html: '<p>Thanks for signing up! Your adventure awaits.</p>'
  });
}
