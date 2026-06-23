import { Suspense } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { SearchResults } from '@/components/SearchResults';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Search',
  'Search JustHome listings, agents, and UAE communities.'
);

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        current="Search"
        title="Search JustHome listings"
        description="Use keyword and location search to discover matching homes, agents, and communities."
      />
      <Suspense fallback={<div className="section-shell py-12"><LoadingSkeleton /></div>}>
        <SearchResults />
      </Suspense>
    </main>
  );
}
