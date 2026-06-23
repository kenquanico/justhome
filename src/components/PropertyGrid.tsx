import type { Property } from '@/lib/types';
import { EmptyState } from '@/components/EmptyState';
import { PropertyCard } from '@/components/PropertyCard';

export function PropertyGrid({
  properties,
  view = 'grid',
}: {
  properties: Property[];
  view?: 'grid' | 'list';
}) {
  if (!properties.length) {
    return <EmptyState />;
  }

  return (
    <div className={view === 'grid' ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' : 'grid gap-6'}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} view={view} />
      ))}
    </div>
  );
}
