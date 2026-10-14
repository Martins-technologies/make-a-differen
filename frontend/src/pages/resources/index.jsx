import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ConnectWithUsSection } from '@/components/sections/contact/ConnectWithUsSection';
import { LookingForSupport } from '@/components/sections/resources/LookingForSupport';
import { resourceIcons } from '@/data/resources';
import { ResourceLibrary } from '@/components/sections/resources/ResourceLibrary';
import { ResourcesHero } from '@/components/sections/resources/ResourcesHero';

export default function ResourcesPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('resourcesPage.meta.title')}</title>
        <meta name="description" content={t('resourcesPage.meta.description')} />
      </Helmet>
      <ResourcesHero />
      <ResourceLibrary />
      <LookingForSupport />
      <ConnectWithUsSection icons={resourceIcons} />
    </>
  );
}
