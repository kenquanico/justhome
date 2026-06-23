import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { StatsSection } from '@/components/StatsSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { agents, serviceHighlights } from '@/lib/data';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'About',
  'Learn how JustHome helps UAE buyers, renters, sellers, and investors move through real estate with clarity.'
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="We make finding home feel human."
        subTitle="JustHome blends thoughtful search tools, trusted advisors, and local market clarity for buyers, renters, sellers, and investors."
        backgroundImageUrl="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'About' }]}
      />
      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine">Company story</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Built for people who want the details handled properly.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            JustHome is built around the way people actually search for property in the UAE: by lifestyle, commute, school access, budget, and long-term value. Our team pairs verified listings with practical guidance on location, financing, paperwork, and negotiation. We help renters move quickly, buyers compare communities with confidence, and sellers position their homes clearly. The result is a calmer path through a market that can otherwise feel noisy.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {serviceHighlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-[8px] bg-meadow px-4 py-3 text-sm font-semibold text-ink">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-pine">
                  <item.icon className="h-4 w-4" />
                </span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[500px] overflow-hidden rounded-[8px]">
          <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80" alt="JustHome interior" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
      </section>
      <WhyChooseUs />
      <StatsSection />
      <section className="section-shell py-16 lg:py-24">
        <h2 className="text-3xl font-semibold text-ink">Meet the team</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {agents.slice(0, 3).map((agent) => (
            <Link key={agent.id} href={`/agents/${agent.id}`} className="group rounded-[8px] border border-slate-100 bg-white p-4 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative aspect-[0.95] overflow-hidden rounded-[8px]">
                <Image src={agent.image} alt={agent.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">{agent.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{agent.specialty}</p>
              <p className="mt-3 text-sm font-semibold text-pine">{agent.rating} rating</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-meadow py-16 lg:py-24">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Ready to find your home?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Browse verified JustHome listings across UAE communities.</p>
          </div>
          <Link href="/properties" className="w-fit rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-pine">
            Browse Properties
          </Link>
        </div>
      </section>
    </main>
  );
}
