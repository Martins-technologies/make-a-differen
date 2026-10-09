import { useTranslation } from 'react-i18next';
import { LeafCluster } from '@/components/sections/about/LeafCluster';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { resourceImages } from '@/data/resources';

export function ResourcesHero() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden py-8 md:py-12 lg:min-h-[32rem] lg:py-16" aria-labelledby="resources-hero-title">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <MergedMedia
          src={resourceImages.hero}
          alt={t('resourcesPage.hero.imageAlt')}
          placeholderLabel={t('resourcesPage.hero.imagePlaceholder')}
          priority
        />
      </div>

      <LeafCluster className="pointer-events-none absolute -bottom-8 left-0 hidden h-40 w-44 lg:block" />
      <LeafCluster className="pointer-events-none absolute bottom-6 right-[46%] hidden h-24 w-28 -scale-x-100 text-[#C5E3B4] xl:block" />

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-5 lg:col-span-7 lg:max-w-2xl">
            <span className="block h-1 w-12 rounded-pill bg-accent" aria-hidden="true" />
            <h1
              id="resources-hero-title"
              className="font-heading text-4xl font-bold leading-[1.12] tracking-tight text-primary sm:text-5xl lg:text-[length:var(--text-display-size)] lg:leading-[var(--text-display-line)] lg:tracking-[var(--text-display-tracking)]"
            >
              {t('resourcesPage.hero.title')}
            </h1>
            <p className="text-body-lg max-w-lg leading-relaxed text-primary/80">
              {t('resourcesPage.hero.description')}
            </p>
          </div>

        <div className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-5 lg:hidden">
          <MergedMedia
            src={resourceImages.hero}
            alt={t('resourcesPage.hero.imageAlt')}
            placeholderLabel={t('resourcesPage.hero.imagePlaceholder')}
            edge="top"
          />
        </div>
      </Container>
    </Section>
  );
}
