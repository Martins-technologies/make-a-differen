import { cn } from '@/utils/cn';

/**
 * Renders a supplied home icon file as-is. The files have a white canvas with padding,
 * so the image is zoomed to fill its box and multiplied so the white blends into the card.
 */
export function HomeImageIcon({ src, className, zoom = 'scale-150' }) {
  return (
    <span className={cn('inline-flex shrink-0 overflow-hidden', className)} aria-hidden="true">
      <img src={src} alt="" className={cn('h-full w-full mix-blend-multiply', zoom)} />
    </span>
  );
}
