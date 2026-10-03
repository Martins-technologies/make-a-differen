import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@/utils/cn';

export function RadioGroup({ className, ...props }) {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} />;
}

export function RadioGroupItem({ className, id, ...props }) {
  return (
    <RadioGroupPrimitive.Item
      id={id}
      className={cn(
        'flex h-5 w-5 items-center justify-center rounded-pill border border-border bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="h-2.5 w-2.5 rounded-pill bg-primary" />
    </RadioGroupPrimitive.Item>
  );
}
