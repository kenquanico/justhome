import { BlogList } from '@/components/BlogList';
import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Blog',
  'Market news, area guides, and buying tips for UAE property seekers.'
);

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="JustHome Insights"
        subTitle="Market news, area guides, and buying tips for UAE property seekers."
        breadcrumbs={[{ label: 'Blog' }]}
      />
      <BlogList />
    </main>
  );
}
