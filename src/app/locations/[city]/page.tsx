import { Suspense } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { PageHeader } from '@/components/PageHeader';
import { PropertyExplorer } from '@/components/PropertyExplorer';
import { locations } from '@/lib/data';
import { pageMetadata } from '@/lib/metadata';

type LocationPageProps = {
  params: { city: string };
};

export function generateMetadata({ params }: LocationPageProps) {
  const location = locations.find((item) => item.slug === params.city);

  if (!location) {
    return pageMetadata('Location Not Found');
  }

  return pageMetadata(`Homes in ${location.city}`, location.description);
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = locations.find((item) => item.slug === params.city);
  if (!location) notFound();

  return (
    <main className="min-h-screen bg-white">
      <PageHeader current={location.city} title={`Homes in ${location.city}`} description={location.description} />
      <section className="section-shell pb-8">
        <div className="relative min-h-[320px] overflow-hidden rounded-[30px]">
          <Image src={location.image} alt={location.city} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/72 to-transparent" />
          <div className="absolute bottom-8 left-6 max-w-xl text-white sm:left-8">
            <p className="text-sm font-semibold text-honey">{location.homes}</p>
            <h2 className="mt-2 text-3xl font-semibold">{location.city} market map</h2>
            <p className="mt-3 text-sm leading-6 text-white/76">Map preview for nearby listings, schools, transit, and lifestyle anchors.</p>
          </div>
        </div>
      </section>
      <Suspense fallback={<div className="section-shell py-12"><LoadingSkeleton /></div>}>
        <PropertyExplorer initialLocation={location.city} title={`${location.city} Listings`} />
      </Suspense>
    </main>
  );
}
