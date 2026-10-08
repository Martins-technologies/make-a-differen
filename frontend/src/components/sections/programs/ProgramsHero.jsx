import { useTranslation } from 'react-i18next';
import { LeafCluster } from '@/components/sections/about/LeafCluster';
import { Container } from '@/components/ui/Container';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { programImages } from '@/data/programs';

export function ProgramsHero() {
  const { t } = useTranslation();

  return (
    <section className="relative max-w-full overflow-hidden bg-bg lg:min-h-[26.5rem]" aria-labelledby="programs-hero-title">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] lg:block">
        <MergedMedia
          src={programImages.hero}
          alt={t('programsPage.hero.imageAlt')}
          placeholderLabel={t('programsPage.hero.imagePlaceholder')}
          priority
        />
      </div>

      <LeafCluster className="pointer-events-none absolute -bottom-10 left-0 hidden h-40 w-44 text-[#A9D3A0] lg:block" />
      <LeafCluster className="pointer-events-none absolute bottom-6 right-[46%] hidden h-24 w-28 -scale-x-100 text-[#C5E3B4] xl:block" />

      <Container className="relative z-10 flex min-h-[inherit] min-w-0 items-center py-12 md:py-14 lg:py-16">
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="min-w-0 max-w-xl space-y-5">
            <span className="block h-1.5 w-14 rounded-pill bg-accent" aria-hidden="true" />
            <h1
              id="programs-hero-title"
              className="font-heading text-[2.6rem] font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-[3.35rem] lg:leading-[1.02]"
            >
              <span className="block">{t('programsPage.hero.titleLine1')}</span>
              <span className="block">{t('programsPage.hero.titleLine2')}</span>
            </h1>
            <p className="max-w-full text-[1.05rem] leading-relaxed text-primary/75 sm:max-w-[34rem] sm:text-lg">
              {t('programsPage.hero.description')}
            </p>
          </div>

          <div className="relative min-h-72 w-full min-w-0 overflow-hidden rounded-2xl lg:hidden">
            <MergedMedia
              src={programImages.hero}
              alt={t('programsPage.hero.imageAlt')}
              placeholderLabel={t('programsPage.hero.imagePlaceholder')}
              edge="top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
