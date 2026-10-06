import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function WhatToExpect() {
  const { t } = useTranslation();

  const steps = [
    {
      number: 1,
      titleKey: 'requestHelpPage.whatToExpect.steps.step1.title',
      descKey: 'requestHelpPage.whatToExpect.steps.step1.description',
    },
    {
      number: 2,
      titleKey: 'requestHelpPage.whatToExpect.steps.step2.title',
      descKey: 'requestHelpPage.whatToExpect.steps.step2.description',
    },
    {
      number: 3,
      titleKey: 'requestHelpPage.whatToExpect.steps.step3.title',
      descKey: 'requestHelpPage.whatToExpect.steps.step3.description',
    },
  ];

  return (
    <Section className="py-10 md:py-16 bg-[#F8FAFC]">
      <Container className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-sans text-3xl font-extrabold text-primary sm:text-4xl">
            {t('requestHelpPage.whatToExpect.title')}
          </h2>
          <p className="text-body-lg text-primary/80">
            {t('requestHelpPage.whatToExpect.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-contrast font-bold text-lg shadow-sm">
                {step.number}
              </div>
              <div className="space-y-1.5 pt-0.5">
                <h3 className="font-sans text-lg font-bold text-primary">
                  {t(step.titleKey)}
                </h3>
                <p className="text-body text-primary/80 leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
