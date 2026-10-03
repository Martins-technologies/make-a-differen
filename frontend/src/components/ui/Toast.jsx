import * as ToastPrimitive from '@radix-ui/react-toast';
import { cn } from '@/utils/cn';

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = () => (
  <ToastPrimitive.Viewport className="fixed bottom-4 right-4 z-[100] flex max-w-sm flex-col gap-2 outline-none" />
);

export function Toast({ open, onOpenChange, title, description, variant = 'default' }) {
  return (
    <ToastPrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      className={cn(
        'rounded-md border border-border bg-surface p-4 shadow-md',
        variant === 'danger' && 'border-danger/30',
      )}
    >
      {title ? (
        <ToastPrimitive.Title className="text-body font-medium">{title}</ToastPrimitive.Title>
      ) : null}
      {description ? (
        <ToastPrimitive.Description className="text-small text-muted">
          {description}
        </ToastPrimitive.Description>
      ) : null}
    </ToastPrimitive.Root>
  );
}
