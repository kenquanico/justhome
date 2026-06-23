'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Grid2X2, List, SlidersHorizontal, X } from 'lucide-react';
import { categories, locations, properties } from '@/lib/data';
import { useFavorites } from '@/context/FavoritesContext';
import { filterProperties, type PropertyFilterState } from '@/lib/filters';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { PropertyGrid } from '@/components/PropertyGrid';

const defaultFilters: PropertyFilterState = {
  q: '',
  location: '',
  type: '',
  listingType: '',
  beds: '',
  baths: '',
  maxPrice: '',
  sort: 'date',
};

export function PropertyExplorer({
  initialCategory = '',
  initialLocation = '',
  title = 'Properties',
}: {
  initialCategory?: string;
  initialLocation?: string;
  title?: string;
}) {
  const searchParams = useSearchParams();
  const getParam = (key: string) => searchParams?.get(key) ?? '';
  const pathname = usePathname();
  const router = useRouter();
  const { favorites } = useFavorites();
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<PropertyFilterState>({
    ...defaultFilters,
    q: getParam('q'),
    location: initialLocation || getParam('location'),
    type: initialCategory || getParam('type'),
    listingType: getParam('listingType'),
    beds: getParam('beds'),
    baths: getParam('baths'),
    maxPrice: getParam('maxPrice'),
    sort: getParam('sort') || 'date',
    favoritesOnly: getParam('favorites') === 'true',
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 250);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, String(value));
    });
    router.replace(`${pathname}${params.toString() ? `?${params.toString()}` : ''}`, { scroll: false });
    setPage(1);
  }, [filters, pathname, router]);

  const filtered = useMemo(() => filterProperties(properties, filters, favorites), [filters, favorites]);
  const pageSize = 6;
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  const updateFilter = (key: keyof PropertyFilterState, value: string | boolean) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  const activeChips = Object.entries(filters).filter(([, value]) => value && value !== 'date');

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="section-shell">
        <div className="rounded-[28px] border border-slate-100 bg-white p-4 shadow-sm lg:p-5">
          <div className="grid gap-3 lg:grid-cols-[1fr_repeat(6,minmax(0,150px))]">
            <label className="flex items-center gap-2 rounded-2xl bg-cloud px-4 py-3">
              <SlidersHorizontal className="h-4 w-4 text-pine" />
              <input
                value={filters.q}
                onChange={(event) => updateFilter('q', event.target.value)}
                placeholder="Keyword"
                className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none"
              />
            </label>
            <select value={filters.location} onChange={(event) => updateFilter('location', event.target.value)} className="rounded-2xl bg-cloud px-4 py-3 text-sm font-semibold outline-none">
              <option value="">Location</option>
              {locations.map((location) => (
                <option key={location.city} value={location.city}>
                  {location.city}
                </option>
              ))}
            </select>
            <select value={filters.type} onChange={(event) => updateFilter('type', event.target.value)} className="rounded-2xl bg-cloud px-4 py-3 text-sm font-semibold outline-none">
              <option value="">Type</option>
              {categories.map((category) => (
                <option key={category.slug} value={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
            <select value={filters.listingType} onChange={(event) => updateFilter('listingType', event.target.value)} className="rounded-2xl bg-cloud px-4 py-3 text-sm font-semibold outline-none">
              <option value="">Buy/Rent</option>
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
            </select>
            <select value={filters.beds} onChange={(event) => updateFilter('beds', event.target.value)} className="rounded-2xl bg-cloud px-4 py-3 text-sm font-semibold outline-none">
              <option value="">Beds</option>
              {[1, 2, 3, 4, 5].map((count) => (
                <option key={count} value={count}>
                  {count}+
                </option>
              ))}
            </select>
            <select value={filters.baths} onChange={(event) => updateFilter('baths', event.target.value)} className="rounded-2xl bg-cloud px-4 py-3 text-sm font-semibold outline-none">
              <option value="">Baths</option>
              {[1, 2, 3, 4].map((count) => (
                <option key={count} value={count}>
                  {count}+
                </option>
              ))}
            </select>
            <select value={filters.sort} onChange={(event) => updateFilter('sort', event.target.value)} className="rounded-2xl bg-cloud px-4 py-3 text-sm font-semibold outline-none">
              <option value="date">Newest</option>
              <option value="price-asc">Price ↑</option>
              <option value="price-desc">Price ↓</option>
              <option value="area">Area</option>
            </select>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <label className="grid gap-2 text-xs font-semibold text-slate-500">
              Price range up to {filters.maxPrice ? `$${Number(filters.maxPrice).toLocaleString()}` : 'any'}
              <input
                type="range"
                min="0"
                max="3000000"
                step="50000"
                value={filters.maxPrice || '0'}
                onChange={(event) => updateFilter('maxPrice', event.target.value === '0' ? '' : event.target.value)}
                className="accent-pine"
              />
            </label>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setView('grid')} className={`flex h-10 w-10 items-center justify-center rounded-full border ${view === 'grid' ? 'border-ink bg-ink text-white' : 'border-slate-200 text-ink'}`} aria-label="Grid view">
                <Grid2X2 className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => setView('list')} className={`flex h-10 w-10 items-center justify-center rounded-full border ${view === 'list' ? 'border-ink bg-ink text-white' : 'border-slate-200 text-ink'}`} aria-label="List view">
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
          {activeChips.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {activeChips.map(([key, value]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => updateFilter(key as keyof PropertyFilterState, key === 'favoritesOnly' ? false : '')}
                  className="inline-flex items-center gap-2 rounded-full bg-meadow px-3 py-2 text-xs font-semibold text-pine"
                >
                  {String(value)}
                  <X className="h-3 w-3" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-ink">{title}</h2>
            <p className="mt-1 text-sm text-slate-500">{filtered.length} curated listings available</p>
          </div>
          <button type="button" onClick={() => setFilters(defaultFilters)} className="w-fit rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-ink transition hover:border-pine hover:text-pine">
            Clear filters
          </button>
        </div>

        <div className="mt-8">{isLoading ? <LoadingSkeleton /> : <PropertyGrid properties={visible} view={view} />}</div>

        {filtered.length > pageSize ? (
          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index + 1)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                  page === index + 1 ? 'bg-ink text-white' : 'bg-cloud text-ink hover:bg-meadow'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
