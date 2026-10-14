import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { requestHelpIcons } from '@/data/requestHelp';

export function EmergencyNotice() {
  const { t } = useTranslation();

  return (
    <Section className="py-8 md:py-12 bg-bg">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-6 rounded-3xl border border-red-200/80 bg-[#FDF2F2] p-6 sm:p-8 shadow-sm">
          <img src={requestHelpIcons.emergency} alt="" className="h-14 w-14 shrink-0" aria-hidden />

          {/* Notice Message */}
          <div className="space-y-1.5 text-primary">
            <h3 className="font-sans text-xl font-bold text-primary">
              {t('requestHelpPage.emergencyNotice.title')}
            </h3>
            <p className="text-body font-medium leading-relaxed text-primary/90">
              {t('requestHelpPage.emergencyNotice.line1')}
            </p>
            <p className="text-body font-medium leading-relaxed text-primary/90">
              {t('requestHelpPage.emergencyNotice.line2')}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
