import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { buttonVariants } from '@/components/ui/Button';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { cn } from '@/utils/cn';
import { HeroTrustBar } from '@/components/sections/home/HeroTrustBar';
import { donateImages, trustBarItems } from '@/data/donateImages';

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
        />
      </div>

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 sm:space-y-7 lg:col-span-7 lg:max-w-2xl">
          <div className="space-y-4">
            <h1 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem]">
              {t('donatePage.hero.title')}
            </h1>
            <p className="text-body-lg max-w-xl leading-relaxed text-primary/80">{t('donatePage.hero.description')}</p>
          </div>

          <div className="flex flex-wrap items-center pt-1">
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

          <HeroTrustBar items={trustBarItems} />
        </div>

        <div className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-5 lg:hidden">
          <MergedMedia
            src={donateImages.hero}
            alt={t('donatePage.hero.imageAlt')}
            placeholderLabel={t('donatePage.hero.imageAlt')}
            edge="top"
          />
        </div>
      </Container>
    </Section>
  );
}
