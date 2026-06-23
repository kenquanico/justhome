'use client';

import { useState } from 'react';
import { CalendarDays, X } from 'lucide-react';

export function ScheduleTourModal({ propertyTitle }: { propertyTitle: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full rounded-full bg-honey px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[#f4d565]"
      >
        Schedule a Tour
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/50 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[28px] bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine">Tour request</p>
                <h2 className="mt-2 text-2xl font-semibold text-ink">{propertyTitle}</h2>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cloud text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form className="mt-6 grid gap-4">
              <input className="rounded-2xl bg-cloud px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-honey/60" placeholder="Your name" />
              <input type="email" className="rounded-2xl bg-cloud px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-honey/60" placeholder="Email address" />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-semibold text-slate-500">
                  Date
                  <input type="date" className="rounded-2xl bg-cloud px-4 py-3 text-sm font-medium text-ink outline-none focus:ring-2 focus:ring-honey/60" />
                </label>
                <label className="grid gap-2 text-xs font-semibold text-slate-500">
                  Time
                  <input type="time" className="rounded-2xl bg-cloud px-4 py-3 text-sm font-medium text-ink outline-none focus:ring-2 focus:ring-honey/60" />
                </label>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine">
                <CalendarDays className="h-4 w-4" />
                Request Tour
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
