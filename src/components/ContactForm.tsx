'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: 'Buy',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: '' }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = 'Full name is required.';
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[8px] border border-slate-100 bg-white p-6 shadow-card">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Full name
          <input value={form.name} onChange={(event) => updateField('name', event.target.value)} className="rounded-[8px] bg-meadow px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-pine" />
          {errors.name ? <span className="text-xs text-pine">{errors.name}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email
          <input type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} className="rounded-[8px] bg-meadow px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-pine" />
          {errors.email ? <span className="text-xs text-pine">{errors.email}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Phone optional
          <input value={form.phone} onChange={(event) => updateField('phone', event.target.value)} className="rounded-[8px] bg-meadow px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-pine" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Subject
          <select value={form.subject} onChange={(event) => updateField('subject', event.target.value)} className="rounded-[8px] bg-meadow px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-pine">
            {['Buy', 'Rent', 'Sell', 'Commercial', 'Other'].map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-ink">
        Message
        <textarea value={form.message} onChange={(event) => updateField('message', event.target.value)} rows={7} className="rounded-[8px] bg-meadow px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-pine" />
      </label>
      <button type="submit" className="mt-5 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-pine">
        Submit
      </button>
      {submitted ? <p className="mt-4 text-sm font-semibold text-pine">We&apos;ll be in touch within 24 hours.</p> : null}
    </form>
  );
}
