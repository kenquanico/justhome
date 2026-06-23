import { NewProjectsClient } from '@/components/NewProjectsClient';
import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'New Projects',
  'Explore off-plan launches and new real estate projects in Dubai with JustHome.'
);

export default function NewProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="New Projects in Dubai"
        subTitle="Exclusively off-plan launches with flexible payment plans."
        breadcrumbs={[{ label: 'New Projects' }]}
      />
      <NewProjectsClient />
    </main>
  );
}
