import type { Metadata } from 'next';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'JustHome | Premium Real Estate Marketplace',
  description: 'Find homes, villas, apartments, and investment properties across the UAE.',
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
