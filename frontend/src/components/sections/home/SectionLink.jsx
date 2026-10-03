import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import { cn } from '@/utils/cn';

export function SectionLink({ to, children, className }) {
  return (
    <Link
      to={to}
      className={cn(
        'text-nav inline-flex min-h-11 items-center gap-1 text-primary transition-colors hover:text-primary-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
    </Link>
  );
}
