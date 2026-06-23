import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/metadata';

type BlogArticlePageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: BlogArticlePageProps) {
  const title = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return pageMetadata(title, 'Full JustHome article coming soon.');
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const title = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title={title}
        subTitle="Full article coming soon."
        breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: title }]}
      />
      <section className="section-shell py-16 lg:py-24">
        <div className="max-w-2xl rounded-[8px] bg-meadow p-8">
          <h2 className="text-2xl font-semibold text-ink">Full article coming soon</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Our advisory team is preparing the full guide. Browse the latest JustHome insights while this article is being finalized.
          </p>
          <Link href="/blog" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine">
            Back to insights
          </Link>
        </div>
      </section>
    </main>
  );
}
