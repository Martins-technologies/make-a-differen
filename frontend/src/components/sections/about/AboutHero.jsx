import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { aboutImages } from '@/data/about';
import { LeafCluster } from './LeafCluster';

export function AboutHero() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden py-8 md:py-12 lg:min-h-[32rem] lg:py-16" aria-labelledby="about-hero-title">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <MergedMedia
          src={aboutImages.hero}
          alt={t('about.hero.imageAlt')}
          placeholderLabel={t('about.hero.imagePlaceholder')}
          priority
        />
      </div>

      <LeafCluster className="pointer-events-none absolute -bottom-8 left-0 hidden h-40 w-44 lg:block" />

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-5 lg:col-span-7 lg:max-w-2xl">
            <span className="block h-1 w-12 rounded-pill bg-accent" aria-hidden="true" />
            <h1
              id="about-hero-title"
              className="font-heading text-4xl font-bold leading-[1.12] tracking-tight text-primary sm:text-5xl lg:text-[length:var(--text-display-size)] lg:leading-[var(--text-display-line)] lg:tracking-[var(--text-display-tracking)]"
            >
              {t('about.hero.title')}
            </h1>
            <p className="text-body-lg max-w-lg text-primary/80">{t('about.hero.description')}</p>
            <p className="font-heading text-xl font-semibold leading-snug sm:text-2xl">
              <span className="text-secondary">{t('about.hero.learn')}</span>{' '}
              <span className="text-accent">{t('about.hero.grow')}</span>{' '}
              <span className="text-accent-700">{t('about.hero.belong')}</span>{' '}
              <span className="text-primary">{t('about.hero.make')}</span>
            </p>
          </div>

        <div className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-5 lg:hidden">
          <MergedMedia
            src={aboutImages.hero}
            alt={t('about.hero.imageAlt')}
            placeholderLabel={t('about.hero.imagePlaceholder')}
            edge="top"
          />
        </div>
      </Container>
    </Section>
  );
}
