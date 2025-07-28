'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { Logo } from '@/components/logo';
import { navLinks, siteConfig } from '@/lib/constants';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-bold text-lg">{siteConfig.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-primary font-bold">
                <Phone size={16} />
                <span>{siteConfig.phone}</span>
            </div>
            <Button asChild className='hidden md:flex'>
                <Link href="#contact">Start Here</Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="font-bold text-lg">{siteConfig.name}</span>
                </Link>
                <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="font-medium text-lg hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.label}
                    </Link>
                    ))}
                </nav>
                <div className="border-t pt-6 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary font-bold">
                        <Phone size={16} />
                        <span>{siteConfig.phone}</span>
                    </div>
                    <Button asChild>
                    <Link href="#contact" onClick={() => setIsOpen(false)}>Start Here</Link>
                    </Button>
                </div>
                </div>
            </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
