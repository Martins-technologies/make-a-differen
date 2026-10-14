import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { buttonVariants } from '@/components/ui/Button';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { cn } from '@/utils/cn';
import { HeroTrustBar } from '@/components/sections/home/HeroTrustBar';
import { employmentImages } from '@/data/employment';
import { trustBarItems } from '@/data/donateImages';

export function EmploymentHero() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden py-8 md:py-12 lg:min-h-[32rem] lg:py-16">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <MergedMedia
          src={employmentImages.hero}
          alt={t('employment.hero.imageAlt')}
          placeholderLabel={t('employment.hero.imagePlaceholder')}
          priority
        />
      </div>

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 sm:space-y-7 lg:col-span-7 lg:max-w-2xl">
          <div className="space-y-4">
            <h1
              id="employment-hero-title"
              className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem]"
            >
              <span className="block">{t('employment.hero.titleLine1')}</span>
              <span className="block sm:whitespace-nowrap">
                {t('employment.hero.titleLine2')} {t('employment.hero.titleLine3')}
              </span>
            </h1>
            <p className="text-body-lg max-w-xl leading-relaxed text-primary/80">{t('employment.hero.description')}</p>
          </div>

          <div className="pt-1">
            <Link
              to="/request-help"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'rounded-lg border-2 border-primary bg-transparent font-medium text-primary hover:bg-primary/5',
              )}
            >
              {t('home.hero.cta.requestSupport')}
            </Link>
          </div>

          <HeroTrustBar items={trustBarItems} />
        </div>

        <div className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-5 lg:hidden">
          <MergedMedia
            src={employmentImages.hero}
            alt={t('employment.hero.imageAlt')}
            placeholderLabel={t('employment.hero.imagePlaceholder')}
            edge="top"
          />
        </div>
      </Container>
    </Section>
  );
}
