import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { PageHero } from '@/components/PageHero';
import { PropertyExplorer } from '@/components/PropertyExplorer';
import { categories } from '@/lib/data';
import { pageMetadata } from '@/lib/metadata';

type CategoryPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: CategoryPageProps) {
  const category = categories.find((item) => item.slug === params.slug);

  if (!category) {
    return pageMetadata('Category Not Found');
  }

  return pageMetadata(`${category.label} Listings`, category.description);
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) notFound();

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title={`${category.label} listings`}
        subTitle={`${category.description} ${category.count} currently curated by JustHome.`}
        backgroundImageUrl={category.image}
        breadcrumbs={[{ label: 'Categories', href: '/categories' }, { label: category.label }]}
      />
      <Suspense fallback={<div className="section-shell py-12"><LoadingSkeleton /></div>}>
        <PropertyExplorer initialCategory={category.label} title={`${category.label} Properties`} />
      </Suspense>
    </main>
  );
}
