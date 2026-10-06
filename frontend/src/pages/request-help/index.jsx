import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { RequestHelpHero } from '@/components/sections/request-help/RequestHelpHero';
import { HowWeCanHelp } from '@/components/sections/request-help/HowWeCanHelp';
import { RequestHelpForm } from '@/components/sections/request-help/RequestHelpForm';
import { WhatToExpect } from '@/components/sections/request-help/WhatToExpect';
import { EmergencyNotice } from '@/components/sections/request-help/EmergencyNotice';

export default function RequestHelpPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <>
      <Helmet>
        <title>{t('requestHelpPage.meta.title')}</title>
        <meta name="description" content={t('requestHelpPage.meta.description')} />
      </Helmet>

      {/* Main Request Help Page Sections matching approved mockup */}
      <RequestHelpHero />
      <HowWeCanHelp onSelectCategory={setSelectedCategory} />
      <RequestHelpForm selectedCategory={selectedCategory} />
      <WhatToExpect />
      <EmergencyNotice />
    </>
  );
}
