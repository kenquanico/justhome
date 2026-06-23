import Image from 'next/image';
import { serviceHighlights, stats } from '@/data/home';

export function StatsSection() {
  return (
    <section className="bg-cloud py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine">Our mission</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Helping you find a home that fits your future.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              JustHome combines neighborhood expertise, curated property data, and smooth advisory
              support so every buyer, renter, and seller can move with confidence.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviceHighlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-meadow text-pine">
                    <item.icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[0.95] overflow-hidden rounded-[34px]">
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
                alt="Elegant home lounge with large windows"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.value} className="rounded-[20px] bg-white p-5 shadow-sm">
                  <p className="text-2xl font-semibold text-[#e05d55]">{stat.value}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
