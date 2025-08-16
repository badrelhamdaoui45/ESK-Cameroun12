import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const documents = [
  {
    title: 'Annual Report 2023',
    description: 'A comprehensive overview of our activities, achievements, and financial performance in 2023.',
    fileUrl: '#', // Replace with actual file URL
  },
  {
    title: 'Association Statutes',
    description: 'The official statutes outlining the governance, mission, and operational rules of EXCELLES.',
    fileUrl: '#',
  },
  {
    title: 'Financial Statements 2023',
    description: 'Detailed financial statements for the fiscal year 2023, audited by a third party.',
    fileUrl: '#',
  },
  {
    title: 'Publication in the Official Journal',
    description: 'Official notice of the association\'s registration as published in the national gazette.',
    fileUrl: '#',
  },
];

export default function DocumentsPage() {
  return (
    <div className="fade-in">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <PageHeader
          title="Our Documents"
          description="In the spirit of transparency, we provide public access to our key organizational documents."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <Card key={doc.title} className="flex flex-col">
              <CardHeader className="flex-row gap-4 items-center">
                <FileText className="h-10 w-10 text-primary" />
                <div>
                  <CardTitle>{doc.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{doc.description}</p>
                <Button asChild className="mt-auto w-full">
                  <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
