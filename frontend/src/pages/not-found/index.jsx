import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t('pages.notFound.title')} | {t('site.name')}
        </title>
      </Helmet>
      <Section>
        <Container>
          <h1>{t('pages.notFound.title')}</h1>
          <p className="mt-4 text-muted">{t('common.placeholder')}</p>
          <Link
            to="/"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 font-medium text-primary-contrast hover:bg-primary-700"
          >
            {t('nav.home')}
          </Link>
        </Container>
      </Section>
    </>
  );
}
