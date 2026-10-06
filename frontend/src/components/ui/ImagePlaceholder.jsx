import { Image as ImageIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

/** Neutral stand-in for documentary photography until approved assets are added. */

export function ImagePlaceholder({
  className,
  label = 'Image placeholder',
  aspect = '4/3',
  variant = 'label',
}) {
  return (
    <div
      className={cn(
        'text-small flex w-full items-center justify-center overflow-hidden rounded-2xl bg-surface-alt text-muted',
        className,
      )}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      {variant === 'icon' ? (
        <ImageIcon className="h-10 w-10 text-primary-500" aria-hidden />
      ) : (
        <span aria-hidden className="px-4 text-center">
          {label}
        </span>
      )}
    </div>
  );
}
