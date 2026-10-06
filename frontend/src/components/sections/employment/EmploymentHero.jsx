import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { MediaImage } from '@/components/ui/MediaImage';
import { employmentImages } from '@/data/employment';

export function EmploymentHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden pb-6 pt-8 sm:pt-10 lg:pb-4 lg:pt-12" aria-labelledby="employment-hero-title">
      <div
        className="pointer-events-none absolute -right-8 top-6 hidden h-[28rem] w-[34rem] rounded-full bg-secondary-100/80 blur-3xl lg:block"
        aria-hidden="true"
      />

      <Container className="relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-6">
        <div className="max-w-xl space-y-5 lg:pb-6">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-secondary">
            {t('employment.hero.eyebrow')}
          </p>
          <h1
            id="employment-hero-title"
            className="font-heading text-[2.15rem] font-bold leading-[1.08] tracking-[-0.02em] text-primary sm:text-5xl lg:text-[3.35rem]"
          >
            <span className="block">{t('employment.hero.titleLine1')}</span>
            <span className="block">{t('employment.hero.titleLine2')}</span>
            <span className="block">{t('employment.hero.titleLine3')}</span>
          </h1>
          <p className="max-w-lg text-[1.05rem] leading-relaxed text-muted">{t('employment.hero.description')}</p>
        </div>

        <div className="relative hidden lg:block">
          <MediaImage
            src={employmentImages.hero}
            alt={t('employment.hero.imageAlt')}
            placeholderLabel={t('employment.hero.imagePlaceholder')}
            placeholderVariant="icon"
            aspect="5/4"
            roundedClassName="rounded-[2rem]"
            className="min-h-[22rem] bg-primary-100 xl:min-h-[26rem]"
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-[36%] rounded-l-[2rem] bg-gradient-to-r from-bg to-transparent"
            aria-hidden="true"
          />
        </div>

        <MediaImage
          src={employmentImages.hero}
          alt={t('employment.hero.imageAlt')}
          placeholderLabel={t('employment.hero.imagePlaceholder')}
          placeholderVariant="icon"
          aspect="16/10"
          className="bg-primary-100 lg:hidden"
          roundedClassName="rounded-2xl"
        />
      </Container>
    </section>
  );
}
