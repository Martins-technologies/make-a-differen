import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

export function Select({ value, onValueChange, placeholder, options = [], id, className, ...props }) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange} {...props}>
      <SelectPrimitive.Trigger
        id={id}
        className={cn(
          'text-body duration-default flex min-h-11 w-full items-center justify-between rounded-md border border-border bg-surface px-4 py-2.5 text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
          className,
        )}
        aria-label={placeholder}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-4 w-4 text-muted" aria-hidden />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="z-50 overflow-hidden rounded-lg border border-border bg-surface shadow-md">
          <SelectPrimitive.Viewport className="p-1">
            {options.map((opt) => (
              <SelectPrimitive.Item
                key={opt.value}
                value={opt.value}
                className="text-body relative flex min-h-11 cursor-pointer select-none items-center rounded-sm px-3 py-2 outline-none focus:bg-surface-alt data-[highlighted]:bg-surface-alt"
              >
                <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
