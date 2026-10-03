import { cn } from '@/utils/cn';

export function Section({ className, as: Component = 'section', ...props }) {
  return <Component className={cn('py-section lg:py-section-lg', className)} {...props} />;
}
