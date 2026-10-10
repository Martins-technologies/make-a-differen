import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { GetInvolvedHero } from '@/components/sections/get-involved/GetInvolvedHero';
import { ThreeWaysSection } from '@/components/sections/get-involved/ThreeWaysSection';
import { WaysToMakeDifference } from '@/components/sections/get-involved/WaysToMakeDifference';

export default function GetInvolvedPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('getInvolvedPage.meta.title')}</title>
        <meta name="description" content={t('getInvolvedPage.meta.description')} />
      </Helmet>

      {/* Main Get Involved Page Sections matching approved mockup */}
      <GetInvolvedHero />
      <ThreeWaysSection />
      <WaysToMakeDifference />
    </>
  );
}
