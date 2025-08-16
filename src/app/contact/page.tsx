"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="fade-in">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <PageHeader
          title="Get in Touch"
          description="We'd love to hear from you. Whether you have a question, a partnership proposal, or want to volunteer, please reach out."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Regarding a partnership" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message..." rows={6} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div className="space-y-4 text-muted-foreground">
                <h3 className="font-headline text-2xl text-primary">Contact Information</h3>
                <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-accent mt-1"/>
                    <div>
                        <p className="font-semibold text-foreground">Address</p>
                        <p>100 RUE LAURISTON, 75116 PARIS, FRANCE</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-accent mt-1"/>
                    <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <a href="tel:0674367472" className="hover:text-primary">0674367472</a>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-accent mt-1"/>
                    <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a href="mailto:contact@execelles.com" className="hover:text-primary">contact@execelles.com</a>
                    </div>
                </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                    src="https://images.unsplash.com/photo-1738770513000-96a8f893024d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYW1lcm91biUyMGtpZHxlbnwwfHx8fDE3NTUyODUwODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="A child from Cameroon"
                    data-ai-hint="cameroon kid"
                    fill
                    className="object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
