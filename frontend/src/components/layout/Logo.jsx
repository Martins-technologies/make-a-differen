import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { cn } from '@/utils/cn';

/**

 * Uses the official logo asset when present at /images/logo.svg (or .png).

 * Replace the placeholder path when the approved asset is added to public/images.

 */

export function Logo({ className, linkClassName, showTagline = false }) {
  const { t } = useTranslation();

  const logoSrc = '/images/logo.svg';

  return (
    <Link
      to="/"

      className={cn(
        'inline-flex min-h-11 items-center gap-3 rounded-sm focus-visible:outline-none',
        linkClassName,
      )}
    >
      <img
        src={logoSrc}

        alt=""

        className={cn('h-10 w-auto max-w-[3.5rem] object-contain', className)}

        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />

      <span className="flex flex-col leading-tight">
        <span className="text-small font-semibold uppercase tracking-wide text-primary">
          {t('site.name')}
        </span>

        {showTagline ? (
          <span className="text-small max-w-xs text-muted">{t('site.tagline')}</span>
        ) : null}
      </span>
    </Link>
  );
}
