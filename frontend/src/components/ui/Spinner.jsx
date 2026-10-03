import { cn } from '@/utils/cn';

export function Spinner({ className, label = 'Loading' }) {
  return (
    <div
      className={cn(
        'inline-block h-8 w-8 animate-spin rounded-pill border-2 border-border border-t-primary',
        className,
      )}
      role="status"
      aria-label={label}
    />
  );
}
