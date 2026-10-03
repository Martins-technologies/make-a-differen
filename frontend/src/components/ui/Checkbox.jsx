import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '@/utils/cn';

export function Checkbox({ className, id, ...props }) {
  return (
    <CheckboxPrimitive.Root
      id={id}
      className={cn(
        'flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-border bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-contrast',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Check className="h-3 w-3" aria-hidden />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
