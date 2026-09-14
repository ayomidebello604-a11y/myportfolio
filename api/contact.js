import Sendly from '@sendlyapi/node';

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, message } = req.body ?? {};
  const normalizedEmail = typeof email === 'string' ? email.trim() : '';
  const normalizedMessage = typeof message === 'string' ? message.trim() : '';

  if (!/^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(normalizedEmail)) {
    return res.status(400).json({ error: 'Enter a valid email address.' });
  }

  if (normalizedMessage.length < 5) {
    return res.status(400).json({ error: 'Write a message first.' });
  }

  if (normalizedMessage.length > 5000) {
    return res.status(400).json({ error: 'That message is too long.' });
  }

  try {
    if (!process.env.SENDLY_API_KEY) {
      console.error('SENDLY_API_KEY is not configured.');
      return res.status(500).json({ error: 'Email service is not configured.' });
    }

    const sendly = new Sendly(process.env.SENDLY_API_KEY);

    await sendly.email.send({
      to: ['ayomidebello604@gmail.com'],
      from: 'Dev@bellosamad.me',
      subject: `Portfolio message from ${normalizedEmail}`,
      html:
        `<p><b>From:</b> ${escapeHtml(normalizedEmail)}</p>` +
        `<p style="white-space:pre-wrap">${escapeHtml(normalizedMessage)}</p>`,
      text: `From: ${normalizedEmail}\n\n${normalizedMessage}`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Sendly error:', error);
    return res.status(502).json({ error: "Couldn't send that just now." });  
  }
}