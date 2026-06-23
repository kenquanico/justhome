import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

const agents = [
  {
    name: 'Maya Rahman',
    role: 'Dubai Marina Specialist',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Omar Al Nuaimi',
    role: 'Villa Investment Advisor',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Leila Carter',
    role: 'Luxury Leasing Consultant',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
  },
];

export function AgentsTestimonials() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Meet trusted local agents</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
              Work with neighborhood experts who know pricing, communities, and the small details
              that make each move feel considered.
            </p>
            <div className="mt-8 rounded-[26px] bg-meadow p-6">
              <Quote className="h-8 w-8 text-pine" />
              <p className="mt-4 text-lg font-medium leading-8 text-ink">
                JustHome helped us compare listings quickly and guided the paperwork with real
                clarity. The whole move felt calm from the first viewing.
              </p>
              <div className="mt-5 flex items-center gap-1 text-honey">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm font-semibold text-pine">Aisha M., Downtown buyer</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {agents.map((agent) => (
              <article
                key={agent.name}
                className="rounded-[24px] border border-slate-100 bg-white p-3 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative aspect-[0.82] overflow-hidden rounded-[18px]">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    sizes="(min-width: 640px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-2 py-4">
                  <h3 className="text-base font-semibold text-ink">{agent.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{agent.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
