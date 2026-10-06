import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function PartnerCtaBanner() {
  const { t } = useTranslation();

  return (
    <Section className="py-10 md:py-16 bg-bg">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-teal-100/90 bg-[#E6F4F1] p-8 sm:p-12 md:p-14 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Decorative Leaf Motif */}
          <div className="pointer-events-none absolute -right-6 -bottom-6 opacity-20 text-[#0F766E]">
            <svg width="240" height="240" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10 C30 30 20 60 50 90 C80 60 70 30 50 10 Z" />
            </svg>
          </div>

          {/* Left Text */}
          <div className="space-y-3 max-w-3xl relative z-10">
            <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
              {t('partnerPage.ctaBanner.title')}
            </h2>
            <p className="text-body-lg text-primary/85 leading-relaxed">
              {t('partnerPage.ctaBanner.description')}
            </p>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-8 py-3.5 text-base font-semibold text-accent-contrast shadow-sm transition-all hover:bg-accent-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
            >
              <span>{t('partnerPage.ctaBanner.cta')}</span>
              <ArrowRight className="h-5 w-5 stroke-[2.5]" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
