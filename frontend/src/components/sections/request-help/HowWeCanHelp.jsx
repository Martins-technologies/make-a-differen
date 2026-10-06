import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SupportCategoryIcon } from './RequestHelpIcons';

export function HowWeCanHelp({ onSelectCategory }) {
  const { t } = useTranslation();

  const categories = [
    {
      id: 'food',
      labelKey: 'requestHelpPage.howWeHelp.categories.food',
      bgClass: 'bg-[#FDE8E8]',
      iconColor: 'text-[#E54848]',
    },
    {
      id: 'clothing',
      labelKey: 'requestHelpPage.howWeHelp.categories.clothing',
      bgClass: 'bg-[#0F766E]',
      iconColor: 'text-white',
    },
    {
      id: 'hygiene',
      labelKey: 'requestHelpPage.howWeHelp.categories.hygiene',
      bgClass: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0F766E]',
    },
    {
      id: 'children',
      labelKey: 'requestHelpPage.howWeHelp.categories.children',
      bgClass: 'bg-[#FEF3C7]',
      iconColor: 'text-[#92400E]',
    },
    {
      id: 'employment',
      labelKey: 'requestHelpPage.howWeHelp.categories.employment',
      bgClass: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0F766E]',
    },
    {
      id: 'courses',
      labelKey: 'requestHelpPage.howWeHelp.categories.courses',
      bgClass: 'bg-[#FFEDD5]',
      iconColor: 'text-[#C2410C]',
    },
    {
      id: 'community',
      labelKey: 'requestHelpPage.howWeHelp.categories.community',
      bgClass: 'bg-[#FDE8E8]',
      iconColor: 'text-[#E54848]',
    },
    {
      id: 'other',
      labelKey: 'requestHelpPage.howWeHelp.categories.other',
      bgClass: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0F766E]',
    },
  ];

  const handleCategoryClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const formEl = document.getElementById('request-help-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section className="py-10 md:py-16 bg-[#F8FAFC]">
      <Container className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-sans text-3xl font-extrabold text-primary sm:text-4xl">
            {t('requestHelpPage.howWeHelp.title')}
          </h2>
          <p className="text-body-lg text-primary/80">
            {t('requestHelpPage.howWeHelp.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryClick(cat.id)}
              className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring group"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105 ${cat.bgClass}`}
              >
                <SupportCategoryIcon name={cat.id} className={`h-7 w-7 ${cat.iconColor}`} />
              </div>
              <span className="font-sans text-base font-bold text-primary group-hover:text-secondary">
                {t(cat.labelKey)}
              </span>
            </button>
          ))}
        </div>
      </Container>
    </Section>
  );
}
