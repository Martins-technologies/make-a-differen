import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ProgramCategories } from '@/components/sections/programs/ProgramCategories';
import { ProgramsHero } from '@/components/sections/programs/ProgramsHero';
import { RelatedSubpages } from '@/components/sections/programs/RelatedSubpages';

export default function ProgramsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('programsPage.meta.title')}</title>
        <meta name="description" content={t('programsPage.meta.description')} />
      </Helmet>
      <ProgramsHero />
      <ProgramCategories />
      <RelatedSubpages />
    </>
  );
}
