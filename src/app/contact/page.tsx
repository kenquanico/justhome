import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Contact',
  'Contact JustHome for property tours, valuation support, listings, and UAE neighborhood guidance.'
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Tell us what you want to find or list"
        subTitle="Reach our advisory team for property tours, valuation help, listing support, and neighborhood guidance."
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <section className="section-shell grid gap-8 py-16 lg:grid-cols-[1fr_0.8fr] lg:py-24">
        <ContactForm />
        <aside className="rounded-[8px] bg-meadow p-6">
          <h2 className="text-2xl font-semibold text-ink">Office</h2>
          <div className="mt-5 grid gap-3 text-sm text-slate-600">
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-pine" />Business Bay, Dubai, UAE</p>
            <a className="flex items-center gap-3 hover:text-pine" href="tel:+97145558888"><Phone className="h-4 w-4 text-pine" />+971 455 8888</a>
            <a className="flex items-center gap-3 hover:text-pine" href="mailto:hello@justhome.ae"><Mail className="h-4 w-4 text-pine" />hello@justhome.ae</a>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold text-ink">Office hours</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Monday to Saturday, 9:00 AM to 7:00 PM GST</p>
          </div>
          <div className="mt-8 flex gap-2">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <span key={index} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-pine">
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </aside>
      </section>
      <section className="section-shell pb-16 lg:pb-24">
        <iframe
          title="JustHome Business Bay map"
          src="https://www.google.com/maps?q=Business%20Bay%20Dubai&output=embed"
          className="h-[360px] w-full rounded-[8px] border-0"
          loading="lazy"
        />
      </section>
    </main>
  );
}
