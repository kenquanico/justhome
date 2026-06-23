import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Bath, BedDouble, Car, Check, Home, Mail, MapPin, Ruler, Star } from 'lucide-react';
import { PropertyGrid } from '@/components/PropertyGrid';
import { ScheduleTourModal } from '@/components/ScheduleTourModal';
import { agents, properties } from '@/lib/data';

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find((item) => item.id === params.id);
  if (!property) notFound();
  const agent = agents.find((item) => item.id === property.agentId) ?? agents[0];
  const related = properties
    .filter((item) => item.id !== property.id && (item.city === property.city || item.type === property.type))
    .slice(0, 3);

  const specs = [
    { label: 'Bedrooms', value: property.beds, icon: BedDouble },
    { label: 'Bathrooms', value: property.baths, icon: Bath },
    { label: 'Square Feet', value: property.sqft, icon: Ruler },
    { label: 'Year Built', value: property.yearBuilt, icon: Home },
    { label: 'Parking', value: property.parking, icon: Car },
    { label: 'Type', value: property.type, icon: Home },
  ];

  return (
    <main className="min-h-screen bg-white pb-16 pt-32">
      <section className="section-shell">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-pine">Home</Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-pine">Properties</Link>
          <span>/</span>
          <span className="text-pine">{property.title}</span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <button type="button" className="group relative min-h-[440px] overflow-hidden rounded-[32px] text-left">
            <Image src={property.images[0]} alt={property.title} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="rounded-full bg-honey px-3 py-1.5 text-xs font-bold text-ink">{property.status}</span>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">{property.title}</h1>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/80"><MapPin className="h-4 w-4" />{property.address}</p>
            </div>
          </button>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {property.images.slice(1, 3).map((image) => (
              <button key={image} type="button" className="relative min-h-[212px] overflow-hidden rounded-[28px]">
                <Image src={image} alt={property.title} fill sizes="(min-width: 1024px) 35vw, 50vw" className="object-cover transition duration-500 hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-3xl font-semibold text-pine">{property.price}</p>
            <p className="mt-5 text-sm leading-7 text-slate-500">{property.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {specs.map((spec) => (
                <div key={spec.label} className="rounded-2xl bg-cloud p-4">
                  <spec.icon className="h-5 w-5 text-pine" />
                  <p className="mt-3 text-xs font-semibold text-slate-500">{spec.label}</p>
                  <p className="mt-1 text-base font-semibold text-ink">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">Amenities</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {property.amenities.map((amenity) => (
                <span key={amenity} className="flex items-center gap-3 rounded-2xl bg-cloud px-4 py-3 text-sm font-semibold text-ink">
                  <Check className="h-4 w-4 text-pine" />
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-100 bg-meadow p-6">
            <h2 className="text-2xl font-semibold text-ink">Location</h2>
            <div className="mt-5 flex min-h-[280px] items-center justify-center rounded-[22px] border border-pine/10 bg-white text-center">
              <div>
                <MapPin className="mx-auto h-9 w-9 text-pine" />
                <p className="mt-3 text-sm font-semibold text-ink">{property.address}</p>
                <p className="mt-1 text-xs text-slate-500">Static map preview area</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-[28px] border border-slate-100 bg-white p-5 shadow-card lg:sticky lg:top-28">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image src={agent.image} alt={agent.name} fill sizes="64px" className="object-cover" />
            </div>
            <div>
              <h2 className="font-semibold text-ink">{agent.name}</h2>
              <p className="text-xs text-slate-500">{agent.specialty}</p>
              <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-pine"><Star className="h-3.5 w-3.5 fill-honey text-honey" />{agent.rating}</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 text-sm text-slate-500">
            <a href={`tel:${agent.phone}`} className="rounded-2xl bg-cloud px-4 py-3 hover:text-pine">{agent.phone}</a>
            <a href={`mailto:${agent.email}`} className="flex items-center gap-2 rounded-2xl bg-cloud px-4 py-3 hover:text-pine"><Mail className="h-4 w-4" />{agent.email}</a>
          </div>
          <div className="mt-5">
            <ScheduleTourModal propertyTitle={property.title} />
          </div>
        </aside>
      </section>

      <section className="section-shell mt-14">
        <h2 className="text-3xl font-semibold text-ink">Related properties</h2>
        <div className="mt-6">
          <PropertyGrid properties={related} />
        </div>
      </section>
    </main>
  );
}
