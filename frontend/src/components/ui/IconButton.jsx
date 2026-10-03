import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const iconButtonVariants = cva(
  'inline-flex shrink-0 items-center justify-center rounded-pill transition-colors duration-default ease-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50',

  {
    variants: {
      variant: {
        accent: 'bg-accent text-accent-contrast hover:bg-accent-700',

        primary: 'bg-primary text-primary-contrast hover:bg-primary-700',

        outline: 'border border-border bg-surface text-primary hover:bg-surface-alt',

        ghost: 'text-primary hover:bg-surface-alt',
      },

      size: {
        sm: 'h-9 w-9 min-h-9 min-w-9',

        md: 'h-11 w-11 min-h-11 min-w-11',

        lg: 'h-12 w-12 min-h-12 min-w-12',
      },
    },

    defaultVariants: {
      variant: 'accent',

      size: 'md',
    },
  },
);

export function IconButton({ className, variant, size, type = 'button', children, ...props }) {
  return (
    <button
      type={type}

      className={cn(iconButtonVariants({ variant, size }), className)}

      {...props}
    >
      {children}
    </button>
  );
}

export { iconButtonVariants };
