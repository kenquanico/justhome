'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

type BlogCategory = 'All' | 'Market' | 'Guides' | 'Finance' | 'Lifestyle';

type BlogPost = {
  title: string;
  slug: string;
  category: Exclude<BlogCategory, 'All'>;
  excerpt: string;
  date: string;
  readingTime: string;
  image: string;
};

const categories: BlogCategory[] = ['All', 'Market', 'Guides', 'Finance', 'Lifestyle'];

const posts: BlogPost[] = [
  {
    title: 'Dubai Marina Market Update',
    slug: 'dubai-marina-market-update',
    category: 'Market',
    excerpt: 'What waterfront buyers and renters are watching this quarter.',
    date: 'June 4, 2026',
    readingTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'A Calm Guide to Off-Plan Buying',
    slug: 'off-plan-guide',
    category: 'Guides',
    excerpt: 'How to evaluate payment plans, escrow, handover risk, and developer track records.',
    date: 'June 7, 2026',
    readingTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'School Catchments and Family Communities',
    slug: 'school-catchments',
    category: 'Guides',
    excerpt: 'A practical lens for shortlisting neighborhoods around daily routines.',
    date: 'June 10, 2026',
    readingTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mortgage vs Cash in the UAE',
    slug: 'mortgage-vs-cash',
    category: 'Finance',
    excerpt: 'Tradeoffs to understand before choosing how to fund a purchase.',
    date: 'June 12, 2026',
    readingTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'What Living in DIFC Feels Like',
    slug: 'difc-living',
    category: 'Lifestyle',
    excerpt: 'Dining, commute, culture, and apartment living in the city finance district.',
    date: 'June 16, 2026',
    readingTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Visa-by-Investment Basics',
    slug: 'visa-by-investment',
    category: 'Finance',
    excerpt: 'A starter overview for buyers comparing property investment thresholds.',
    date: 'June 19, 2026',
    readingTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=900&q=80',
  },
];

export function BlogList() {
  const [active, setActive] = useState<BlogCategory>('All');
  const visiblePosts = useMemo(
    () => posts.filter((post) => active === 'All' || post.category === active),
    [active],
  );

  return (
    <section className="py-16 lg:py-24">
      <div className="section-shell">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active === category ? 'bg-ink text-white' : 'bg-meadow text-ink hover:text-pine'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-[8px] border border-slate-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative aspect-[1.35] overflow-hidden">
                <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="rounded-full bg-meadow px-3 py-1.5 text-xs font-bold text-pine">{post.category}</span>
                <h2 className="mt-4 text-xl font-semibold text-ink">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                <p className="mt-5 text-xs font-semibold text-slate-500">{post.date} / {post.readingTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
