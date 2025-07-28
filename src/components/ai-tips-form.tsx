'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { generateAiTips, type AiTipsState } from '@/app/actions';
import { aiTipsSchema, type AiTipsSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get Tips
        </>
      )}
    </Button>
  );
}

export function AiTipsForm() {
  const initialState: AiTipsState = { message: null, tips: null, errors: {} };
  const [state, dispatch] = useFormState(generateAiTips, initialState);

  const form = useForm<AiTipsSchema>({
    resolver: zodResolver(aiTipsSchema),
    defaultValues: {
      concerns: '',
    },
  });

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Ask Our AI Assistant</CardTitle>
        <CardDescription>
          Enter your electrical concerns below for instant advice.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form action={dispatch}>
          <CardContent>
            <FormField
              control={form.control}
              name="concerns"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'My lights are flickering' or 'How can I save on my electricity bill?'"
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>{state.errors?.concerns?.[0]}</FormMessage>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <SubmitButton />
          </CardFooter>
        </form>
      </Form>
      {state.tips && (
        <Card className="m-6 mt-0 bg-primary/10 border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Sparkles className="text-primary"/> AI Generated Tips</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="whitespace-pre-wrap">{state.tips}</p>
            </CardContent>
        </Card>
      )}
       {state.message && !state.tips && (
         <p className="text-destructive text-center p-4">{state.message}</p>
       )}
    </Card>
  );
}
