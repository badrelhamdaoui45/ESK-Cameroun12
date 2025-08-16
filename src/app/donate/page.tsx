import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CreditCard, Landmark, Gift } from 'lucide-react';

export default function DonatePage() {
  return (
    <div className="fade-in">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <PageHeader
          title="Support Our Mission"
          description="Your generous contribution empowers us to continue our vital work with the youth of Cameroon. Every donation, big or small, makes a lasting impact."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1523396140703-e5bdad4e5dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjYW1lcm91biUyMGNoaWxkJTIwcmVhZCUyMGJvb2t8ZW58MHx8fHwxNzU1Mjg1MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Happy children in Cameroon"
              data-ai-hint="cameroon child reading"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl text-primary">How Your Donation Helps</h2>
            <p className="text-muted-foreground">
              Your donation directly funds our programs in arts, culture, and agriculture. It provides essential materials for our workshops, supports our dedicated instructors, and helps us expand our reach to more communities. With your help, we can give more children the opportunity to learn, grow, and build a brighter future for themselves and for Cameroon.
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li><span className="font-semibold text-foreground">€25</span> can provide art supplies for a student for a month.</li>
              <li><span className="font-semibold text-foreground">€50</span> can purchase seeds and tools for our community gardens.</li>
              <li><span className="font-semibold text-foreground">€100</span> can sponsor a child's participation in a cultural workshop.</li>
            </ul>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-headline text-3xl text-center text-primary mb-12">Choose How You'd Like to Give</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl mt-4">Online Donation</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="flex-grow">
                  The fastest and easiest way to support our cause. Click below to make a secure online donation via PayPal.
                </CardDescription>
                <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
                    Donate via PayPal
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                  <Landmark className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl mt-4">Bank Transfer</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow text-muted-foreground">
                <p>You can also donate directly to our bank account. Please contact us for our account details.</p>
                <Button asChild variant="outline" className="mt-6">
                  <Link href="/contact">
                    Request Info
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl mt-4">In-Kind Donations</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow text-muted-foreground">
                <p>We also welcome donations of materials like art supplies, gardening tools, or books. Get in touch to coordinate.</p>
                <Button asChild variant="outline" className="mt-6">
                   <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
