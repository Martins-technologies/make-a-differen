import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { contactImages } from '@/data/contactImages';
import { LeafCluster } from '@/components/sections/about/LeafCluster';

export function ContactHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-bg lg:min-h-[32rem]" aria-labelledby="contact-hero-title">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <MergedMedia
          src={contactImages.hero}
          alt={t('contactPage.hero.imageAlt')}
          placeholderLabel={t('contactPage.hero.imagePlaceholder')}
          priority
        />
      </div>

      <LeafCluster className="pointer-events-none absolute -bottom-8 left-0 hidden h-40 w-44 text-[#B7D9A8] lg:block" />

      <Container className="relative z-10 flex min-h-[inherit] items-center py-12 md:py-16 lg:py-20">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2">
          <div className="max-w-xl space-y-5">
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

          <div className="relative min-h-72 overflow-hidden rounded-2xl lg:hidden">
            <MergedMedia
              src={contactImages.hero}
              alt={t('contactPage.hero.imageAlt')}
              placeholderLabel={t('contactPage.hero.imagePlaceholder')}
              edge="top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
