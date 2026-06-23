import Image from 'next/image';
import { ArrowRight, Search } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="bg-white px-3 py-6 sm:px-5 sm:py-10">
      <div className="section-shell relative overflow-hidden rounded-[34px] bg-ink px-6 py-12 sm:px-10 lg:py-16">
        <Image
          src="https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?auto=format&fit=crop&w=1800&q=80"
          alt="Modern residential exterior"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-honey">
              Find or list with JustHome
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Ready to make your next property move?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">
              Browse verified homes for sale and rent, or connect with our team to position your
              property in front of serious UAE buyers.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-honey px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#f4d565] focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              <Search className="h-4 w-4" />
              Find a Property
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/45 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-ink focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              List Your Home
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
