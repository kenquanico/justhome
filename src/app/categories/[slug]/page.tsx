import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { PageHeader } from '@/components/PageHeader';
import { PropertyExplorer } from '@/components/PropertyExplorer';
import { categories } from '@/lib/data';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) notFound();

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        current={category.label}
        title={`${category.label} listings`}
        description={category.description}
      />
      <Suspense fallback={<div className="section-shell py-12"><LoadingSkeleton /></div>}>
        <PropertyExplorer initialCategory={category.label} title={`${category.label} Properties`} />
      </Suspense>
    </main>
  );
}
