import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/home';

export function Categories() {
  return (
    <section className="bg-cloud py-16 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Explore Property Types</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Choose from handpicked UAE homes, modern apartments, investment villas, and family
              communities.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            View All Categories
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.label}
              className="rounded-[22px] border border-white bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-meadow text-pine">
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink">{category.label}</h3>
              <p className="mt-1 text-sm text-slate-500">{category.count}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
