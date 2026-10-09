import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { contactImages } from '@/data/contactImages';
import { LeafCluster } from '@/components/sections/about/LeafCluster';

export function ContactHero() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden py-8 md:py-12 lg:min-h-[32rem] lg:py-16" aria-labelledby="contact-hero-title">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <MergedMedia
          src={contactImages.hero}
          alt={t('contactPage.hero.imageAlt')}
          placeholderLabel={t('contactPage.hero.imagePlaceholder')}
          priority
        />
      </div>

      <LeafCluster className="pointer-events-none absolute -bottom-8 left-0 hidden h-40 w-44 text-[#B7D9A8] lg:block" />

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-5 lg:col-span-7 lg:max-w-2xl">
            <span className="block h-1.5 w-14 rounded-pill bg-accent" aria-hidden="true" />
            <h1
              id="contact-hero-title"
              className="font-heading text-[2.6rem] font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-[3.35rem] lg:leading-[1.02]"
            >
              {t('contactPage.hero.title')}
            </h1>
            <p className="max-w-lg text-[1.05rem] leading-relaxed text-primary/75 sm:text-lg">
              {t('contactPage.hero.description')}
            </p>
          </div>

        <div className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-5 lg:hidden">
          <MergedMedia
            src={contactImages.hero}
            alt={t('contactPage.hero.imageAlt')}
            placeholderLabel={t('contactPage.hero.imagePlaceholder')}
            edge="top"
          />
        </div>
      </Container>
    </Section>
  );
}
