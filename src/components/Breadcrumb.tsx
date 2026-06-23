import Link from 'next/link';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500" aria-label="Breadcrumb">
      <Link href="/" className="transition hover:text-pine">
        Home
      </Link>
      {items.map((item) => (
        <span key={`${item.label}-${item.href ?? 'current'}`} className="flex items-center gap-2">
          <span>/</span>
          {item.href ? (
            <Link href={item.href} className="transition hover:text-pine">
              {item.label}
            </Link>
          ) : (
            <span className="text-pine">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
