import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

export function Accordion({ items, type = 'single', collapsible = true, className }) {
  return (
    <AccordionPrimitive.Root
      type={type}
      collapsible={collapsible}
      className={cn('divide-y divide-border rounded-lg border border-border', className)}
    >
      {items.map((item) => (
        <AccordionPrimitive.Item key={item.value} value={item.value}>
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="text-body flex min-h-11 w-full items-center justify-between px-4 py-3 text-left font-medium text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring [&[data-state=open]>svg]:rotate-180">
              {item.title}
              <ChevronDown
                className="h-4 w-4 shrink-0 text-muted transition-transform"
                aria-hidden
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="text-body data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden px-4 pb-4 text-muted">
            {item.content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
