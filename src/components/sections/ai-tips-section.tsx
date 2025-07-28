import { AiTipsForm } from '@/components/ai-tips-form';
import { Lightbulb } from 'lucide-react';

export function AiTipsSection() {
  return (
    <section id="ai-tips" className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
            <Lightbulb className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-headline font-bold">AI-Powered Electrical Tips</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Have a question about electrical safety or saving energy? Describe your concern below and our AI assistant will provide you with helpful tips.
          </p>
        </div>
        <AiTipsForm />
      </div>
    </section>
  );
}
