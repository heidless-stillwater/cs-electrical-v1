import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Electrician working on a circuit board"
        data-ai-hint="electrician work"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
          Your Trusted Partner for Electrical Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-primary-foreground/90">
          Providing safe, reliable, and high-quality electrical solutions for homes and businesses.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="#contact">Get a Free Quote</Link>
        </Button>
      </div>
    </section>
  );
}
