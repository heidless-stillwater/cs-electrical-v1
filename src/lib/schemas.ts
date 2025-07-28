import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactSchema = z.infer<typeof contactSchema>;

export const testimonialSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  testimonial: z.string().min(10, { message: 'Review must be at least 10 characters.' }),
});

export type TestimonialSchema = z.infer<typeof testimonialSchema>;

export const aiTipsSchema = z.object({
    concerns: z.string().min(10, { message: 'Please describe your concern in at least 10 characters.'}),
});

export type AiTipsSchema = z.infer<typeof aiTipsSchema>;
