import { useState } from 'react';

import { cn } from '@/utils/cn';

import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

/**
 * Loads an asset from public/images; falls back to ImagePlaceholder when missing.
 */
export function MediaImage({
  src,
  alt,
  className,
  aspect = '4/3',
  imgClassName,
  roundedClassName = 'rounded-2xl',
  placeholderLabel,
  placeholderVariant = 'label',
  fill = false,
  fit = 'cover',
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <ImagePlaceholder
        label={placeholderLabel || alt}
        aspect={fill ? 'auto' : aspect}
        variant={placeholderVariant}
        className={cn(roundedClassName, fill && 'h-full w-full', className)}
      />
    );
  }

  return (
    <div
      className={cn(
        'overflow-hidden',
        roundedClassName,
        fill && 'h-full w-full',
        fit === 'contain' && 'relative bg-surface-alt',
        className,
      )}
      style={fill ? undefined : { aspectRatio: aspect }}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          fit === 'contain' ? 'absolute inset-0 h-full w-full object-contain' : 'h-full w-full object-cover',
          imgClassName,
        )}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
