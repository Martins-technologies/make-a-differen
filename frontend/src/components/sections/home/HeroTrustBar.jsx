import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils/cn';
import { heroTrustItems } from '@/data/home';
import { HomeIcon } from './homeIcons';

export function HeroTrustBar({ className }) {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-border/80 pt-6 sm:flex-nowrap sm:gap-x-5',
        className,
      )}
      aria-label={t('home.hero.trust.label')}
    >
      {heroTrustItems.map((item, index) => (
        <Fragment key={item.labelKey}>
          {index > 0 ? (
            <div className="hidden h-4 w-px shrink-0 bg-border/90 sm:block" aria-hidden="true" />
          ) : null}
          <div className="flex shrink-0 items-center gap-2.5">
            <HomeIcon name={item.icon} className={cn('h-5 w-5 shrink-0', item.iconClass)} />
            <span className="whitespace-nowrap text-sm font-semibold text-primary sm:text-[0.9375rem]">
              {t(item.labelKey)}
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
