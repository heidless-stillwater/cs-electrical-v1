// Electrical Tips Genkit Flow
'use server';

/**
 * @fileOverview Provides tailored electrical safety and energy-saving tips based on user input.
 *
 * - getElectricalTips - A function that takes user concerns as input and returns AI-generated tips.
 * - ElectricalTipsInput - The input type for the getElectricalTips function.
 * - ElectricalTipsOutput - The return type for the getElectricalTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ElectricalTipsInputSchema = z.object({
  concerns: z
    .string()
    .describe(
      'Specific electrical concerns or issues the user is facing in their home.'
    ),
});
export type ElectricalTipsInput = z.infer<typeof ElectricalTipsInputSchema>;

const ElectricalTipsOutputSchema = z.object({
  tips: z
    .string()
    .describe(
      'Tailored electrical safety and energy-saving tips based on the user input.'
    ),
});
export type ElectricalTipsOutput = z.infer<typeof ElectricalTipsOutputSchema>;

export async function getElectricalTips(input: ElectricalTipsInput): Promise<ElectricalTipsOutput> {
  return electricalTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'electricalTipsPrompt',
  input: {schema: ElectricalTipsInputSchema},
  output: {schema: ElectricalTipsOutputSchema},
  prompt: `You are an AI assistant specialized in providing electrical safety and energy-saving tips for homeowners.

  Based on the user's concerns, provide practical and actionable tips to improve their home's safety and reduce energy consumption. Be concise and clear in your advice.

  User Concerns: {{{concerns}}}`,
});

const electricalTipsFlow = ai.defineFlow(
  {
    name: 'electricalTipsFlow',
    inputSchema: ElectricalTipsInputSchema,
    outputSchema: ElectricalTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
