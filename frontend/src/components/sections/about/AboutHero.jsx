import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { aboutImages } from '@/data/about';
import { LeafCluster } from './LeafCluster';

export function AboutHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-bg lg:min-h-[34rem]" aria-labelledby="about-hero-title">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] lg:block">
        <MergedMedia
          src={aboutImages.hero}
          alt={t('about.hero.imageAlt')}
          placeholderLabel={t('about.hero.imagePlaceholder')}
          priority
        />
      </div>

      <LeafCluster className="pointer-events-none absolute -bottom-8 left-0 hidden h-40 w-44 lg:block" />

      <Container className="relative z-10 flex min-h-[inherit] items-center py-12 md:py-16 lg:py-20">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2">
          <div className="max-w-xl space-y-5">
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

          <div className="relative min-h-72 overflow-hidden rounded-2xl lg:hidden">
            <MergedMedia
              src={aboutImages.hero}
              alt={t('about.hero.imageAlt')}
              placeholderLabel={t('about.hero.imagePlaceholder')}
              edge="top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
