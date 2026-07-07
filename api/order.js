// Vercel serverless function: заказ → Telegram
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, phone, color } = req.body || {};
  if (!name || !phone) return res.status(400).json({ error: 'Missing fields' });

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return res.status(500).json({ error: 'Bot not configured' });

  const text = [
    '🥤 <b>Лід — лендинг Fresh Juice</b>',
    '',
    `👤 ${name}`,
    `📞 ${phone}`,
    `🎨 Колір на лендингу: ${color || 'Білий'}`,
    '',
    '☎️ Зателефонувати, підтвердити колір і відділення НП',
    '💰 379₴ · оплата при отриманні',
  ].filter(Boolean).join('\n');

  const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
  });

  if (!r.ok) return res.status(502).json({ error: 'Telegram error' });
  return res.status(200).json({ ok: true });
}
