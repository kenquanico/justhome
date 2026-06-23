import { Mail, MapPin, Phone } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        current="Contact"
        title="Tell us what you want to find or list"
        description="Reach our advisory team for property tours, valuation help, listing support, and neighborhood guidance."
      />
      <section className="section-shell grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_0.8fr]">
        <form className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-card">
          <div className="grid gap-4 sm:grid-cols-2">
            <input placeholder="Name" className="rounded-2xl bg-cloud px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-honey/60" />
            <input type="email" placeholder="Email" className="rounded-2xl bg-cloud px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-honey/60" />
            <input placeholder="Phone" className="rounded-2xl bg-cloud px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-honey/60" />
            <select className="rounded-2xl bg-cloud px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-honey/60">
              <option>Buying</option>
              <option>Renting</option>
              <option>Selling</option>
              <option>Listing a property</option>
            </select>
          </div>
          <textarea placeholder="Message" rows={7} className="mt-4 w-full rounded-2xl bg-cloud px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-honey/60" />
          <button type="button" className="mt-4 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-pine">
            Send Message
          </button>
        </form>
        <aside className="rounded-[28px] bg-meadow p-6">
          <h2 className="text-2xl font-semibold text-ink">Office</h2>
          <div className="mt-5 grid gap-3 text-sm text-slate-600">
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-pine" />Business Bay, Dubai, UAE</p>
            <a className="flex items-center gap-3 hover:text-pine" href="tel:+97145558888"><Phone className="h-4 w-4 text-pine" />+971 455 8888</a>
            <a className="flex items-center gap-3 hover:text-pine" href="mailto:hello@justhome.ae"><Mail className="h-4 w-4 text-pine" />hello@justhome.ae</a>
          </div>
          <div className="mt-8 flex min-h-[300px] items-center justify-center rounded-[24px] bg-white text-center">
            <div>
              <MapPin className="mx-auto h-9 w-9 text-pine" />
              <p className="mt-3 text-sm font-semibold text-ink">Embedded map preview</p>
              <p className="mt-1 text-xs text-slate-500">Business Bay office location</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
