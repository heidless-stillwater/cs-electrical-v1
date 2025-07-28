import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { CtaSection } from '@/components/sections/cta-section';
import { AiTipsSection } from '@/components/sections/ai-tips-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <CtaSection />
      <AiTipsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
