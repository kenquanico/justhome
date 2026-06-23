import Image from 'next/image';
import { Breadcrumb, type BreadcrumbItem } from '@/components/Breadcrumb';

type PageHeroProps = {
  title: string;
  subTitle: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImageUrl?: string;
};

export function PageHero({ title, subTitle, breadcrumbs, backgroundImageUrl }: PageHeroProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-meadow px-3 pb-12 pt-32 sm:px-5 lg:pb-16">
        {backgroundImageUrl ? (
          <>
            <Image src={backgroundImageUrl} alt="" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-ink/65" />
          </>
        ) : null}
        <div className="section-shell relative">
          <div className={backgroundImageUrl ? 'py-14 text-white lg:py-20' : 'py-10 text-ink lg:py-14'}>
            <p className={`text-xs font-bold uppercase tracking-[0.18em] ${backgroundImageUrl ? 'text-white' : 'text-pine'}`}>
              JustHome
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              {title}
            </h1>
            <p className={`mt-4 max-w-2xl text-sm leading-7 ${backgroundImageUrl ? 'text-white' : 'text-slate-600'}`}>
              {subTitle}
            </p>
          </div>
        </div>
      </section>
      {breadcrumbs?.length ? (
        <div className="border-b border-slate-100 bg-white">
          <div className="section-shell py-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>
      ) : null}
    </>
  );
}
