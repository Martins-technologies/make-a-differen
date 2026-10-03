import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Button } from './Button';

export function Modal({ open, onOpenChange, title, description, children, trigger }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger ? <Dialog.Trigger asChild>{trigger}</Dialog.Trigger> : null}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-text/40" />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-surface p-6 shadow-lg focus-visible:outline-none',
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              {title ? <Dialog.Title className="text-h4">{title}</Dialog.Title> : null}
              {description ? (
                <Dialog.Description className="text-small text-muted">
                  {description}
                </Dialog.Description>
              ) : null}
            </div>
            <Dialog.Close asChild>
              <Button variant="ghost" size="sm" aria-label="Close dialog">
                <X className="h-4 w-4" aria-hidden />
              </Button>
            </Dialog.Close>
          </div>
          <div className="mt-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
