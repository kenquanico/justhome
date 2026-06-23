import type { Property } from '@/lib/types';

export type PropertyFilterState = {
  q: string;
  location: string;
  type: string;
  listingType: string;
  beds: string;
  baths: string;
  maxPrice: string;
  sort: string;
  favoritesOnly?: boolean;
};

export function filterProperties(
  properties: Property[],
  filters: PropertyFilterState,
  favoriteIds: string[] = [],
) {
  const query = filters.q.trim().toLowerCase();

  return properties
    .filter((property) => {
      const matchesQuery =
        !query ||
        [property.title, property.location, property.city, property.type].some((value) =>
          value.toLowerCase().includes(query),
        );
      const matchesLocation = !filters.location || property.city === filters.location;
      const matchesType = !filters.type || property.type === filters.type;
      const matchesListing = !filters.listingType || property.listingType === filters.listingType;
      const matchesBeds = !filters.beds || property.beds >= Number(filters.beds);
      const matchesBaths = !filters.baths || property.baths >= Number(filters.baths);
      const matchesPrice = !filters.maxPrice || property.priceValue <= Number(filters.maxPrice);
      const matchesFavorite = !filters.favoritesOnly || favoriteIds.includes(property.id);

      return (
        matchesQuery &&
        matchesLocation &&
        matchesType &&
        matchesListing &&
        matchesBeds &&
        matchesBaths &&
        matchesPrice &&
        matchesFavorite
      );
    })
    .sort((a, b) => {
      if (filters.sort === 'price-asc') return a.priceValue - b.priceValue;
      if (filters.sort === 'price-desc') return b.priceValue - a.priceValue;
      if (filters.sort === 'area') return b.sqftValue - a.sqftValue;
      return new Date(b.dateListed).getTime() - new Date(a.dateListed).getTime();
    });
}
