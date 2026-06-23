import { Suspense } from 'react';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { PageHeader } from '@/components/PageHeader';
import { PropertyExplorer } from '@/components/PropertyExplorer';

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        current="Properties"
        title="Find property for sale and rent"
        description="Explore verified homes, villas, apartments, and commercial spaces with real filters, favorites, and flexible viewing modes."
      />
      <Suspense fallback={<div className="section-shell py-12"><LoadingSkeleton /></div>}>
        <PropertyExplorer title="All Properties" />
      </Suspense>
    </main>
  );
}
