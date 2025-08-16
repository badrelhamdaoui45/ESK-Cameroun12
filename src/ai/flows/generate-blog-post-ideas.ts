'use server';
/**
 * @fileOverview Blog post idea generator for the association.
 *
 * - generateBlogPostIdeas - A function that generates blog post ideas.
 * - BlogPostIdeasInput - The input type for the generateBlogPostIdeas function.
 * - BlogPostIdeasOutput - The return type for the generateBlogPostIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BlogPostIdeasInputSchema = z.object({
  topic: z
    .string()
    .describe("The topic to generate blog post ideas for. Should be related to youth development in arts, culture, and agriculture."),
  numIdeas: z.number().describe('The number of blog post ideas to generate.'),
});
export type BlogPostIdeasInput = z.infer<typeof BlogPostIdeasInputSchema>;

const BlogPostIdeasOutputSchema = z.object({
  ideas: z.array(z.string()).describe('A list of blog post ideas.'),
});
export type BlogPostIdeasOutput = z.infer<typeof BlogPostIdeasOutputSchema>;

export async function generateBlogPostIdeas(input: BlogPostIdeasInput): Promise<BlogPostIdeasOutput> {
  return generateBlogPostIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'blogPostIdeasPrompt',
  input: {schema: BlogPostIdeasInputSchema},
  output: {schema: BlogPostIdeasOutputSchema},
  prompt: `You are a blog post idea generator for a youth development association focused on arts, culture, and agriculture.

  Generate {{numIdeas}} blog post ideas related to the following topic:

  {{topic}}

  Return the ideas as a list of strings.
  `,
});

const generateBlogPostIdeasFlow = ai.defineFlow(
  {
    name: 'generateBlogPostIdeasFlow',
    inputSchema: BlogPostIdeasInputSchema,
    outputSchema: BlogPostIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
