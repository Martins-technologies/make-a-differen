import { useTranslation } from 'react-i18next';

import { Leaf } from 'lucide-react';

import { Container } from '@/components/ui/Container';

import { Section } from '@/components/ui/Section';

import { SectionHeading } from '@/components/ui/SectionHeading';

import { impactStats } from '@/data/home';

import { HomeIcon } from './homeIcons';

export function OurImpactSection() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden bg-surface-impact py-section lg:py-section-lg">
      <Leaf
        className="pointer-events-none absolute -bottom-8 right-4 hidden h-40 w-40 text-secondary/20 lg:block xl:right-12"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          title={t('home.impact.title')}
          description={t('home.impact.description')}
          className="mb-10"
        />

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <li key={stat.labelKey} className="flex items-center gap-4">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-pill bg-secondary text-secondary-contrast">
                <HomeIcon name={stat.icon} className="h-6 w-6" />
              </span>
              <span className="text-body-lg font-body font-semibold text-text">
                {t(stat.labelKey)}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
