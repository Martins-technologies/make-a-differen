import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { MediaImage } from '@/components/ui/MediaImage';
import { aboutImages } from '@/data/about';

export function OurStorySection() {
  const { t } = useTranslation();

  return (
    <section id="story" className="scroll-mt-32 border-t border-border bg-bg py-14 md:py-16 lg:py-20" aria-labelledby="about-story-title">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl space-y-4">
          <h2 id="about-story-title">{t('about.story.title')}</h2>
          <p className="text-body-lg text-primary/80">{t('about.story.description')}</p>
        </div>
        <MediaImage
          src={aboutImages.story}
          alt={t('about.story.imageAlt')}
          placeholderLabel={t('about.story.imagePlaceholder')}
          placeholderVariant="icon"
          aspect="16/10"
          roundedClassName="rounded-2xl"
          className="w-full shadow-sm"
        />
      </Container>
    </section>
  );
}
