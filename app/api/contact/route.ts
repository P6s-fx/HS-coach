import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

type ContactPayload = {
  name: string
  phone: string
  email: string
  city: string
  inquiryType: string
  timeline: string
  message: string
  website?: string
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function sanitizeLine(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim()
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function parseRecipients(value: string | undefined) {
  if (!value) return []
  return value
    .split(/[;,]/)
    .map((v) => v.trim())
    .filter(Boolean)
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ ok: false, error: 'Invalid content type' }, { status: 415 })
    }

    const raw = (await req.json()) as Partial<ContactPayload>

    if (isNonEmptyString(raw.website)) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    const name = isNonEmptyString(raw.name) ? raw.name.trim() : ''
    const phone = isNonEmptyString(raw.phone) ? raw.phone.trim() : ''
    const email = isNonEmptyString(raw.email) ? raw.email.trim() : ''
    const city = isNonEmptyString(raw.city) ? raw.city.trim() : ''
    const inquiryType = isNonEmptyString(raw.inquiryType) ? raw.inquiryType.trim() : ''
    const timeline = isNonEmptyString(raw.timeline) ? raw.timeline.trim() : ''
    const message = isNonEmptyString(raw.message) ? raw.message.trim() : ''

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: 'Please provide name, phone, and message.' },
        { status: 400 },
      )
    }

    const user = process.env.GMAIL_USER
    const pass = process.env.GMAIL_APP_PASSWORD
    const to = process.env.CONTACT_TO || user

    if (!user || !pass || !to) {
      return NextResponse.json(
        { ok: false, error: 'Server is not configured for email.' },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    })

    const toList = parseRecipients(to)

    const subject = `HS coach enquiry - ${sanitizeLine(inquiryType || 'General')}`

    const text = [
      `Name: ${sanitizeLine(name)}`,
      `Phone: ${sanitizeLine(phone)}`,
      `Email: ${sanitizeLine(email || '-')}`,
      `City: ${sanitizeLine(city || '-')}`,
      `Type: ${sanitizeLine(inquiryType || '-')}`,
      `Timeline: ${sanitizeLine(timeline || '-')}`,
      '',
      message,
    ].join('\n')

    const safe = {
      name: escapeHtml(name),
      phone: escapeHtml(phone),
      email: escapeHtml(email || '-'),
      city: escapeHtml(city || '-'),
      inquiryType: escapeHtml(inquiryType || '-'),
      timeline: escapeHtml(timeline || '-'),
      message: escapeHtml(message),
    }

    const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:#07080b;color:#e9eaee;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <div style="padding:24px 12px;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="width:100%;max-width:640px;border-collapse:separate;border-spacing:0;">
        <tr>
          <td style="padding:18px 18px;border:1px solid rgba(255,255,255,0.10);border-bottom:none;border-radius:16px 16px 0 0;background:rgba(255,255,255,0.03);">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
              <div>
                <div style="font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#f0d28a;">HS coach</div>
                <div style="margin-top:6px;font-size:18px;font-weight:750;color:#ffffff;">New website enquiry</div>
              </div>
              <div style="font-size:12px;color:rgba(255,255,255,0.65);">${escapeHtml(new Date().toLocaleString())}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:18px;border:1px solid rgba(255,255,255,0.10);background:rgba(255,255,255,0.02);">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:separate;border-spacing:0;">
              <tr>
                <td style="padding:12px 0;color:rgba(255,255,255,0.65);font-size:12px;">Type</td>
                <td style="padding:12px 0;color:#ffffff;font-size:14px;font-weight:600;text-align:right;">${safe.inquiryType}</td>
              </tr>
              <tr>
                <td colspan="2" style="border-top:1px solid rgba(255,255,255,0.08);"></td>
              </tr>
              <tr>
                <td style="padding:12px 0;color:rgba(255,255,255,0.65);font-size:12px;">Timeline</td>
                <td style="padding:12px 0;color:#ffffff;font-size:14px;font-weight:600;text-align:right;">${safe.timeline}</td>
              </tr>
              <tr>
                <td colspan="2" style="border-top:1px solid rgba(255,255,255,0.08);"></td>
              </tr>
              <tr>
                <td style="padding:12px 0;color:rgba(255,255,255,0.65);font-size:12px;">Name</td>
                <td style="padding:12px 0;color:#ffffff;font-size:14px;text-align:right;">${safe.name}</td>
              </tr>
              <tr>
                <td colspan="2" style="border-top:1px solid rgba(255,255,255,0.08);"></td>
              </tr>
              <tr>
                <td style="padding:12px 0;color:rgba(255,255,255,0.65);font-size:12px;">Phone</td>
                <td style="padding:12px 0;color:#ffffff;font-size:14px;text-align:right;">${safe.phone}</td>
              </tr>
              <tr>
                <td colspan="2" style="border-top:1px solid rgba(255,255,255,0.08);"></td>
              </tr>
              <tr>
                <td style="padding:12px 0;color:rgba(255,255,255,0.65);font-size:12px;">Email</td>
                <td style="padding:12px 0;color:#ffffff;font-size:14px;text-align:right;">${safe.email}</td>
              </tr>
              <tr>
                <td colspan="2" style="border-top:1px solid rgba(255,255,255,0.08);"></td>
              </tr>
              <tr>
                <td style="padding:12px 0;color:rgba(255,255,255,0.65);font-size:12px;">City</td>
                <td style="padding:12px 0;color:#ffffff;font-size:14px;text-align:right;">${safe.city}</td>
              </tr>
            </table>

            <div style="margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.08);">
              <div style="font-size:12px;color:rgba(255,255,255,0.65);letter-spacing:0.12em;text-transform:uppercase;">Message</div>
              <div style="margin-top:10px;white-space:pre-wrap;line-height:1.6;font-size:14px;color:rgba(255,255,255,0.92);">${safe.message}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 18px;border:1px solid rgba(255,255,255,0.10);border-top:none;border-radius:0 0 16px 16px;background:rgba(255,255,255,0.03);">
            <div style="font-size:12px;color:rgba(255,255,255,0.55);">
              Reply to this email to respond (reply-to is set to the sender’s email if provided).
              
            </div>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`

    await transporter.sendMail({
      from: `HS coach Website <${user}>`,
      to: toList.length > 0 ? toList : to,
      replyTo: email || undefined,
      subject,
      text,
      html,
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ ok: false, error: 'Failed to send message.' }, { status: 500 })
  }
}
