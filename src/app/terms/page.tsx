import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/metadata';

const sections = [
  ['Acceptance', 'By using JustHome, you agree to these terms and any policies referenced on the site. If you do not agree, you should stop using the website.'],
  ['Use of site', 'You may use JustHome to browse listings, contact advisors, and request property support. You must not misuse the site, scrape content at scale, or interfere with service availability.'],
  ['Property listings disclaimer', 'Listings, prices, availability, and property details are provided for general information and may change without notice. Buyers and renters should confirm all details before making decisions.'],
  ['Advisor communications', 'Messages sent through JustHome may be routed to agents or support staff so they can respond. Submitting a form does not create an exclusive representation agreement.'],
  ['No liability', 'JustHome is not liable for losses arising from reliance on listing information, third-party services, market changes, or interrupted site access. Your use of the site is at your own discretion.'],
  ['Governing law', 'These terms are governed by the laws of the United Arab Emirates. Any disputes will be handled through the competent courts or authorities in the UAE.'],
];

export const metadata = pageMetadata('Terms', 'JustHome website terms and property listing disclaimer.');

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero title="Terms" subTitle="Last updated June 2026" breadcrumbs={[{ label: 'Terms' }]} />
      <section className="section-shell py-16 lg:py-24">
        <div className="grid max-w-3xl gap-8">
          {sections.map(([title, copy]) => (
            <section key={title}>
              <h2 className="text-2xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
