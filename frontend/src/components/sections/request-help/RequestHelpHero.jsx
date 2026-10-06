import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function RequestHelpHero() {
  const { t } = useTranslation();

  const scrollToForm = (e) => {
    e.preventDefault();
    const el = document.getElementById('request-help-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section className="relative overflow-hidden bg-bg py-8 md:py-12 lg:py-16">
      <Container className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Text Content */}
        <div className="space-y-6 lg:col-span-7">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-secondary">
            {t('requestHelpPage.hero.eyebrow')}
          </span>

          <h1 className="font-sans text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {t('requestHelpPage.hero.title')}
          </h1>

          <div className="space-y-3 text-body-lg text-primary/85">
            <p className="leading-relaxed">
              {t('requestHelpPage.hero.description')}
            </p>
            <p className="leading-relaxed font-medium text-primary/70">
              {t('requestHelpPage.hero.privacyNotice')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#request-help-form"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-base font-semibold text-accent-contrast shadow-sm transition-all hover:bg-accent-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
            >
              <span>{t('requestHelpPage.hero.ctaSubmit')}</span>
              <ChevronRight className="h-5 w-5 stroke-[2.5]" aria-hidden />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-primary transition-all hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
            >
              {t('requestHelpPage.hero.ctaContact')}
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-3xl shadow-lg border border-border/60">
            <img
              src="/images/request-help-hero.jpg"
              alt={t('requestHelpPage.hero.imageAlt')}
              className="h-72 w-full object-cover object-top sm:h-96 lg:h-[420px]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
