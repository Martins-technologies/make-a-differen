import { useTranslation } from 'react-i18next';
import { LeafCluster } from '@/components/sections/about/LeafCluster';
import { Container } from '@/components/ui/Container';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { resourceImages } from '@/data/resources';

export function ResourcesHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-bg lg:min-h-[34rem]" aria-labelledby="resources-hero-title">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] lg:block">
        <MergedMedia
          src={resourceImages.hero}
          alt={t('resourcesPage.hero.imageAlt')}
          placeholderLabel={t('resourcesPage.hero.imagePlaceholder')}
          priority
        />
      </div>

      <LeafCluster className="pointer-events-none absolute -bottom-8 left-0 hidden h-40 w-44 lg:block" />
      <LeafCluster className="pointer-events-none absolute bottom-6 right-[46%] hidden h-24 w-28 -scale-x-100 text-[#C5E3B4] xl:block" />

      <Container className="relative z-10 flex min-h-[inherit] items-center py-12 md:py-16 lg:py-20">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2">
          <div className="max-w-xl space-y-5">
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

          <div className="relative min-h-72 overflow-hidden rounded-2xl lg:hidden">
            <MergedMedia
              src={resourceImages.hero}
              alt={t('resourcesPage.hero.imageAlt')}
              placeholderLabel={t('resourcesPage.hero.imagePlaceholder')}
              edge="top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
