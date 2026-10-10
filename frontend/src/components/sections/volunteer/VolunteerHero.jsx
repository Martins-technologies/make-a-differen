import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { buttonVariants } from '@/components/ui/Button';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { cn } from '@/utils/cn';
import { HomeIcon } from '../home/homeIcons';
import { updatedImages } from '@/data/updatedImages';

export function VolunteerHero() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden py-8 md:py-12 lg:min-h-[32rem] lg:py-16">
      {/* Desktop Background Image with Gradient Dissolve matching Homepage Hero */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <MergedMedia
          src={updatedImages.getInvolved.volunteerHero}
          alt={t('volunteerPage.hero.imageAlt')}
          placeholderLabel="Photo placeholder — Volunteer hero image"
          priority
        />
      </div>

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 sm:space-y-7 lg:col-span-7 lg:max-w-2xl">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                {t('getInvolvedPage.hero.eyebrow', 'Get Involved')}
              </span>
            </div>

            <h1 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem]">
              {t('volunteerPage.hero.title')}
            </h1>

            <p className="text-body-lg max-w-xl leading-relaxed text-primary/80">
              {t('volunteerPage.hero.description')}
            </p>
          </div>

          <div className="flex flex-wrap items-center pt-1">
            <a
              href="#volunteer-form"
              className={cn(
                buttonVariants({ variant: 'primary', size: 'lg' }),
                'shrink-0 gap-2 rounded-lg bg-primary font-medium text-primary-contrast shadow-sm hover:bg-primary-700',
              )}
            >
              <span>{t('volunteerPage.hero.ctaApply', 'Apply to Volunteer')}</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Trust Highlights matching Homepage Hero */}
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-border/80 pt-6 sm:flex-nowrap sm:gap-x-5"
            aria-label={t('home.hero.trust.label')}
          >
            <div className="flex shrink-0 items-center gap-2.5">
              <HomeIcon name="mapleLeaf" className="h-5 w-5 shrink-0 text-accent" />
              <span className="whitespace-nowrap text-sm font-semibold text-primary sm:text-[0.9375rem]">
                {t('home.hero.trust.strongerPeople')}
              </span>
            </div>

            <div className="hidden h-4 w-px shrink-0 bg-border/90 sm:block" aria-hidden="true" />

            <div className="flex shrink-0 items-center gap-2.5">
              <HomeIcon name="users" className="h-5 w-5 shrink-0 text-secondary" />
              <span className="whitespace-nowrap text-sm font-semibold text-primary sm:text-[0.9375rem]">
                {t('home.hero.trust.healthierFamilies')}
              </span>
            </div>

            <div className="hidden h-4 w-px shrink-0 bg-border/90 sm:block" aria-hidden="true" />

            <div className="flex shrink-0 items-center gap-2.5">
              <HomeIcon name="leaf" className="h-5 w-5 shrink-0 text-secondary-400" />
              <span className="whitespace-nowrap text-sm font-semibold text-primary sm:text-[0.9375rem]">
                {t('home.hero.trust.brighterCommunities')}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Media View matching Homepage Hero */}
        <div className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-5 lg:hidden">
          <MergedMedia
            src={updatedImages.getInvolved.volunteerHero}
            alt={t('volunteerPage.hero.imageAlt')}
            placeholderLabel="Photo placeholder — Volunteer hero image"
            edge="top"
          />
        </div>
      </Container>
    </Section>
  );
}
