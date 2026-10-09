import { useTranslation } from 'react-i18next';
import { LeafCluster } from '@/components/sections/about/LeafCluster';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { programImages } from '@/data/programs';

export function ProgramsHero() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden py-8 md:py-12 lg:min-h-[32rem] lg:py-16" aria-labelledby="programs-hero-title">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <MergedMedia
          src={programImages.hero}
          alt={t('programsPage.hero.imageAlt')}
          placeholderLabel={t('programsPage.hero.imagePlaceholder')}
          priority
        />
      </div>

      <LeafCluster className="pointer-events-none absolute -bottom-10 left-0 hidden h-40 w-44 text-[#A9D3A0] lg:block" />
      <LeafCluster className="pointer-events-none absolute bottom-6 right-[46%] hidden h-24 w-28 -scale-x-100 text-[#C5E3B4] xl:block" />

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 space-y-5 lg:col-span-7 lg:max-w-2xl">
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

        <div className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-5 lg:hidden">
          <MergedMedia
            src={programImages.hero}
            alt={t('programsPage.hero.imageAlt')}
            placeholderLabel={t('programsPage.hero.imagePlaceholder')}
            edge="top"
          />
        </div>
      </Container>
    </Section>
  );
}
