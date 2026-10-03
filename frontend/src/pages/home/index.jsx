import { Helmet } from 'react-helmet-async';

import { useTranslation } from 'react-i18next';

import { FeaturedCoursesSection } from '@/components/sections/home/FeaturedCoursesSection';

import { GetInvolvedSection } from '@/components/sections/home/GetInvolvedSection';

import { HeroSection } from '@/components/sections/home/HeroSection';

import { HowWeMakeDifferenceSection } from '@/components/sections/home/HowWeMakeDifferenceSection';

import { OurImpactSection } from '@/components/sections/home/OurImpactSection';

import { SupportServicesSection } from '@/components/sections/home/SupportServicesSection';

import { WhoWeSupportSection } from '@/components/sections/home/WhoWeSupportSection';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('home.meta.title')}</title>
        <meta name="description" content={t('home.meta.description')} />
      </Helmet>

      <HeroSection />
      <WhoWeSupportSection />
      <HowWeMakeDifferenceSection />
      <FeaturedCoursesSection />
      <SupportServicesSection />
      <OurImpactSection />
      <GetInvolvedSection />
    </>
  );
}
