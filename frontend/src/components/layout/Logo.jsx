import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { cn } from '@/utils/cn';

/** Official lockup in public/make_a_difference_logo_TRANSPARENT.png */
export const LOGO_SRC = '/make_a_difference_logo_TRANSPARENT.png';

export function Logo({ className, linkClassName, showTagline = false }) {
  const { t } = useTranslation();

  return (
    <Link
      to="/"
      className={cn(
        'inline-flex min-h-11 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
        linkClassName,
      )}
    >
      <img
        src={LOGO_SRC}
        alt={t('site.name')}
        className={cn('h-12 w-auto max-w-[13rem] object-contain sm:h-14 sm:max-w-[16rem]', className)}
      />

      {showTagline ? (
        <span className="text-small max-w-xs text-muted">{t('site.tagline')}</span>
      ) : null}
    </Link>
  );
}
