import Link from 'next/link';
import { SearchX } from 'lucide-react';

export function EmptyState({
  title = 'No results found',
  description,
  message,
  href = '/properties',
  ctaHref,
  action = 'Browse all properties',
  cta,
}: {
  title?: string;
  description?: string;
  message?: string;
  href?: string;
  ctaHref?: string;
  action?: string;
  cta?: string;
}) {
  const body = message ?? description ?? 'Try changing your filters or search terms to discover more JustHome listings.';
  const linkHref = ctaHref ?? href;
  const linkLabel = cta ?? action;

  return (
    <div className="rounded-[28px] border border-dashed border-slate-200 bg-white p-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-meadow text-pine">
        <SearchX className="h-8 w-8" />
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-ink">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">{body}</p>
      <Link
        href={linkHref}
        className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine"
      >
        {linkLabel}
      </Link>
    </div>
  );
}
