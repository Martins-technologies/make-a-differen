import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { MissionVisionSection } from '@/components/sections/about/MissionVisionSection';
import { OurCommunitySection } from '@/components/sections/about/OurCommunitySection';
import { OurStorySection } from '@/components/sections/about/OurStorySection';
import { ValuesSection } from '@/components/sections/about/ValuesSection';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('about.meta.title')}</title>
        <meta name="description" content={t('about.meta.description')} />
      </Helmet>
      <AboutHero />
      <OurStorySection />
      <MissionVisionSection />
      <ValuesSection />
      <OurCommunitySection />
    </>
  );
}
