import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/utils/cn';

export function Tabs({ defaultValue, tabs, className }) {
  return (
    <TabsPrimitive.Root defaultValue={defaultValue || tabs[0]?.value} className={className}>
      <TabsPrimitive.List className="flex flex-wrap gap-2 border-b border-border">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            className={cn(
              'text-body min-h-11 px-4 py-2 font-medium text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-text',
            )}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map((tab) => (
        <TabsPrimitive.Content key={tab.value} value={tab.value} className="py-4">
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
