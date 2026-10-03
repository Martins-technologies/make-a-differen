import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

/**
 * Photo on one side that dissolves into the page background through the center.
 * Falls back to an icon placeholder until the asset is added.
 */
export function MergedMedia({
  src,
  alt,
  placeholderLabel,
  className,
  edge = 'left',
  priority = false,
}) {
  const [failed, setFailed] = useState(false);
  const missing = !src || failed;
  const fadeClass =
    edge === 'top'
      ? 'bg-gradient-to-b from-bg via-bg/40 via-[12%] to-transparent to-[36%]'
      : 'bg-gradient-to-r from-bg from-0% via-bg/80 via-[18%] to-transparent to-[46%]';

  return (
    <div className={cn('absolute inset-0', className)}>
      {missing ? (
        <div className="absolute inset-0" role="img" aria-label={placeholderLabel || alt}>
          <div
            className={cn(
              'absolute bg-primary-100',
              edge === 'top' ? 'inset-0 rounded-2xl' : 'inset-y-6 right-0 left-0 rounded-l-3xl',
            )}
          />
          <div
            className={cn(
              'absolute from-bg to-transparent',
              edge === 'top'
                ? 'inset-x-0 top-0 h-16 bg-gradient-to-b'
                : 'inset-y-6 left-0 w-[38%] bg-gradient-to-r',
            )}
            aria-hidden="true"
          />
          <div
            className={cn(
              'absolute flex items-center justify-center',
              edge === 'top' ? 'inset-0' : 'inset-y-6 right-0 left-[22%]',
            )}
          >
            <ImageIcon className="h-16 w-16 text-primary-400" aria-hidden />
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
        />
      )}
      {missing ? null : <div className={cn('absolute inset-0', fadeClass)} aria-hidden="true" />}
    </div>
  );
}
