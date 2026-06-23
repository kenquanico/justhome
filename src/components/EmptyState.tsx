import Link from 'next/link';
import { SearchX } from 'lucide-react';

export function EmptyState({
  title = 'No results found',
  description = 'Try changing your filters or search terms to discover more JustHome listings.',
  href = '/properties',
  action = 'Browse all properties',
}: {
  title?: string;
  description?: string;
  href?: string;
  action?: string;
}) {
  return (
    <div className="rounded-[28px] border border-dashed border-slate-200 bg-white p-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-meadow text-pine">
        <SearchX className="h-8 w-8" />
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-ink">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine"
      >
        {action}
      </Link>
    </div>
  );
}
