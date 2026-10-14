import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { buttonVariants } from '@/components/ui/Button';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { cn } from '@/utils/cn';
import { HomeIcon } from './homeIcons';
import { HeroTrustBar } from './HeroTrustBar';

const HOME_HERO_IMAGE = '/new/01_Home_Hero.webp';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden py-8 md:py-12 lg:min-h-[32rem] lg:py-16">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <MergedMedia
          src={HOME_HERO_IMAGE}
          alt={t('home.hero.imageAlt')}
          placeholderLabel={t('home.hero.imagePlaceholder')}
          priority
        />
      </div>

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 sm:space-y-7 lg:col-span-7 lg:max-w-2xl">
          <div className="space-y-4">
            <h1 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem]">
              <span className="block">{t('home.hero.titleLine1')}</span>
              <span className="block sm:whitespace-nowrap">{t('home.hero.titleLine2')}</span>
            </h1>
            <p className="text-body-lg max-w-xl leading-relaxed text-primary/80">{t('home.hero.description')}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              to="/programs"
              className={cn(
                buttonVariants({ variant: 'primary', size: 'lg' }),
                'shrink-0 gap-2 rounded-lg bg-primary font-medium text-primary-contrast shadow-sm hover:bg-primary-700',
              )}
            >
              <span>{t('home.hero.cta.programs')}</span>
              <HomeIcon name="arrowRight" className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </div>

          <HeroTrustBar />
        </div>

        <div className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-5 lg:hidden">
          <MergedMedia
            src={HOME_HERO_IMAGE}
            alt={t('home.hero.imageAlt')}
            placeholderLabel={t('home.hero.imagePlaceholder')}
            edge="top"
            imgClassName="object-cover object-center"
          />
        </div>
      </Container>
    </Section>
  );
}
