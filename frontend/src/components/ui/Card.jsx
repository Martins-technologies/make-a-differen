import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const cardVariants = cva('rounded-xl text-text', {
  variants: {
    variant: {
      default: 'border border-border bg-surface shadow-sm',

      elevated: 'border border-border bg-surface shadow-md',

      flat: 'bg-surface-alt',

      media: 'overflow-hidden border border-border bg-surface shadow-sm',
    },

    tint: {
      none: '',

      lilac: 'bg-tint-lilac',

      mint: 'bg-tint-mint',

      sky: 'bg-tint-sky',

      peach: 'bg-tint-peach',

      turquoise: 'bg-tint-turquoise',

      teal: 'bg-tint-teal',

      cream: 'bg-tint-cream',

      blush: 'bg-tint-blush',

      slate: 'bg-tint-slate',
    },

    padding: {
      none: '',

      sm: 'p-4',

      md: 'p-6',

      lg: 'p-8',
    },
  },

  defaultVariants: {
    variant: 'default',

    tint: 'none',

    padding: 'md',
  },
});

export function Card({ className, variant, tint, padding, ...props }) {
  return <div className={cn(cardVariants({ variant, tint, padding }), className)} {...props} />;
}

export function CardMedia({ className, src, alt = '', ...props }) {
  return (
    <div className={cn('aspect-[4/3] w-full overflow-hidden bg-surface-alt', className)} {...props}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div
          className="text-small flex h-full w-full items-center justify-center text-muted"

          aria-hidden
        >
          Image placeholder
        </div>
      )}
    </div>
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('mb-4 space-y-2', className)} {...props} />;
}

export function CardTitle({ className, children, as = 'h3', ...props }) {
  const Component = as;

  return (
    <Component className={cn('text-h5 font-body font-semibold text-text', className)} {...props}>
      {children}
    </Component>
  );
}

export function CardDescription({ className, ...props }) {
  return <p className={cn('text-body text-muted', className)} {...props} />;
}

export function CardFooter({ className, ...props }) {
  return <div className={cn('mt-4 flex items-center justify-end', className)} {...props} />;
}

export { cardVariants };
