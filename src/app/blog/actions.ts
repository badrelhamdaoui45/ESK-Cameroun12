"use server";

import { z } from 'zod';
import { generateBlogPostIdeas } from '@/ai/flows/generate-blog-post-ideas';

const BlogIdeaSchema = z.object({
    topic: z.string().min(10),
});

export async function generateBlogPostIdeasAction(input: { topic: string }) {
    const parsed = BlogIdeaSchema.safeParse(input);

    if (!parsed.success) {
        return { error: 'Invalid input. Please provide a more detailed topic.' };
    }

    try {
        const result = await generateBlogPostIdeas({ 
            topic: parsed.data.topic,
            numIdeas: 5
        });
        return { ideas: result.ideas };
    } catch (error) {
        console.error('Error generating blog post ideas:', error);
        return { error: 'An unexpected error occurred. Please try again later.' };
    }
}
