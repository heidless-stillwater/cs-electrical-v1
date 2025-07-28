'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitTestimonial, type TestimonialState } from '@/app/actions';
import { testimonialSchema, type TestimonialSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Send } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Submit Review
        </>
      )}
    </Button>
  );
}

export function TestimonialForm() {
    const { toast } = useToast();
  const initialState: TestimonialState = { message: null, errors: {} };
  const [state, dispatch] = useActionState(submitTestimonial, initialState);

  const form = useForm<TestimonialSchema>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: '',
      email: '',
      testimonial: '',
    },
  });

  useEffect(() => {
    if (state.message) {
      if(state.errors && Object.keys(state.errors).length > 0) {
        toast({
            title: 'Error',
            description: state.message,
            variant: 'destructive',
        });
      } else {
        toast({
            title: 'Success',
            description: state.message,
        });
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Leave a Review</CardTitle>
        <CardDescription>
          Share your experience with us. Your feedback helps us improve.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form action={dispatch}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage>{state.errors?.name?.[0]}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage>{state.errors?.email?.[0]}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="testimonial"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your experience..."
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>{state.errors?.testimonial?.[0]}</FormMessage>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
