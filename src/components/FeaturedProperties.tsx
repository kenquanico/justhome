import { properties } from '@/data/home';
import { PropertyCard } from '@/components/PropertyCard';

const tabs = ['All Properties', 'For Sale', 'For Rent'];

export function FeaturedProperties() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <h2 className="section-heading">Featured Properties</h2>
        <p className="section-kicker">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab}
              className={`rounded-full border px-5 py-2.5 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-honey/60 ${
                index === 0
                  ? 'border-ink bg-ink text-white'
                  : 'border-slate-200 bg-white text-ink hover:border-pine hover:text-pine'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.title} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
