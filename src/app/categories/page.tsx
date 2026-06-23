import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { categories } from '@/lib/data';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Categories',
  'Browse JustHome listings by apartments, villas, town houses, penthouses, commercial spaces, and luxury homes.'
);

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        current="Categories"
        title="Browse homes by property type"
        description="Start with the kind of space you want, then refine listings by budget, rooms, location, and listing type."
      />
      <section className="py-12 sm:py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`} className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative aspect-[1.45]">
                <Image src={category.image} alt={category.label} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <category.icon className="mb-3 h-7 w-7" />
                  <h2 className="text-2xl font-semibold">{category.label}</h2>
                  <p className="mt-1 text-sm text-white/76">{category.count}</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 p-5">
                <p className="text-sm leading-6 text-slate-500">{category.description}</p>
                <ArrowRight className="h-5 w-5 shrink-0 text-pine transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
