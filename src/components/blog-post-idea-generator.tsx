"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { generateBlogPostIdeasAction } from '@/app/blog/actions';
import { Lightbulb, List, RefreshCw } from 'lucide-react';

const formSchema = z.object({
  topic: z.string().min(10, { message: "Please describe your topic in at least 10 characters." }),
});

export default function BlogPostIdeaGenerator() {
  const [result, setResult] = useState<{ ideas: string[] } | { error: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    const response = await generateBlogPostIdeasAction(values);
    setResult(response);
    setIsLoading(false);
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Topic</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., 'How traditional Cameroonian music can inspire modern artists' or 'The benefits of community gardens for urban youth'"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Lightbulb className="mr-2 h-4 w-4" />
                Generate Ideas
              </>
            )}
          </Button>
        </form>
      </Form>

      {isLoading && (
        <div className="space-y-4 mt-8">
            <Skeleton className="h-8 w-1/3" />
            <div className="space-y-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-6 w-full" />
            </div>
        </div>
      )}

      {result && (
        <div className="mt-8">
          {'error' in result ? (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{result.error}</AlertDescription>
            </Alert>
          ) : (
            <Alert>
              <List className="h-4 w-4"/>
              <AlertTitle className="font-headline text-xl">Generated Ideas</AlertTitle>
              <AlertDescription>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {result.ideas.map((idea, index) => (
                    <li key={index}>{idea}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}
        </div>
      )}
    </div>
  );
}
