import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { footerLinks } from '@/data/home';

const socials = [Facebook, Instagram, Twitter, Linkedin];
const footerHrefByLabel: Record<string, string> = {
  'Buy a Home': '/properties?type=Buy',
  'Rent a Home': '/properties?type=Rent',
  Commercial: '/categories/commercial',
  'New Projects': '/new-projects',
  'About JustHome': '/about',
  'Our Agents': '/agents',
  Blog: '/blog',
  Contact: '/contact',
  'Help Center': '/help',
  'Mortgage Guide': '/mortgage-guide',
  'Privacy Policy': '/privacy',
  Terms: '/terms',
};

export function Footer() {
  return (
    <footer className="bg-white pt-12">
      <div className="section-shell">
        <div className="grid gap-10 border-t border-slate-100 py-12 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/justhome.svg"
                alt="JustHome"
                width={150}
                height={43}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Premium property discovery for UAE buyers, renters, sellers, and investors.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-500">
              <a href="tel:+97145558888" className="flex items-center gap-3 hover:text-pine">
                <Phone className="h-4 w-4" />
                +971 455 8888
              </a>
              <a href="mailto:hello@justhome.ae" className="flex items-center gap-3 hover:text-pine">
                <Mail className="h-4 w-4" />
                hello@justhome.ae
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                Business Bay, Dubai, UAE
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-ink">{title}</h3>
                <ul className="mt-4 grid gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href={footerHrefByLabel[link]} className="text-sm text-slate-500 transition hover:text-pine">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">© 2026 JustHome. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {socials.map((Icon, index) => (
              <a
                href="#"
                key={index}
                aria-label="Social profile"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-ink transition hover:border-pine hover:bg-meadow hover:text-pine"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
