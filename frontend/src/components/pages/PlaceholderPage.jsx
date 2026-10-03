import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Alert } from '@/components/ui/Alert';

export default function PlaceholderPage({ titleKey, noIndex = false }) {
  const { t } = useTranslation();
  const title = t(titleKey);

  return (
    <>
      <Helmet>
        <title>
          {title} | {t('site.name')}
        </title>
        {noIndex ? <meta name="robots" content="noindex, nofollow" /> : null}
      </Helmet>
      <Section>
        <Container>
          <h1>{title}</h1>
          <Alert className="mt-6" variant="info">
            {t('common.placeholder')}
          </Alert>
        </Container>
      </Section>
    </>
  );
}
