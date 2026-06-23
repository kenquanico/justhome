'use client';

import { useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SlidersHorizontal, X } from 'lucide-react';
import { categories, properties } from '@/lib/data';
import { EmptyState } from '@/components/EmptyState';
import { PropertyGrid } from '@/components/PropertyGrid';
import type { ListingType, Property, PropertyType } from '@/lib/types';

type SortKey = 'date' | 'price-asc' | 'price-desc' | 'area';

type ExplorerFilters = {
  listingType: ListingType | '';
  category: PropertyType | '';
  minPrice: string;
  maxPrice: string;
  beds: string;
  sort: SortKey;
};

type PropertyExplorerProps = {
  initialCategory?: PropertyType | '';
  initialLocation?: string;
  title?: string;
};

const sortLabels: Record<SortKey, string> = {
  date: 'Newest',
  'price-asc': 'Price Low to High',
  'price-desc': 'Price High to Low',
  area: 'Largest',
};

function getListingType(value: string | null): ListingType | '' {
  return value === 'Buy' || value === 'Rent' ? value : '';
}

function getCategory(value: string | null): PropertyType | '' {
  return categories.some((category) => category.label === value) ? (value as PropertyType) : '';
}

function getSort(value: string | null): SortKey {
  return value === 'price-asc' || value === 'price-desc' || value === 'area' ? value : 'date';
}

function sortProperties(items: Property[], sort: SortKey) {
  return [...items].sort((a, b) => {
    if (sort === 'price-asc') return a.priceValue - b.priceValue;
    if (sort === 'price-desc') return b.priceValue - a.priceValue;
    if (sort === 'area') return b.sqftValue - a.sqftValue;
    return new Date(b.dateListed).getTime() - new Date(a.dateListed).getTime();
  });
}

export function PropertyExplorer({
  initialCategory = '',
  initialLocation = '',
  title = 'Properties',
}: PropertyExplorerProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const getParam = (key: string) => searchParams?.get(key) ?? null;
  const [filters, setFilters] = useState<ExplorerFilters>({
    listingType: getListingType(getParam('type')),
    category: initialCategory || getCategory(getParam('category')),
    minPrice: getParam('minPrice') ?? '',
    maxPrice: getParam('maxPrice') ?? '',
    beds: getParam('beds') ?? '',
    sort: getSort(getParam('sort')),
  });

  const updateUrl = (nextFilters: ExplorerFilters) => {
    const params = new URLSearchParams();
    if (nextFilters.listingType) params.set('type', nextFilters.listingType);
    if (!initialCategory && nextFilters.category) params.set('category', nextFilters.category);
    if (nextFilters.minPrice) params.set('minPrice', nextFilters.minPrice);
    if (nextFilters.maxPrice) params.set('maxPrice', nextFilters.maxPrice);
    if (nextFilters.beds) params.set('beds', nextFilters.beds);
    if (nextFilters.sort !== 'date') params.set('sort', nextFilters.sort);
    router.push(`${pathname}${params.toString() ? `?${params.toString()}` : ''}`, { scroll: false });
  };

  const updateFilter = <Key extends keyof ExplorerFilters>(key: Key, value: ExplorerFilters[Key]) => {
    const nextFilters = { ...filters, [key]: value };
    setFilters(nextFilters);
    updateUrl(nextFilters);
  };

  const clearFilters = () => {
    const nextFilters: ExplorerFilters = {
      listingType: '',
      category: initialCategory,
      minPrice: '',
      maxPrice: '',
      beds: '',
      sort: 'date',
    };
    setFilters(nextFilters);
    updateUrl(nextFilters);
  };

  const filtered = useMemo(() => {
    const matches = properties.filter((property) => {
      const matchesListing = !filters.listingType || property.listingType === filters.listingType;
      const matchesCategory = !filters.category || property.type === filters.category;
      const matchesLocation = !initialLocation || property.city === initialLocation;
      const matchesMin = !filters.minPrice || property.priceValue >= Number(filters.minPrice);
      const matchesMax = !filters.maxPrice || property.priceValue <= Number(filters.maxPrice);
      const matchesBeds = !filters.beds || property.beds >= Number(filters.beds);

      return matchesListing && matchesCategory && matchesLocation && matchesMin && matchesMax && matchesBeds;
    });

    return sortProperties(matches, filters.sort);
  }, [filters, initialLocation]);

  const baseCount = properties.filter((property) => {
    const matchesCategory = !initialCategory || property.type === initialCategory;
    const matchesLocation = !initialLocation || property.city === initialLocation;
    return matchesCategory && matchesLocation;
  }).length;

  const activeChips = [
    filters.listingType ? { key: 'listingType' as const, label: filters.listingType } : null,
    !initialCategory && filters.category ? { key: 'category' as const, label: filters.category } : null,
    filters.minPrice ? { key: 'minPrice' as const, label: `Min $${Number(filters.minPrice).toLocaleString()}` } : null,
    filters.maxPrice ? { key: 'maxPrice' as const, label: `Max $${Number(filters.maxPrice).toLocaleString()}` } : null,
    filters.beds ? { key: 'beds' as const, label: `${filters.beds}+ beds` } : null,
    filters.sort !== 'date' ? { key: 'sort' as const, label: sortLabels[filters.sort] } : null,
  ].filter(Boolean) as Array<{ key: keyof ExplorerFilters; label: string }>;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="section-shell">
        <div className="sticky top-20 z-20 rounded-[8px] border border-slate-100 bg-white p-4 shadow-sm">
          <div className="grid gap-3 lg:grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] lg:items-center">
            <div className="flex rounded-full bg-meadow p-1">
              {(['Buy', 'Rent'] as ListingType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => updateFilter('listingType', filters.listingType === type ? '' : type)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    filters.listingType === type ? 'bg-ink text-white' : 'text-ink hover:text-pine'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <select
              value={filters.category}
              disabled={Boolean(initialCategory)}
              onChange={(event) => updateFilter('category', event.target.value as ExplorerFilters['category'])}
              className="rounded-[8px] bg-meadow px-4 py-3 text-sm font-semibold text-ink outline-none disabled:opacity-70"
            >
              <option value="">All categories</option>
              {categories.map((category) => (
                <option key={category.slug} value={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
            <input
              type="number"
              inputMode="numeric"
              value={filters.minPrice}
              onChange={(event) => updateFilter('minPrice', event.target.value)}
              placeholder="Min price"
              className="rounded-[8px] bg-meadow px-4 py-3 text-sm font-semibold text-ink outline-none"
            />
            <input
              type="number"
              inputMode="numeric"
              value={filters.maxPrice}
              onChange={(event) => updateFilter('maxPrice', event.target.value)}
              placeholder="Max price"
              className="rounded-[8px] bg-meadow px-4 py-3 text-sm font-semibold text-ink outline-none"
            />
            <select
              value={filters.beds}
              onChange={(event) => updateFilter('beds', event.target.value)}
              className="rounded-[8px] bg-meadow px-4 py-3 text-sm font-semibold text-ink outline-none"
            >
              <option value="">Any beds</option>
              {[1, 2, 3, 4].map((count) => (
                <option key={count} value={count}>
                  {count}+
                </option>
              ))}
            </select>
            <select
              value={filters.sort}
              onChange={(event) => updateFilter('sort', event.target.value as SortKey)}
              className="rounded-[8px] bg-meadow px-4 py-3 text-sm font-semibold text-ink outline-none"
            >
              <option value="date">Newest</option>
              <option value="price-asc">Price Low to High</option>
              <option value="price-desc">Price High to Low</option>
              <option value="area">Largest</option>
            </select>
          </div>
          {activeChips.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {activeChips.map((chip) => (
                <button
                  key={chip.key}
                  type="button"
                  onClick={() => updateFilter(chip.key, chip.key === 'sort' ? 'date' : '')}
                  className="inline-flex items-center gap-2 rounded-full bg-meadow px-3 py-2 text-xs font-semibold text-pine"
                >
                  {chip.label}
                  <X className="h-3 w-3" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-ink">{title}</h2>
            <p className="mt-1 text-sm text-slate-500">
              Showing {filtered.length} of {baseCount} properties
            </p>
          </div>
          <button
            type="button"
            onClick={clearFilters}
            className="flex w-fit items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-ink transition hover:border-pine hover:text-pine"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Clear all filters
          </button>
        </div>

        <div className="mt-8">
          {filtered.length ? (
            <PropertyGrid properties={filtered} />
          ) : (
            <EmptyState
              title="No properties match your filters."
              message="Try clearing a price, bed, category, or listing type filter."
              cta="Clear all filters"
              ctaHref="/properties"
            />
          )}
        </div>
      </div>
    </section>
  );
}
