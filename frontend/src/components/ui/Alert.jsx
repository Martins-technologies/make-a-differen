import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const alertVariants = cva('rounded-lg border p-4 text-body', {
  variants: {
    variant: {
      info: 'border-border bg-surface-alt text-text',

      success: 'border-success/40 bg-success/10 text-text',

      warning: 'border-warning/40 bg-warning/10 text-text',

      danger: 'border-danger/40 bg-danger/10 text-text',
    },
  },

  defaultVariants: { variant: 'info' },
});

export function Alert({ className, variant, role = 'status', ...props }) {
  return <div role={role} className={cn(alertVariants({ variant }), className)} {...props} />;
}
