import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PartnerHero } from '@/components/sections/partner/PartnerHero';
import { WhoWePartnerWith } from '@/components/sections/partner/WhoWePartnerWith';
import { PartnerCtaBanner } from '@/components/sections/partner/PartnerCtaBanner';

export default function PartnerPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('partnerPage.meta.title')}</title>
        <meta name="description" content={t('partnerPage.meta.description')} />
      </Helmet>

      {/* Main Partner Page Sections matching approved mockup */}
      <PartnerHero />
      <WhoWePartnerWith />
      <PartnerCtaBanner />
    </>
  );
}
