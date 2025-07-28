import Link from 'next/link';
import { Logo } from '@/components/logo';
import { siteConfig, navLinks } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
              <Logo className="h-10 w-10 text-primary" />
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-sm">Your reliable electrical experts.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>{siteConfig.address}</p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
            </address>
          </div>
           <div>
            <h3 className="text-lg font-semibold mb-4">Website</h3>
            <ul className="space-y-2">
                <li>
                     <a href={siteConfig.website} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                        {siteConfig.website}
                    </a>
                </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
