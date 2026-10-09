import { FORM_INBOX_EMAIL } from '@/config/mail';

function formatField(value) {
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  const text = String(value ?? '').trim();
  return text || 'Not provided';
}

/**
 * Sends labeled form fields to FORM_INBOX_EMAIL.
 * Delivery uses FormSubmit, which forwards the message into that Gmail inbox.
 */
export async function sendToInbox({ subject, replyTo, fields }) {
  const payload = {
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
  };

  if (replyTo) payload._replyto = replyTo;

  Object.entries(fields).forEach(([label, value]) => {
    payload[label] = formatField(value);
  });

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(FORM_INBOX_EMAIL)}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  const delivered = response.ok && (data.success === true || data.success === 'true');
  if (!delivered) {
    throw new Error(data.message || 'Unable to send this form');
  }
}
