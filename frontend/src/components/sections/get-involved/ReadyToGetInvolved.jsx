import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Heart } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function ReadyToGetInvolved() {
  const { t } = useTranslation();

  return (
    <Section className="py-10 md:py-16 bg-bg">
      <Container>
        <div
          className="relative overflow-hidden rounded-3xl border border-teal-100/80 bg-[#E6F4F1] bg-cover bg-right bg-no-repeat p-8 shadow-sm sm:p-12 md:p-14"
          style={{ backgroundImage: "url('/getinvolved/banner.webp')" }}
        >
          <div className="relative z-10 space-y-6">
            <div className="space-y-2 max-w-3xl">
              <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
                {t('getInvolvedPage.readyToGetInvolved.title')}
              </h2>
              <p className="text-body-lg text-primary/85 leading-relaxed">
                {t('getInvolvedPage.readyToGetInvolved.description')}
              </p>
            </div>

            {/* 3 Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/get-involved/volunteer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-contrast shadow-sm transition-all hover:bg-primary-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <span>{t('getInvolvedPage.readyToGetInvolved.ctaVolunteer')}</span>
                <ArrowRight className="h-5 w-5 stroke-[2.5]" aria-hidden />
              </Link>

              <Link
                to="/get-involved/donate"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-8 py-3.5 text-base font-semibold text-accent-contrast shadow-sm transition-all hover:bg-accent-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <Heart className="h-5 w-5 fill-current" aria-hidden />
                <span>{t('getInvolvedPage.readyToGetInvolved.ctaDonate')}</span>
              </Link>

              <Link
                to="/get-involved/partner"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5EEAD4] px-8 py-3.5 text-base font-bold text-[#0F766E] shadow-sm transition-all hover:bg-[#2DD4BF] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <span>{t('getInvolvedPage.readyToGetInvolved.ctaPartner')}</span>
                <ArrowRight className="h-5 w-5 stroke-[2.5]" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
