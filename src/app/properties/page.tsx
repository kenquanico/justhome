import { Suspense } from 'react';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { PageHero } from '@/components/PageHero';
import { PropertyExplorer } from '@/components/PropertyExplorer';
import { pageMetadata } from '@/lib/metadata';
import type { ListingType } from '@/lib/types';

type PropertiesPageProps = {
  searchParams?: {
    type?: string;
  };
};

function getListingType(type?: string): ListingType | undefined {
  return type === 'Buy' || type === 'Rent' ? type : undefined;
}

export function generateMetadata({ searchParams }: PropertiesPageProps) {
  const listingType = getListingType(searchParams?.type);

  if (listingType === 'Buy') {
    return pageMetadata('Homes for Sale', 'Browse UAE homes, villas, apartments, and commercial properties for sale.');
  }

  if (listingType === 'Rent') {
    return pageMetadata('Homes for Rent', 'Browse UAE homes, villas, apartments, and commercial properties for rent.');
  }

  return pageMetadata(
    'Properties',
    'Find property for sale and rent across the UAE with JustHome.'
  );
}

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Find property for sale and rent"
        subTitle="Explore verified homes, villas, apartments, and commercial spaces with real filters, favorites, and flexible viewing modes."
        breadcrumbs={[{ label: 'Properties' }]}
      />
      <Suspense fallback={<div className="section-shell py-12"><LoadingSkeleton /></div>}>
        <PropertyExplorer title="All Properties" />
      </Suspense>
    </main>
  );
}
