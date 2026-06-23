'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { properties } from '@/lib/data';
import type { PropertyType } from '@/lib/types';

type ProjectFilter = 'All' | 'Apartment' | 'Villa' | 'Commercial';

const filters: ProjectFilter[] = ['All', 'Apartment', 'Villa', 'Commercial'];

export function NewProjectsClient() {
  const [active, setActive] = useState<ProjectFilter>('All');
  const projects = useMemo(
    () =>
      properties.filter((property) => {
        const isNew = property.yearBuilt >= 2022;
        const matchesType = active === 'All' || property.type === (active as PropertyType);
        return isNew && matchesType;
      }),
    [active],
  );

  return (
    <section className="py-16 lg:py-24">
      <div className="section-shell">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active === filter ? 'bg-ink text-white' : 'bg-meadow text-ink hover:text-pine'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className="group overflow-hidden rounded-[8px] border border-slate-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[1.25] overflow-hidden">
                <Image src={property.image} alt={property.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-pine px-3 py-1.5 text-xs font-bold text-white">
                  NEW LAUNCH
                </span>
              </div>
              <div className="p-5">
                <p className="text-xl font-semibold text-ink">{property.title}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="h-4 w-4 text-pine" />
                  {property.location}
                </p>
                <div className="mt-5 flex items-center justify-between text-sm font-semibold">
                  <span className="text-pine">{property.price}</span>
                  <span className="inline-flex items-center gap-2 text-ink">
                    View project <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 rounded-[8px] bg-meadow p-8 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-ink">Speak to our off-plan specialist</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Compare launch pricing, payment plans, handover dates, and rental yield assumptions.</p>
          </div>
          <Link href="/agents/samir-patel" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine md:mt-0">
            Meet Samir Patel
          </Link>
        </div>
      </div>
    </section>
  );
}
