import { cn } from '@/utils/cn';

export function Container({ className, as: Component = 'div', ...props }) {
  return (
    <Component
      className={cn('mx-auto w-full max-w-container', className)}
      {...props}
    />
  );
}
