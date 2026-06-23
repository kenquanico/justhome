import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Mail, Phone, Star } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PropertyGrid } from '@/components/PropertyGrid';
import { agents, properties } from '@/lib/data';
import { pageMetadata } from '@/lib/metadata';

type AgentProfilePageProps = {
  params: { id: string };
};

export function generateMetadata({ params }: AgentProfilePageProps) {
  const agent = agents.find((item) => item.id === params.id);

  if (!agent) {
    return pageMetadata('Agent Not Found');
  }

  return pageMetadata(agent.name, `${agent.name} is a ${agent.specialty} at JustHome.`);
}

export default function AgentProfilePage({ params }: AgentProfilePageProps) {
  const agent = agents.find((item) => item.id === params.id);
  if (!agent) notFound();
  const listings = properties.filter((property) => property.agentId === agent.id);

  return (
    <main className="min-h-screen bg-white">
      <PageHeader current={agent.name} title={agent.name} description={agent.specialty} />
      <section className="section-shell grid gap-8 pb-16 lg:grid-cols-[360px_1fr]">
        <aside className="rounded-[28px] border border-slate-100 bg-white p-5 shadow-card">
          <div className="relative aspect-[0.9] overflow-hidden rounded-[22px]">
            <Image src={agent.image} alt={agent.name} fill sizes="360px" className="object-cover" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold text-ink">{agent.name}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">{agent.bio}</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-cloud p-4"><p className="text-2xl font-semibold text-pine">{agent.listingCount}</p><p className="text-xs text-slate-500">Active listings</p></div>
            <div className="rounded-2xl bg-cloud p-4"><p className="flex items-center gap-1 text-2xl font-semibold text-pine"><Star className="h-5 w-5 fill-honey text-honey" />{agent.rating}</p><p className="text-xs text-slate-500">Client rating</p></div>
          </div>
          <div className="mt-5 grid gap-3">
            <a href={`tel:${agent.phone}`} className="flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"><Phone className="h-4 w-4" />{agent.phone}</a>
            <a href={`mailto:${agent.email}`} className="flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-ink hover:border-pine"><Mail className="h-4 w-4" />Email agent</a>
          </div>
        </aside>
        <div>
          <h2 className="text-3xl font-semibold text-ink">Active listings</h2>
          <div className="mt-6"><PropertyGrid properties={listings} /></div>
          <div className="mt-10 rounded-[28px] bg-meadow p-6">
            <h2 className="text-2xl font-semibold text-ink">Client reviews</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">“Clear advice, fast viewing coordination, and excellent neighborhood knowledge.”</p>
          </div>
        </div>
      </section>
    </main>
  );
}
