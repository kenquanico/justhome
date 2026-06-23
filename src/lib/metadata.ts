import type { Metadata } from 'next';

export const siteName = 'JustHome';

export const siteDescription =
  'Find homes, villas, apartments, and investment properties across the UAE.';

export function pageMetadata(title: string, description = siteDescription): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      siteName,
      type: 'website',
    },
  };
}
