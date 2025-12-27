'use client'

import { useMemo, useState } from 'react'

type InquiryFormProps = {
  title?: string
  hint?: string
}

type FormState = {
  name: string
  phone: string
  email: string
  city: string
  inquiryType: string
  timeline: string
  message: string
}

const inquiryTypes = ['Coach Body Manufacturing', 'Luxury Skins', 'Interior Upgrade', 'Refurbishment', 'Other'] as const
const timelines = ['Immediately', 'This month', 'Next 1-3 months', 'Just exploring'] as const

export function InquiryForm({ title = 'Send an enquiry', hint }: InquiryFormProps) {
  const [state, setState] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    city: '',
    inquiryType: inquiryTypes[0],
    timeline: timelines[2],
    message: '',
  })

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`New enquiry - ${state.inquiryType}`)
    const body = encodeURIComponent(
      [
        `Name: ${state.name}`,
        `Phone: ${state.phone}`,
        `Email: ${state.email}`,
        `City: ${state.city}`,
        `Type: ${state.inquiryType}`,
        `Timeline: ${state.timeline}`,
        '',
        state.message,
      ].join('\n'),
    )
    return `mailto:hscoachpvt@gmail.com?subject=${subject}&body=${body}`
  }, [state])

  return (
    <div className="formCard">
      <div className="formHead">
        <div className="formTitle">{title}</div>
        {hint ? <div className="formHint">{hint}</div> : null}
      </div>

      <form className="formGrid" onSubmit={(e) => e.preventDefault()}>
        <label className="field">
          <span className="fieldLabel">Name</span>
          <input
            className="input"
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            placeholder="Your full name"
            autoComplete="name"
          />
        </label>

        <label className="field">
          <span className="fieldLabel">Phone</span>
          <input
            className="input"
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            placeholder="97375..."
            autoComplete="tel"
          />
        </label>

        <label className="field">
          <span className="fieldLabel">Email</span>
          <input
            className="input"
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>

        <label className="field">
          <span className="fieldLabel">City</span>
          <input
            className="input"
            value={state.city}
            onChange={(e) => setState((s) => ({ ...s, city: e.target.value }))}
            placeholder="Your city"
          />
        </label>

        <label className="field">
          <span className="fieldLabel">Inquiry type</span>
          <select
            className="select"
            value={state.inquiryType}
            onChange={(e) => setState((s) => ({ ...s, inquiryType: e.target.value }))}
          >
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span className="fieldLabel">Timeline</span>
          <select
            className="select"
            value={state.timeline}
            onChange={(e) => setState((s) => ({ ...s, timeline: e.target.value }))}
          >
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="field fieldFull">
          <span className="fieldLabel">Message</span>
          <textarea
            className="textarea"
            rows={6}
            value={state.message}
            onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
            placeholder="Tell us about your coach model, seat layout, exterior concept, number of buses, and any reference images you have."
          />
        </label>

        <div className="formActions">
          <a className="textLink textLinkPrimary" href={mailtoHref}>
            Send via Email
          </a>
          <div className="formNote">Form is UI-only. Click “Send via Email” to open your mail app.</div>
        </div>
      </form>
    </div>
  )
}
