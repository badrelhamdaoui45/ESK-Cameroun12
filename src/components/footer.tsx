import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, FileText, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-10 w-10 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">EXCELLES</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Promoting the development and education of Cameroonian youth through arts, culture, and agriculture.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-primary">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 shrink-0" />
                <span>100 RUE LAURISTON, 75116 PARIS, FRANCE</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 shrink-0" />
                <a href="tel:0674367472" className="hover:text-primary">0674367472</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 shrink-0" />
                <a href="mailto:contact@execelles.com" className="hover:text-primary">contact@execelles.com</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-primary">Legal Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>SIREN: 904 433 190</li>
              <li>SIRET: 904 433 190 00025</li>
              <li>N°RNA: W751 261 957</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-primary">Transparency</h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 shrink-0" />
                    <Link href="/documents" className="hover:text-primary">
                        Document Library
                    </Link>
                </li>
                <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 shrink-0" />
                    <a href="https://annuaire-entreprises.data.gouv.fr/entreprise/excelles-smart-kids-cameroun-904433190" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        Official Directory Listing
                    </a>
                </li>
             </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EXCELLES SMART KIDS CAMEROUN. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
