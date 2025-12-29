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

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

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

  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [error, setError] = useState('')

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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    if (!state.name.trim() || !state.phone.trim() || !state.message.trim()) {
      setStatus('error')
      setError('Please provide name, phone, and message.')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...state, website }),
      })

      const data = (await res.json()) as { ok?: boolean; error?: string }

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Failed to send message.')
      }

      setStatus('success')
      setState({
        name: '',
        phone: '',
        email: '',
        city: '',
        inquiryType: inquiryTypes[0],
        timeline: timelines[2],
        message: '',
      })
      setWebsite('')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Failed to send message.')
    }
  }

  return (
    <div className="formCard">
      <div className="formHead">
        <div className="formTitle">{title}</div>
        {hint ? <div className="formHint">{hint}</div> : null}
      </div>

      <form className="formGrid" onSubmit={onSubmit}>
        <div style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
          <label>
            Website
            <input value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
          </label>
        </div>

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
          <button className="heroButton heroButtonPrimary" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending…' : 'Send enquiry'}
          </button>
          <a className="heroButton" href={mailtoHref}>
            Use email app
          </a>
        </div>

        {status === 'success' ? <div className="formNote">Thanks—your enquiry was sent successfully.</div> : null}
        {status === 'error' ? <div className="formNote">{error}</div> : null}
      </form>
    </div>
  )
}
