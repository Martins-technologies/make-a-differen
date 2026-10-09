import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { MediaImage } from '@/components/ui/MediaImage';
import { aboutImages } from '@/data/about';

export function OurCommunitySection() {
  const { t } = useTranslation();

  return (
    <section id="community" className="scroll-mt-32 bg-bg py-6 pb-16 md:pb-20 lg:pb-24" aria-labelledby="about-community-title">
      <Container>
        <div className="grid items-center gap-8 rounded-3xl bg-tint-mint p-6 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10">
          <MediaImage
            src={aboutImages.community}
            alt={t('about.community.imageAlt')}
            placeholderLabel={t('about.community.imagePlaceholder')}
            placeholderVariant="icon"
            aspect="16/10"
            roundedClassName="rounded-2xl"
            className="w-full shadow-sm"
          />
          <div className="max-w-xl space-y-4">
            <h2 id="about-community-title">{t('about.community.title')}</h2>
            <p className="text-body-lg text-primary/80">{t('about.community.description')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
