import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/metadata';

const steps = [
  'Review your budget and monthly payment comfort.',
  'Secure mortgage pre-approval from a bank or broker.',
  'Shortlist homes that match lender criteria and your deposit.',
  'Sign the memorandum of understanding and pay the deposit.',
  'Complete valuation, final bank offer, and transfer paperwork.',
  'Register the mortgage, transfer title, and collect the keys.',
];

const glossary = [
  ['LTV', 'Loan-to-value ratio, or the share of the property price funded by the bank.'],
  ['DLD Fee', 'Dubai Land Department transfer fee paid during property registration.'],
  ['NOC', 'No Objection Certificate from the developer before transfer.'],
  ['Service Charge', 'Community or building maintenance charge paid by owners.'],
  ['Escrow', 'Protected account used for regulated off-plan project payments.'],
  ['Oqood', 'Initial registration for off-plan property purchases in Dubai.'],
  ['Title Deed', 'Official ownership document after transfer registration.'],
  ['Mortgage Registration Fee', 'Fee paid to register the mortgage against the property.'],
];

export const metadata = pageMetadata(
  'UAE Mortgage Guide',
  'Understand UAE mortgage eligibility, LTV ratios, buying steps, and common financing terms.'
);

export default function MortgageGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="UAE Mortgage Guide"
        subTitle="A practical overview of eligibility, borrowing limits, approval steps, and common terms for UAE property buyers."
        breadcrumbs={[{ label: 'Mortgage Guide' }]}
      />
      <section className="section-shell py-16 lg:py-24">
        <div className="grid gap-12">
          <section>
            <h2 className="text-2xl font-semibold text-ink">Eligibility</h2>
            <div className="mt-5 overflow-hidden rounded-[8px] border border-slate-100">
              <table className="w-full text-left text-sm">
                <thead className="bg-meadow text-ink">
                  <tr>
                    <th className="px-4 py-3">Applicant</th>
                    <th className="px-4 py-3">Typical Requirements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr><td className="px-4 py-3 font-semibold text-ink">UAE nationals</td><td className="px-4 py-3">Stable income, bank statements, credit review, and acceptable debt burden ratio.</td></tr>
                  <tr><td className="px-4 py-3 font-semibold text-ink">Residents and expats</td><td className="px-4 py-3">Valid residency, salary or business income proof, minimum income thresholds, and credit history.</td></tr>
                  <tr><td className="px-4 py-3 font-semibold text-ink">Self-employed buyers</td><td className="px-4 py-3">Trade license, audited financials or bank statements, and longer income review.</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-ink">How much can you borrow?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Loan-to-value ratios vary by residency, property use, and whether it is a first home. A common planning baseline is up to 80% for first-home resident buyers, around 65% for many expat scenarios, and lower ratios for second homes or investment purchases.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-ink">Step-by-step process</h2>
            <ol className="mt-5 grid gap-3">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-[8px] bg-meadow p-4 text-sm text-slate-600">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">{index + 1}</span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-ink">Glossary</h2>
            <dl className="mt-5 grid gap-4 md:grid-cols-2">
              {glossary.map(([term, definition]) => (
                <div key={term} className="rounded-[8px] border border-slate-100 p-5">
                  <dt className="font-semibold text-ink">{term}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">{definition}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="rounded-[8px] bg-meadow p-8 md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-ink">Speak to our mortgage specialist</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Get help matching your budget, property goals, and lender requirements.</p>
            </div>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine md:mt-0">
              Contact JustHome
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
