import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Nathan Lalande",
    role: "President & Founder",
    image: "/images/de.jpeg", // Using a local image
    hint: "woman portrait professional",
    bio: "Passionate about youth empowerment, Dr. Nathan Lalande founded EXCELLES with the vision of creating a brighter future for Cameroon's children through education and culture.",
  },
  {
    name: "Adolphe Morin",
    role: "Director of Agriculture",
    image: "/images/fr.jpg",
    hint: "man portrait professional",
    bio: "An expert in sustainable farming, Jean-Paul leads our agricultural initiatives, teaching young people how to cultivate the land and secure their future.",
  },
  {
    name: "Ignace Chardin",
    role: "Arts & Culture Coordinator",
    image: "/images/marie-dupont.png",
    hint: "woman portrait artist",
    bio: "Aïcha is a celebrated artist who inspires creativity and cultural pride through our arts programs, helping students discover their unique talents.",
  },
];


export default function AboutPage() {
  return (
    <div className="fade-in">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <PageHeader
          title="About EXCELLES"
          description="Learn about our mission to empower the next generation of Cameroonian leaders, artists, and innovators."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1588095647739-e5beb29c58f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8Y2FtZXJvdW4lMjBjaGlsZCUyMGVhdGluZ3xlbnwwfHx8fDE3NTUyNTc5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="A group of smiling children in Cameroon"
              data-ai-hint="cameroon children"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl text-primary">Our Story</h2>
            <p className="text-muted-foreground">
              EXCELLES SMART KIDS CAMEROUN was founded with a simple yet powerful belief: every child in Cameroon deserves the opportunity to reach their full potential. We saw a need for programs that not only educate but also inspire, that not only teach skills but also build character.
            </p>
            <p className="text-muted-foreground">
              Our association was officially registered to formalize our commitment to promoting the development and education of Cameroonian youth. We focus on the enriching fields of arts, culture, and agriculture as fundamental pillars for holistic growth, creativity, and self-sufficiency.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-headline text-3xl text-center text-primary mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl mt-4">Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We provide youth with the tools, knowledge, and confidence to shape their own futures.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl mt-4">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We foster a sense of belonging and collaboration, where every individual feels valued.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl mt-4">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We operate with transparency and a deep respect for the culture and people we serve.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-headline text-3xl text-center text-primary mb-12">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      data-ai-hint={member.hint}
                      fill
                      className="rounded-full object-cover border-4 border-secondary"
                    />
                  </div>
                  <h3 className="font-headline text-xl text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="text-muted-foreground mt-2 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-24 max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl text-center text-primary mb-8">Official Information</h2>
            <Card className="shadow-lg">
                <CardContent className="p-6 text-muted-foreground space-y-2">
                    <p><strong>Official Name:</strong> EXCELLES SMART KIDS CAMEROUN</p>
                    <p><strong>Family:</strong> Amicales, groupements affinitaires, groupements d'entraide</p>
                    <p><strong>Headquarters:</strong> 100 RUE LAURISTON, 75016 PARIS</p>
                    <p><strong>Management Address:</strong> 100 RUE LAURISTON, 75116 PARIS, FRANCE</p>
                    <p><strong>SIREN:</strong> 904 433 190</p>
                    <p><strong>SIRET:</strong> 904 433 190 00025</p>
                    <p><strong>RNA Number:</strong> W751 261 957</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
