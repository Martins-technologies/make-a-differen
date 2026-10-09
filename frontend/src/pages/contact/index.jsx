import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { GetInTouchSection } from '@/components/sections/contact/GetInTouchSection';
import { ContactMessageSection } from '@/components/sections/contact/ContactMessageSection';
import { ConnectWithUsSection } from '@/components/sections/contact/ConnectWithUsSection';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('contactPage.meta.title')}</title>
        <meta name="description" content={t('contactPage.meta.description')} />
      </Helmet>

      <ContactHero />
      <GetInTouchSection />
      <ContactMessageSection />
      <ConnectWithUsSection />
    </>
  );
}
