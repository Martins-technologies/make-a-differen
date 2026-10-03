import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-pill px-3 py-1 text-small font-medium',

  {
    variants: {
      variant: {
        default: 'bg-surface-alt text-text',

        primary: 'bg-primary-100 text-primary',

        secondary: 'bg-secondary-100 text-secondary-800',

        accent: 'bg-accent-100 text-accent-800',

        success: 'bg-success/15 text-success',

        warning: 'bg-warning/15 text-warning',

        danger: 'bg-danger/15 text-danger',
      },
    },

    defaultVariants: { variant: 'default' },
  },
);

export function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
