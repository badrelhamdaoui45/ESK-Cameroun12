import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Leaf, Palette, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    title: 'Cultivating Creativity: The Role of Arts in Youth Education',
    category: 'Arts',
    image: 'https://images.unsplash.com/photo-1615150351337-6abb234dc10f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjYW1lcm91biUyMGNoaWxkfGVufDB8fHx8MTc1NTI1NzM1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'children painting',
    excerpt: 'Discover how artistic expression can unlock potential and foster critical thinking skills in young minds.',
    slug: '/blog/post-1',
  },
  {
    title: 'The Harvest of Knowledge: Modern Agriculture for a Sustainable Future',
    category: 'Agriculture',
    image: 'https://images.unsplash.com/photo-1694286080313-f87202a04452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYW1lcm91biUyMGNoaWxkJTIwZm9vZHxlbnwwfHx8fDE3NTUyNTc1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'youth farming',
    excerpt: 'Exploring innovative agricultural practices that empower communities and ensure food security for generations to come.',
    slug: '/blog/post-2',
  },
  {
    title: 'Our Rich Heritage: Preserving Cameroonian Culture',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1694286068158-836b3aec0599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8Y2FtZXJvdW4lMjBjaGlsZCUyMGZvb2R8ZW58MHx8fHwxNzU1MjU3NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'cultural dance',
    excerpt: 'A look into our efforts to celebrate and pass on the vibrant traditions and cultural heritage of Cameroon to the youth.',
    slug: '/blog/post-3',
  },
];

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1627843224559-826049a84618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjYW1lcm91biUyMGtpZHMlMjBlYXRpbmd8ZW58MHx8fHwxNzU1NDAxOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Children from Cameroon eating food"
          data-ai-hint="cameroon kids eating food"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl p-4 md:p-8">
          <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl drop-shadow-lg">
            Empowering the Youth of Cameroon
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Nurturing development and education through arts, culture, and agriculture.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="/about">
              Learn More About Our Mission
            </Link>
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl text-primary">Our Core Pillars</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are dedicated to the holistic development of Cameroonian youth, focusing on three key areas that shape a brighter future.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card className="text-center shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300">
            <CardHeader>
              <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl mt-4">Arts</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Fostering creativity and self-expression through painting, music, and performance.</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300">
            <CardHeader>
              <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl mt-4">Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Preserving and promoting the rich cultural heritage and traditions of Cameroon.</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300">
            <CardHeader>
              <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl mt-4">Agriculture</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Equipping youth with sustainable farming skills for food security and economic empowerment.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl text-primary">From the Association</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Latest news, stories, and insights from our team and the communities we serve.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="overflow-hidden shadow-lg group">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  data-ai-hint={post.hint}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary">{post.category}</Badge>
                <h3 className="font-headline text-xl mt-4 mb-2 h-16">{post.title}</h3>
                <p className="text-muted-foreground text-sm h-20">{post.excerpt}</p>
                <Button asChild variant="link" className="p-0 mt-4">
                  <Link href={post.slug}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/blog">Explore All Posts <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 md:px-6 py-16 text-center">
          <h2 className="font-headline text-3xl md:text-4xl text-primary">Join Us in Making a Difference</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your support can provide a child with the tools they need to build a successful future.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="/donate">
              Donate Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
