import { useTranslation } from 'react-i18next';

import { Container } from '@/components/ui/Container';

import { Section } from '@/components/ui/Section';

import { SectionHeading } from '@/components/ui/SectionHeading';

import { Card } from '@/components/ui/Card';

import { MediaImage } from '@/components/ui/MediaImage';

import { whoWeSupportItems } from '@/data/home';

import { SectionLink } from './SectionLink';

export function WhoWeSupportSection() {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <SectionHeading
          title={t('home.whoWeSupport.title')}
          description={t('home.whoWeSupport.description')}
          action={
            <SectionLink to="/about">{t('home.whoWeSupport.learnMore')}</SectionLink>
          }
        />

        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {whoWeSupportItems.map((item) => (
            <li key={item.titleKey}>
              <Card
                tint={item.tint}
                padding="md"
                className="flex h-full gap-4 border-border shadow-sm"
              >
                <div className="shrink-0">
                  <MediaImage
                    src={item.illustration}
                    alt={t(item.illustrationAltKey)}
                    aspect="1"
                    roundedClassName="rounded-pill"
                    className="h-16 w-16"
                    imgClassName="object-contain p-1"
                  />
                </div>
                <div className="min-w-0 space-y-1">
                  <p className="text-h5 font-body font-semibold text-text">{t(item.titleKey)}</p>
                  <p className="text-body text-muted">{t(item.descriptionKey)}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
