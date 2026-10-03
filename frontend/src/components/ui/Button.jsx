import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-sm px-5 py-2.5 font-body text-body font-medium transition-colors duration-default ease-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50',

  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-contrast hover:bg-primary-700',

        secondary: 'bg-surface-alt text-text hover:bg-primary-50',

        outline: 'border border-primary bg-transparent text-primary hover:bg-primary-50',

        ghost: 'text-primary hover:bg-surface-alt',

        cta: 'bg-accent text-accent-contrast hover:bg-accent-700',

        danger: 'bg-danger text-primary-contrast hover:opacity-90',
      },

      size: {
        sm: 'min-h-9 px-3 text-small',

        md: 'min-h-11 px-5',

        lg: 'min-h-12 px-6 text-body-lg',
      },
    },

    defaultVariants: {
      variant: 'primary',

      size: 'md',
    },
  },
);

export function Button({ className, variant, size, type = 'button', ...props }) {
  return (
    <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
