import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Heart, Instagram, Linkedin, Youtube } from 'lucide-react';
import { FOOTER_LEGAL_LINKS } from '@/utils/constants';
import { Container } from '@/components/ui/Container';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { LOGO_SRC } from './Logo';
import { DONATE_PATH, FOOTER_NAV_COLUMNS } from './navConfig';

const SOCIAL_LINKS = [
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer className="overflow-hidden border-t border-border/80 bg-surface pb-12 pt-12 text-text">
      <Container className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-12 lg:items-stretch lg:gap-6 xl:gap-8">
        <div className="space-y-4 md:col-span-2 lg:col-span-3">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
          >
            {logoFailed ? (
              <span className="inline-flex min-h-11 items-center rounded-md bg-surface-alt px-3 text-small font-semibold text-primary">
                {t('site.name')}
              </span>
            ) : (
              <img
                src={LOGO_SRC}
                alt={t('site.name')}
                className="h-12 w-auto max-w-[13rem] object-contain sm:h-14 sm:max-w-[15rem]"
                onError={() => setLogoFailed(true)}
              />
            )}
          </Link>
          <p className="text-xs text-text/75 leading-relaxed max-w-xs">
            {t('site.tagline')}
          </p>
          <ul className="flex items-center gap-3 pt-1 text-primary" aria-label={t('footer.social')}>
            {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full text-primary hover:text-primary-700 hover:bg-primary-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                  aria-label={label}
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon className="h-4 w-4 fill-current" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center navigation columns (all headings 1-line and aligned horizontally) */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:col-span-2 md:grid-cols-5 lg:col-span-7 lg:gap-x-6">
          {FOOTER_NAV_COLUMNS.map((column) => (
            <div key={column.titleKey} className="space-y-2.5">
              <h2 className="text-[0.875rem] font-bold text-primary whitespace-nowrap">
                {t(column.titleKey)}
              </h2>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.labelKey}>
                    <Link
                      to={link.to}
                      className="text-xs text-text/80 transition-colors hover:text-primary hover:underline leading-snug block"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right action & legal block */}
        <div className="flex flex-col items-start justify-between gap-8 md:col-span-2 lg:col-span-2 lg:h-full lg:items-end">
          <Link
            to={DONATE_PATH}
            className={cn(buttonVariants({ variant: 'cta', size: 'md' }), 'shrink-0 rounded-xl px-6')}
          >
            <Heart className="h-4 w-4 fill-current" aria-hidden />
            <span>{t('nav.donate')}</span>
          </Link>

          <div className="space-y-1 text-left lg:text-right pt-2">
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text/70 lg:justify-end" aria-label={t('footer.policies')}>
              {FOOTER_LEGAL_LINKS.map((item, idx) => (
                <li key={item.to} className="flex items-center gap-2">
                  <Link
                    to={item.to}
                    className="hover:text-primary hover:underline transition-colors whitespace-nowrap"
                  >
                    {t(item.labelKey)}
                  </Link>
                  {idx < FOOTER_LEGAL_LINKS.length - 1 && (
                    <span className="text-text/40" aria-hidden="true">|</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-xs text-text/60">
              {t('footer.copyright', { year })}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
