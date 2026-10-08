import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { DonateActions } from './DonateActions';

export function DonateCta() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden py-10 md:py-16">
      <div className="pointer-events-none absolute -bottom-16 right-0 text-secondary/15" aria-hidden="true">
        <svg width="280" height="280" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 8C28 32 16 58 50 94C84 58 72 32 50 8Z" />
          <path d="M50 28C50 28 42 48 50 78C58 48 50 28 50 28Z" fill="rgb(var(--color-bg))" opacity="0.55" />
        </svg>
      </div>
      <Container className="relative z-10 max-w-3xl space-y-6">
        <div className="space-y-3">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t('donatePage.cta.title')}
          </h2>
          <p className="text-body-lg leading-relaxed text-primary/80">{t('donatePage.cta.description')}</p>
        </div>
        <DonateActions />
      </Container>
    </Section>
  );
}
