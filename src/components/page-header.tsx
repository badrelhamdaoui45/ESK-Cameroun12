import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("text-center", className)}>
      <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary">{title}</h1>
      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
