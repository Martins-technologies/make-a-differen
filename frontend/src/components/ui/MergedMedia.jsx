import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

/**
 * Full photo, original color. A short cream dissolve sits only on the edge
 * facing the text. Falls back to an icon placeholder until the asset is added.
 */
export function MergedMedia({
  src,
  alt,
  placeholderLabel,
  className,
  edge = 'left',
  priority = false,
  fade = true,
  imgClassName,
}) {
  const [failed, setFailed] = useState(false);
  const missing = !src || failed;

  return (
    <div className={cn('absolute inset-0', className)}>
      {missing ? (
        <div className="absolute inset-0" role="img" aria-label={placeholderLabel || alt}>
          <div
            className={cn(
              'absolute bg-primary-100',
              edge === 'top' ? 'inset-0 rounded-2xl' : 'inset-y-0 right-0 left-0',
            )}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageIcon className="h-16 w-16 text-primary-400" aria-hidden />
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn(
            'absolute inset-0 h-full w-full object-contain',
            edge === 'top' ? 'object-center' : 'object-right',
            imgClassName,
          )}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
        />
      )}
      {missing || !fade ? null : (
        <div
          className={cn(
            'pointer-events-none absolute from-bg to-transparent',
            edge === 'top'
              ? 'inset-x-0 top-0 h-8 bg-gradient-to-b'
              : 'inset-y-0 left-0 w-[10%] bg-gradient-to-r',
          )}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
