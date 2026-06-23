import type { Metadata } from 'next';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { siteDescription, siteName } from '@/lib/metadata';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Premium Real Estate Marketplace`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: `${siteName} | Premium Real Estate Marketplace`,
    description: siteDescription,
    siteName,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <FavoritesProvider>
          <Navbar />
          {children}
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
