import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { VolunteerHero } from '@/components/sections/volunteer/VolunteerHero';
import { WaysToVolunteer } from '@/components/sections/volunteer/WaysToVolunteer';
import { VolunteerApplicationBanner } from '@/components/sections/volunteer/VolunteerApplicationBanner';
import { OtherWaysToGetInvolved } from '@/components/sections/volunteer/OtherWaysToGetInvolved';

export default function VolunteerPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('volunteerPage.meta.title')}</title>
        <meta name="description" content={t('volunteerPage.meta.description')} />
      </Helmet>

      {/* Main Volunteer Page Sections matching approved mockup */}
      <VolunteerHero />
      <WaysToVolunteer />
      <VolunteerApplicationBanner />
      <OtherWaysToGetInvolved />
    </>
  );
}
