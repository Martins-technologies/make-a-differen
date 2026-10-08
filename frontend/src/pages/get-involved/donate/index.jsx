import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { CorporateMatching } from '@/components/sections/donate/CorporateMatching';
import { DonateCta } from '@/components/sections/donate/DonateCta';
import { DonateHero } from '@/components/sections/donate/DonateHero';
import { DonateSuppliesSection } from '@/components/sections/donate/DonateSuppliesSection';
import { WaysToGive } from '@/components/sections/donate/WaysToGive';
import { YourSupportSection } from '@/components/sections/donate/YourSupportSection';

export default function DonatePage() {
  const { t } = useTranslation();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>{t('donatePage.meta.title')}</title>
        <meta name="description" content={t('donatePage.meta.description')} />
      </Helmet>

      <DonateHero />
      <WaysToGive />
      <DonateSuppliesSection />
      <YourSupportSection />
      <CorporateMatching />
      <DonateCta />
    </>
  );
}
