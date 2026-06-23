'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Building2, Home, MapPin, Search, SlidersHorizontal } from 'lucide-react';

const filterPills = [
  { label: 'Location', icon: MapPin },
  { label: 'Property Type', icon: Building2 },
  { label: 'Price Range', icon: SlidersHorizontal },
];

export function Hero() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) {
      params.set('q', query.trim());
    }
    router.push(`/search${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <section className="px-3 pb-20 pt-3 sm:px-5 lg:pb-24">
      <div className="relative min-h-[680px] overflow-hidden rounded-[32px] bg-ink sm:rounded-[42px] lg:min-h-[760px]">
        <Image
          src="/hero-bg.png"
          alt="Panoramic residential neighborhood under a bright blue sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/18 to-ink/18" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.74)_0%,rgba(255,255,255,0.34)_38%,rgba(255,255,255,0)_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/28 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-5xl flex-col items-center justify-center px-4 pb-20 pt-36 text-center lg:min-h-[760px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-pine shadow-sm shadow-ink/5 backdrop-blur-md">
            <Home className="h-3.5 w-3.5 text-honey" />
            Let&apos;s find your dream home
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[#164b42] drop-shadow-[0_3px_22px_rgba(255,255,255,0.82)] sm:text-6xl lg:text-7xl">
            Believe in finding it
          </h1>
          <p className="mt-4 text-sm font-semibold text-ink/72 drop-shadow-[0_2px_12px_rgba(255,255,255,0.8)] sm:text-base">
            Search properties for sale and rent in the UAE
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-8 flex w-full max-w-2xl items-center rounded-full border border-white/80 bg-white/92 p-2 shadow-[0_24px_70px_rgba(16,43,39,0.18)] backdrop-blur-md"
          >
            <label htmlFor="hero-search" className="sr-only">
              Search properties
            </label>
            <input
              id="hero-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Enter Name, Keywords..."
              className="min-w-0 flex-1 bg-transparent px-5 text-sm font-medium text-ink outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-honey text-pine shadow-[0_10px_24px_rgba(238,199,77,0.42)] transition hover:scale-105 hover:bg-[#f4d565] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-honey"
            >
              <Search className="h-5 w-5 stroke-[2.4]" />
            </button>
          </form>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {filterPills.map((pill) => (
              <button
                type="button"
                key={pill.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-ink/58 px-4 py-3 text-xs font-semibold text-white shadow-sm shadow-ink/15 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-pine/72 focus:outline-none focus:ring-2 focus:ring-honey/70"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/92 text-pine">
                  <pill.icon className="h-3.5 w-3.5" />
                </span>
                {pill.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
