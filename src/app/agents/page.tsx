import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Star } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { agents } from '@/lib/data';

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader current="Agents" title="Meet JustHome agents" description="Browse expert advisors by specialty, rating, neighborhood focus, and active listing count." />
      <section className="py-12 sm:py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Link href={`/agents/${agent.id}`} key={agent.id} className="group rounded-[26px] border border-slate-100 bg-white p-4 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative aspect-[0.95] overflow-hidden rounded-[20px]">
                <Image src={agent.image} alt={agent.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <div className="mt-2 flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-ink">{agent.name}</h2>
                    <p className="mt-1 text-sm text-slate-500">{agent.specialty}</p>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-meadow px-3 py-1.5 text-xs font-bold text-pine"><Star className="h-3.5 w-3.5 fill-honey text-honey" />{agent.rating}</span>
                </div>
                <div className="mt-5 flex items-center justify-between text-sm font-semibold text-slate-500">
                  <span>{agent.listingCount} listings</span>
                  <span className="flex items-center gap-2 text-pine"><Linkedin className="h-4 w-4" />{agent.social}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
