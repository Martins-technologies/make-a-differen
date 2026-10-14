import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { buttonVariants } from '@/components/ui/Button';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { cn } from '@/utils/cn';
import { HeroTrustBar } from '../home/HeroTrustBar';

export function RequestHelpHero() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden py-8 md:py-12 lg:min-h-[32rem] lg:py-16">
      {/* Desktop Background Image with Gradient Dissolve matching Homepage Hero */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <MergedMedia
          src="/requesthelphero.png"
          alt={t('requestHelpPage.hero.imageAlt')}
          placeholderLabel="Photo placeholder — Request Help hero image"
          priority
        />
      </div>

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 sm:space-y-7 lg:col-span-7 lg:max-w-2xl">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                {t('requestHelpPage.hero.eyebrow')}
              </span>
            </div>

            <h1 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem]">
              {t('requestHelpPage.hero.title')}
            </h1>

            <div className="space-y-3 text-body-lg text-primary/85 max-w-xl">
              <p className="leading-relaxed">
                {t('requestHelpPage.hero.description')}
              </p>
              <p className="leading-relaxed font-medium text-primary/70 text-sm sm:text-base">
                {t('requestHelpPage.hero.privacyNotice')}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1 sm:flex-nowrap">
            <button
              type="button"
              className={cn(
                buttonVariants({ variant: 'primary', size: 'lg' }),
                'shrink-0 gap-2 rounded-lg bg-primary font-medium text-primary-contrast shadow-sm hover:bg-primary-700',
              )}
            >
              <span>{t('requestHelpPage.hero.ctaSubmit')}</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" aria-hidden />
            </button>

            <Link
              to="/contact"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'shrink-0 rounded-lg border-2 border-primary bg-transparent font-medium text-primary hover:bg-primary/5',
              )}
            >
              {t('requestHelpPage.hero.ctaContact')}
            </Link>
          </div>

          <HeroTrustBar />
        </div>

        {/* Mobile Media View matching Homepage Hero */}
        <div className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-5 lg:hidden">
          <MergedMedia
            src="/requesthelphero.png"
            alt={t('requestHelpPage.hero.imageAlt')}
            placeholderLabel="Photo placeholder — Request Help hero image"
            edge="top"
          />
        </div>
      </Container>
    </Section>
  );
}
