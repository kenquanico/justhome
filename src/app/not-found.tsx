import Link from 'next/link';
import { Home } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Page Not Found');

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cloud px-5 pt-24">
      <div className="max-w-lg rounded-[30px] bg-white p-8 text-center shadow-soft">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-meadow text-pine">
          <Home className="h-8 w-8" />
        </div>
        <h1 className="mt-6 text-3xl font-semibold text-ink">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          The page you are looking for may have moved, or the listing is no longer available.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine"
        >
          Back to JustHome
        </Link>
      </div>
    </main>
  );
}
