'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Heart, Menu, Plus, Search, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/data/home';
import { useFavorites } from '@/context/FavoritesContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const pathname = usePathname() ?? '/';
  const router = useRouter();
  const { count } = useFavorites();

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) {
      params.set('q', query.trim());
    }
    router.push(`/search${params.toString() ? `?${params.toString()}` : ''}`);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/92 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/justhome.svg"
            alt="JustHome"
            width={150}
            height={43}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className={`text-xs font-semibold transition hover:text-pine ${
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? 'text-pine'
                  : 'text-ink/72'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <form onSubmit={submitSearch} className="flex items-center rounded-full bg-cloud px-3 py-2">
            <Search className="h-4 w-4 text-pine" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="w-24 bg-transparent px-2 text-xs font-medium outline-none placeholder:text-slate-400"
            />
          </form>
          <Link
            href="/properties?favorites=true"
            aria-label="View favorites"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-ink transition hover:border-pine hover:text-pine"
          >
            <Heart className="h-4 w-4" />
            {count ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-honey px-1 text-[10px] font-bold text-ink">
                {count}
              </span>
            ) : null}
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-xs font-semibold text-ink transition hover:bg-ink hover:text-white focus:outline-none focus:ring-2 focus:ring-honey/60"
          >
            <Plus className="h-3.5 w-3.5" />
            List Your Property
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-ink transition hover:border-pine lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-slate-100 bg-white p-4 shadow-soft lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-meadow ${
                  pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? 'bg-meadow text-pine'
                    : 'text-ink'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 grid gap-3 border-t border-slate-100 pt-4">
            <form onSubmit={submitSearch} className="flex items-center rounded-full bg-cloud px-4 py-3">
              <Search className="h-4 w-4 text-pine" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search properties"
                className="min-w-0 flex-1 bg-transparent px-2 text-sm font-medium outline-none"
              />
            </form>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              <Plus className="h-4 w-4" />
              List Your Property
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
