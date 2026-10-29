// Netlify / Vercel serverless function — api/enquiry.js
// Environment variables required (set in hosting dashboard, never in frontend):
//   TELEGRAM_BOT_TOKEN — your Telegram bot token
//   TELEGRAM_CHAT_ID   — your Telegram chat/group ID

const RATE_LIMIT = new Map(); // in-memory; resets on cold start

function escape(text) {
  return String(text ?? '').replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
}

function buildMessage(d) {
  return [
    '*New Enquiry — DevDukaan\\.in*',
    '',
    `*Name:* ${escape(d.name)}`,
    `*Company:* ${escape(d.company || '—')}`,
    `*Email:* ${escape(d.email)}`,
    `*Phone:* ${escape(d.phone)}`,
    `*Service:* ${escape(d.service)}`,
    `*Budget:* ${escape(d.budget || '—')}`,
    `*Timeline:* ${escape(d.timeline || '—')}`,
    `*Contact Preference:* ${escape(d.contactPreference || '—')}`,
    `*Project Details:* ${escape(d.description)}`,
    `*Source Page:* ${escape(d.sourcePage)}`,
    `*Submitted At:* ${escape(d.submittedAt)}`,
  ].join('\n');
}

function validate(d) {
  if (!d.name?.trim()) return 'Name is required.';
  if (!d.email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'Valid email is required.';
  if (!d.phone?.match(/^\+?[\d\s\-()]{7,15}$/)) return 'Valid phone number is required.';
  if (!d.service?.trim()) return 'Service selection is required.';
  if (!d.description?.trim()) return 'Project description is required.';
  return null;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0] || 'unknown';
  const now = Date.now();
  const windowMs = 60_000;
  const maxRequests = 3;

  const entry = RATE_LIMIT.get(ip) || { count: 0, start: now };
  if (now - entry.start > windowMs) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count++;
  RATE_LIMIT.set(ip, entry);

  if (entry.count > maxRequests) {
    return res.status(429).json({ message: 'Too many requests. Please wait a moment.' });
  }

  const data = req.body;
  const error = validate(data);
  if (error) return res.status(400).json({ message: error });

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error('Telegram credentials not configured.');
    return res.status(500).json({ message: 'Server configuration error.' });
  }

  const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: buildMessage(data),
      parse_mode: 'MarkdownV2',
    }),
  });

  if (!telegramRes.ok) {
    const err = await telegramRes.json().catch(() => ({}));
    console.error('Telegram API error:', err);
    return res.status(502).json({ message: 'Failed to deliver enquiry. Please try again.' });
  }

  return res.status(200).json({ message: 'Enquiry submitted successfully.' });
}
