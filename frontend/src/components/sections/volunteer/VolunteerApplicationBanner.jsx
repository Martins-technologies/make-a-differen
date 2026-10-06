import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function VolunteerApplicationBanner() {
  const { t } = useTranslation();

  return (
    <Section className="py-10 md:py-16 bg-bg">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-amber-100/90 bg-[#FAF7F2] p-8 sm:p-12 shadow-sm grid lg:grid-cols-12 gap-8 items-center">
          {/* Decorative Leaf Motif */}
          <div className="pointer-events-none absolute right-1/3 bottom-0 opacity-15 text-emerald-700">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10 C30 30 20 60 50 90 C80 60 70 30 50 10 Z" />
            </svg>
          </div>

          {/* Left Side Content */}
          <div className="space-y-6 lg:col-span-7 relative z-10">
            <div className="space-y-3">
              <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
                {t('volunteerPage.application.title')}
              </h2>
              <p className="text-body-lg text-primary/85 leading-relaxed">
                {t('volunteerPage.application.description')}
              </p>
            </div>

            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-8 py-3.5 text-base font-semibold text-accent-contrast shadow-sm transition-all hover:bg-accent-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <span>{t('volunteerPage.application.cta')}</span>
                <ArrowRight className="h-5 w-5 stroke-[2.5]" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="lg:col-span-5 relative z-10">
            <div className="overflow-hidden rounded-2xl border border-border/50 shadow-sm">
              <img
                src="/images/volunteer-application.jpg"
                alt={t('volunteerPage.application.imageAlt')}
                className="h-64 sm:h-72 w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
