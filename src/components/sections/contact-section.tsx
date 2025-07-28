import { ContactForm } from '@/components/contact-form';

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Have questions or need to schedule an appointment? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
