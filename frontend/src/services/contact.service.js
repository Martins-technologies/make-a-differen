import { MAIL_SUBJECTS } from '@/config/mail';
import { sendToInbox } from './formMail.service';

export const contactService = {
  async send({ fullName, email, phone, subject, message }) {
    await sendToInbox({
      subject: `${MAIL_SUBJECTS.contact}: ${subject}`,
      replyTo: email,
      fields: {
        'Full name': fullName,
        Email: email,
        Phone: phone,
        Subject: subject,
        Message: message,
      },
    });
  },
};
