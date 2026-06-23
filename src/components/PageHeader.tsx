import Link from 'next/link';

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  current: string;
};

export function PageHeader({ eyebrow = 'JustHome', title, description, current }: PageHeaderProps) {
  return (
    <section className="bg-cloud px-3 pb-12 pt-32 sm:px-5 lg:pb-16">
      <div className="section-shell rounded-[32px] bg-white px-6 py-10 shadow-sm sm:px-10 lg:py-14">
        <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="transition hover:text-pine">
            Home
          </Link>
          <span>/</span>
          <span className="text-pine">{current}</span>
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">{description}</p>
      </div>
    </section>
  );
}
