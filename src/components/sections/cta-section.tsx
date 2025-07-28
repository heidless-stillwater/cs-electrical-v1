import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
          Ready to Power Up Your Project?
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Contact us today for a free, no-obligation estimate. Our expert electricians are ready to help with any project, big or small.
        </p>
        <Button size="lg" variant="secondary" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="#contact">Schedule an Appointment</Link>
        </Button>
      </div>
    </section>
  );
}
