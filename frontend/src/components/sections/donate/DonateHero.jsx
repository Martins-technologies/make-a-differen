import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { buttonVariants } from '@/components/ui/Button';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { cn } from '@/utils/cn';
import { HomeIcon } from '@/components/sections/home/homeIcons';
import { donateImages } from '@/data/donateImages';

export function DonateHero() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden py-8 md:py-12 lg:min-h-[32rem] lg:py-16">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <MergedMedia
          src={donateImages.hero}
          alt={t('donatePage.hero.imageAlt')}
          placeholderLabel={t('donatePage.hero.imageAlt')}
          priority
          fade={false}
          imgClassName="object-[78%_center]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[58%] bg-gradient-to-r from-bg from-0% via-bg via-[70%] to-transparent to-[100%] lg:block"
        aria-hidden="true"
      />

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 sm:space-y-7 lg:col-span-7 lg:max-w-2xl">
          <div className="space-y-4">
            <h1 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem]">
              {t('donatePage.hero.title')}
            </h1>
            <p className="text-body-lg max-w-xl leading-relaxed text-primary/80">{t('donatePage.hero.description')}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1 sm:flex-nowrap">
            <a
              href="#ways-to-give"
              className={cn(
                buttonVariants({ variant: 'primary', size: 'lg' }),
                'shrink-0 gap-2 rounded-lg bg-primary font-medium text-primary-contrast shadow-sm hover:bg-primary-700',
              )}
            >
              <span>{t('donatePage.hero.ctaDonate')}</span>
              <HomeIcon name="arrowRight" className="h-4 w-4 stroke-[2.5]" />
            </a>
            <a
              href="#donate-supplies"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'shrink-0 rounded-lg border-2 border-primary bg-transparent font-medium text-primary hover:bg-primary/5',
              )}
            >
              {t('donatePage.hero.ctaSupplies')}
            </a>
          </div>

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

        <div className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-5 lg:hidden">
          <MergedMedia
            src={donateImages.hero}
            alt={t('donatePage.hero.imageAlt')}
            placeholderLabel={t('donatePage.hero.imageAlt')}
            edge="top"
            fade={false}
          />
        </div>
      </Container>
    </Section>
  );
}
