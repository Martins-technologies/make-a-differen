import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { EmploymentBands } from '@/components/sections/employment/EmploymentBands';
import { EmploymentHero } from '@/components/sections/employment/EmploymentHero';
import { EmploymentServices } from '@/components/sections/employment/EmploymentServices';

export default function EmploymentPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('employment.meta.title')}</title>
        <meta name="description" content={t('employment.meta.description')} />
      </Helmet>
      <EmploymentHero />
      <EmploymentServices />
      <EmploymentBands />
    </>
  );
}
