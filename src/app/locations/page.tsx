import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { locations } from '@/lib/data';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Locations',
  'Explore popular UAE communities and discover homes by location with JustHome.'
);

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        current="Locations"
        title="Explore popular UAE locations"
        description="Compare lifestyle, commute, amenities, and inventory across JustHome's most requested communities."
      />
      <section className="py-12 sm:py-16">
        <div className="section-shell grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {locations.map((location) => (
            <Link key={location.slug} href={`/locations/${location.slug}`} className="group relative min-h-[320px] overflow-hidden rounded-[28px] shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <Image src={location.image} alt={location.city} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <MapPin className="mb-3 h-6 w-6" />
                <h2 className="text-2xl font-semibold">{location.city}</h2>
                <p className="mt-1 text-sm text-white/78">{location.homes}</p>
                <p className="mt-3 text-sm leading-6 text-white/72">{location.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
