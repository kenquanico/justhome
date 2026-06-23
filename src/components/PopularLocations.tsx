import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { locations } from '@/data/home';

export function PopularLocations() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <h2 className="section-heading">Popular Locations</h2>
        <p className="section-kicker">Find homes near the UAE&apos;s most desirable communities.</p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {locations.map((location, index) => (
            <article
              key={location.city}
              className={`group relative min-h-[320px] overflow-hidden rounded-[28px] ${
                index === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <Image
                src={location.image}
                alt={`${location.city} neighborhood`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-ink/15 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/18 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                  <MapPin className="h-3.5 w-3.5" />
                  UAE
                </div>
                <h3 className="text-2xl font-semibold">{location.city}</h3>
                <p className="mt-1 text-sm text-white/78">{location.homes}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
