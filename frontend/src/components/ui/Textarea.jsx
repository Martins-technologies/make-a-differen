import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export const Textarea = forwardRef(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        'text-body duration-default flex min-h-24 w-full rounded-md border border-border bg-surface px-4 py-2.5 text-text transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
});
