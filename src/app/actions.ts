'use server';

import { z } from 'zod';
import { contactSchema, testimonialSchema, aiTipsSchema } from '@/lib/schemas';
import { getElectricalTips } from '@/ai/flows/electrical-tips';

// Contact Form
export type ContactState = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  message?: string | null;
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Submission failed. Please check the errors and try again.',
    };
  }

  // Simulate sending an email or saving to a database
  console.log('New Contact Form Submission:', validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: 'Thank you for your message! We will get back to you soon.',
  };
}

// Testimonial Form
export type TestimonialState = {
  errors?: {
    name?: string[];
    email?: string[];
    testimonial?: string[];
  };
  message?: string | null;
};

export async function submitTestimonial(
  prevState: TestimonialState,
  formData: FormData
): Promise<TestimonialState> {
  const validatedFields = testimonialSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    testimonial: formData.get('testimonial'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Submission failed. Please check the errors and try again.',
    };
  }

  // Simulate saving for moderation
  console.log('New Testimonial for Moderation:', validatedFields.data);
  // Here you would save the testimonial to a database with a 'pending' status.
  // If not approved, you would trigger an email back to the user.

  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: 'Thank you for your review! It has been submitted for approval.',
  };
}

// AI Tips
export type AiTipsState = {
    errors?: {
        concerns?: string[];
    };
    message?: string | null;
    tips?: string | null;
}

export async function generateAiTips(prevState: AiTipsState, formData: FormData): Promise<AiTipsState> {
    const validatedFields = aiTipsSchema.safeParse({
        concerns: formData.get('concerns'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please enter your concerns to get tips.',
            tips: null,
        }
    }
    
    try {
        const result = await getElectricalTips(validatedFields.data);
        if (result && result.tips) {
            return {
                message: null,
                tips: result.tips,
            };
        }
        throw new Error('No tips were generated.');
    } catch (error) {
        console.error('AI Tips generation failed:', error);
        return {
            message: 'Sorry, we were unable to generate tips at this time. Please try again later.',
            tips: null,
        }
    }
}
