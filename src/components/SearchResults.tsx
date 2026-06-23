'use client';

import { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { MapPin, Search } from 'lucide-react';
import { EmptyState } from '@/components/EmptyState';
import { PropertyGrid } from '@/components/PropertyGrid';
import { locations, properties } from '@/lib/data';

export function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams?.get('q') ?? '');
  const [location, setLocation] = useState(searchParams?.get('location') ?? '');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return properties.filter((property) => {
      const matchesQuery =
        !q ||
        [property.title, property.location, property.city, property.type].some((value) =>
          value.toLowerCase().includes(q),
        );
      const matchesLocation = !location || property.city === location;
      return matchesQuery && matchesLocation;
    });
  }, [query, location]);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (location) params.set('location', location);
    router.replace(`/search${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <section className="section-shell py-12 sm:py-16">
      <form onSubmit={submit} className="grid gap-3 rounded-[28px] border border-slate-100 bg-white p-4 shadow-sm md:grid-cols-[1fr_260px_auto]">
        <label className="flex items-center gap-2 rounded-2xl bg-cloud px-4 py-3">
          <Search className="h-4 w-4 text-pine" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Keyword, name, property type..." className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none" />
        </label>
        <label className="flex items-center gap-2 rounded-2xl bg-cloud px-4 py-3">
          <MapPin className="h-4 w-4 text-pine" />
          <select value={location} onChange={(event) => setLocation(event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none">
            <option value="">Any location</option>
            {locations.map((item) => (
              <option key={item.slug} value={item.city}>{item.city}</option>
            ))}
          </select>
        </label>
        <button className="rounded-full bg-honey px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#f4d565]">Search</button>
      </form>
      <div className="mt-8">
        <p className="mb-5 text-sm font-semibold text-slate-500">{results.length} results found</p>
        {results.length ? <PropertyGrid properties={results} /> : <EmptyState title="No matching listings" action="Reset search" href="/search" />}
      </div>
    </section>
  );
}
