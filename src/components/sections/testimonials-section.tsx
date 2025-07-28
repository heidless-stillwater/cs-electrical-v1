import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { testimonials } from '@/lib/constants';
import { Star } from 'lucide-react';
import { TestimonialForm } from '@/components/testimonial-form';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We take pride in our work and value the feedback from our clients.
            </p>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-lg"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="shadow-md">
                        <CardContent className="flex flex-col gap-4 p-6">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                          <div className="text-right">
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
          <div>
            <TestimonialForm />
          </div>
        </div>
      </div>
    </section>
  );
}
