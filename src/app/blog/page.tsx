import { PageHeader } from '@/components/page-header';
import BlogPostIdeaGenerator from '@/components/blog-post-idea-generator';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const blogPosts = [
  {
    title: 'Cultivating Creativity: The Role of Arts in Youth Education',
    category: 'Arts',
    image: 'https://images.unsplash.com/photo-1737648987004-2f724d30e6b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8Y2FtZXJvdW4lMjBjaGlsZHxlbnwwfHx8fDE3NTUyNTczNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'children painting',
    excerpt: 'Discover how artistic expression can unlock potential and foster critical thinking skills in young minds. We delve into our recent workshops and their impact.',
    date: 'July 20, 2024',
    slug: '#',
  },
  {
    title: 'The Harvest of Knowledge: Modern Agriculture for a Sustainable Future',
    category: 'Agriculture',
    image: 'https://placehold.co/600x400.png',
    hint: 'youth farming',
    excerpt: 'Exploring innovative agricultural practices that empower communities and ensure food security for generations to come. Read about our latest community garden project.',
    date: 'July 15, 2024',
    slug: '#',
  },
  {
    title: 'Our Rich Heritage: Preserving Cameroonian Culture',
    category: 'Culture',
    image: 'https://placehold.co/600x400.png',
    hint: 'cultural dance',
    excerpt: 'A look into our efforts to celebrate and pass on the vibrant traditions and cultural heritage of Cameroon to the youth through music and dance.',
    date: 'July 10, 2024',
    slug: '#',
  },
  {
    title: 'The Digital Canvas: Introducing Graphic Design to Teens',
    category: 'Arts',
    image: 'https://placehold.co/600x400.png',
    hint: 'teenager laptop',
    excerpt: 'Our new program introduces teenagers to the world of digital art and graphic design, opening up new career pathways and creative outlets.',
    date: 'July 5, 2024',
    slug: '#',
  },
  {
    title: 'From Seed to Supper: A Youth Cooking Initiative',
    category: 'Agriculture',
    image: 'https://placehold.co/600x400.png',
    hint: 'children cooking',
    excerpt: 'We\'re teaching children how to cook healthy meals using the produce they\'ve grown, connecting them to their food from start to finish.',
    date: 'June 28, 2024',
    slug: '#',
  },
];

function BlogGrid({ category }: { category: 'All' | 'Arts' | 'Culture' | 'Agriculture' }) {
  const filteredPosts =
    category === 'All' ? blogPosts : blogPosts.filter((post) => post.category === category);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredPosts.map((post) => (
        <Card key={post.title} className="overflow-hidden shadow-lg group flex flex-col">
          <div className="relative h-56">
            <Image
              src={post.image}
              alt={post.title}
              data-ai-hint={post.hint}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardContent className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-center mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>
            <h3 className="font-headline text-xl mt-2 mb-2 flex-grow">{post.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
            <Button asChild variant="link" className="p-0 mt-auto self-start">
              <Link href={post.slug}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="fade-in">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-24">
        <section>
          <PageHeader
            title="Our Blog"
            description="News, stories, and updates from the heart of our association. Explore our work in arts, culture, and agriculture."
          />
          <Tabs defaultValue="All" className="mt-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Arts">Arts</TabsTrigger>
              <TabsTrigger value="Culture">Culture</TabsTrigger>
              <TabsTrigger value="Agriculture">Agriculture</TabsTrigger>
            </TabsList>
            <TabsContent value="All">
              <BlogGrid category="All" />
            </TabsContent>
            <TabsContent value="Arts">
              <BlogGrid category="Arts" />
            </TabsContent>
            <TabsContent value="Culture">
              <BlogGrid category="Culture" />
            </TabsContent>
            <TabsContent value="Agriculture">
              <BlogGrid category="Agriculture" />
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <PageHeader
            title="Generate Blog Ideas"
            description="Stuck on what to write next? Use our AI-powered tool to generate creative blog post ideas related to our mission."
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-6 md:p-10">
                <BlogPostIdeaGenerator />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
