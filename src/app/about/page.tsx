import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import { features, stats } from '@/lib/data';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        current="About"
        title="A calmer way to move through real estate"
        description="JustHome blends thoughtful search tools, trusted advisors, and local market clarity for buyers, renters, sellers, and investors."
      />
      <section className="section-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine">Company story</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Built for people who want the details handled properly.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            We started JustHome to make property discovery feel less scattered. Our team pairs curated listings with practical guidance on location, financing, paperwork, and negotiation.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.value} className="rounded-[22px] bg-cloud p-5">
                <p className="text-3xl font-semibold text-[#e05d55]">{stat.value}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[500px] overflow-hidden rounded-[32px]">
          <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80" alt="JustHome interior" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
      </section>
      <section className="bg-cloud py-14 sm:py-16">
        <div className="section-shell">
          <h2 className="section-heading">Why people choose JustHome</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-[24px] bg-white p-6 text-center shadow-sm">
                <feature.icon className="mx-auto h-8 w-8 text-pine" />
                <h3 className="mt-5 font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
