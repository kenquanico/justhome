 'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bath, BedDouble, ChevronLeft, ChevronRight, Heart, MapPin, Ruler } from 'lucide-react';
import { useState } from 'react';
import type { Property } from '@/data/home';
import { useFavorites } from '@/context/FavoritesContext';

export function PropertyCard({ property, view = 'grid' }: { property: Property; view?: 'grid' | 'list' }) {
  const [imageIndex, setImageIndex] = useState(0);
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(property.id);
  const currentImage = property.images[imageIndex] ?? property.image;
  const isList = view === 'list';

  const cycleImage = (direction: 1 | -1) => {
    setImageIndex((current) => (current + direction + property.images.length) % property.images.length);
  };

  return (
    <article
      className={`group overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft ${
        isList ? 'md:grid md:grid-cols-[320px_1fr]' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${isList ? 'aspect-[1.35] md:aspect-auto' : 'aspect-[1.26]'}`}>
        <Image
          src={currentImage}
          alt={property.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-pine px-3 py-1.5 text-[10px] font-bold tracking-wide text-white">
            {property.status}
          </span>
          {property.featured ? (
            <span className="rounded-full bg-honey px-3 py-1.5 text-[10px] font-bold tracking-wide text-ink">
              FEATURED
            </span>
          ) : null}
        </div>
        <button
          type="button"
          aria-label={favorite ? 'Remove from favorites' : 'Save property'}
          onClick={() => toggleFavorite(property.id)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur transition hover:text-pine"
        >
          <Heart className={`h-5 w-5 ${favorite ? 'fill-honey text-honey' : ''}`} />
        </button>
        {property.images.length > 1 ? (
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition group-hover:opacity-100">
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => cycleImage(-1)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => cycleImage(1)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ) : null}
      </div>

      <div className="p-5">
        <Link href={`/properties/${property.id}`} className="block">
          <h3 className="line-clamp-2 text-lg font-semibold text-ink transition hover:text-pine">
            {property.title}
          </h3>
        </Link>
        <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="h-4 w-4 text-pine" />
          {property.location}
        </p>
        {isList ? <p className="mt-3 text-sm leading-6 text-slate-500">{property.description}</p> : null}
        <p className="mt-4 text-xl font-semibold text-pine">{property.price}</p>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5 rounded-full bg-cloud px-3 py-2">
            <BedDouble className="h-4 w-4 text-ink" />
            {property.beds} Beds
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-cloud px-3 py-2">
            <Bath className="h-4 w-4 text-ink" />
            {property.baths} Baths
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-cloud px-3 py-2">
            <Ruler className="h-4 w-4 text-ink" />
            {property.sqft} sqft
          </span>
        </div>
      </div>
    </article>
  );
}
