import Link from 'next/link';
import { AccordionItem } from '@/components/AccordionItem';
import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/metadata';

const faqGroups = [
  {
    category: 'Buying',
    items: [
      ['Can expats buy property in Dubai?', 'Yes. Expats can buy in designated freehold areas, including many of Dubai’s most popular residential communities.'],
      ['How do I make an offer?', 'Your advisor helps confirm the price, deposit, payment terms, and timelines before the offer is presented to the seller.'],
      ['What fees should buyers expect?', 'Typical costs include DLD fees, agency fees, trustee fees, conveyancing, valuation, and mortgage-related fees when financing.'],
      ['Do I need mortgage pre-approval first?', 'Pre-approval is strongly recommended because it clarifies your budget and strengthens your offer position.'],
    ],
  },
  {
    category: 'Renting',
    items: [
      ['What documents do tenants need?', 'Most landlords request Emirates ID, passport copy, residence visa, salary documents, and security deposit.'],
      ['How are rent payments made?', 'Rent is commonly paid through one or more post-dated cheques, though some landlords support bank transfer schedules.'],
      ['Can I negotiate rent?', 'Yes. Negotiation depends on market demand, payment structure, move-in date, and comparable listings.'],
      ['Who handles maintenance?', 'Lease terms define responsibilities, but major maintenance is usually handled by the landlord or building management.'],
    ],
  },
  {
    category: 'General',
    items: [
      ['Are listings verified?', 'JustHome prioritizes curated and verified property information before presenting homes to clients.'],
      ['Can JustHome help me sell?', 'Yes. The team supports valuation, listing presentation, buyer qualification, viewing coordination, and negotiation.'],
      ['Which UAE areas do you cover?', 'JustHome focuses on major Dubai communities and selected UAE neighborhoods with strong buyer and renter demand.'],
      ['How fast will someone reply?', 'The advisory team typically responds within one business day, often faster during office hours.'],
    ],
  },
];

export const metadata = pageMetadata(
  'Help Center',
  'Answers to common JustHome questions about buying, renting, selling, and UAE real estate.'
);

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Help Center"
        subTitle="Quick answers for buying, renting, selling, and working with JustHome."
        breadcrumbs={[{ label: 'Help Center' }]}
      />
      <section className="section-shell py-16 lg:py-24">
        <div className="grid gap-8">
          {faqGroups.map((group) => (
            <section key={group.category} className="rounded-[8px] border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-ink">{group.category}</h2>
              <div className="mt-4">
                {group.items.map(([question, answer]) => (
                  <AccordionItem key={question} question={question} answer={answer} />
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-[8px] bg-meadow p-8 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-ink">Still have questions?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Tell us what you need and a JustHome advisor will help.</p>
          </div>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine md:mt-0">
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
