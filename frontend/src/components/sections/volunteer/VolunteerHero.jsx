import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function VolunteerHero() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden bg-bg py-8 md:py-12 lg:py-16">
      <Container className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Text Content */}
        <div className="space-y-6 lg:col-span-7">
          <div className="space-y-3">
            <span className="inline-block h-1 w-12 bg-accent rounded-full" aria-hidden="true" />
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              {t('volunteerPage.hero.title')}
            </h1>
          </div>

          <p className="text-body-lg leading-relaxed text-primary/85 max-w-2xl">
            {t('volunteerPage.hero.description')}
          </p>
        </div>

        {/* Hero Right Image */}
        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-3xl shadow-lg border border-border/60">
            <img
              src="/images/volunteer-hero.jpg"
              alt={t('volunteerPage.hero.imageAlt')}
              className="h-72 w-full object-cover object-center sm:h-96 lg:h-[420px]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
