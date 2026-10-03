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
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <ImagePlaceholder
        label={placeholderLabel || alt}
        aspect={aspect}
        variant={placeholderVariant}
        className={cn(roundedClassName, className)}
      />
    );
  }

  return (
    <div className={cn('overflow-hidden', roundedClassName, className)} style={{ aspectRatio: aspect }}>
      <img
        src={src}
        alt={alt}
        className={cn('h-full w-full object-cover', imgClassName)}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
