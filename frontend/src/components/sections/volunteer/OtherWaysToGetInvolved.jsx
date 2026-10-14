import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { SiteIcon } from '@/components/icons/siteIcons';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function OtherWaysToGetInvolved() {
  const { t } = useTranslation();

  const cards = [
    {
      id: 'donateFunds',
      icon: 'heart',
      iconBg: 'bg-[#FFF1F1]',
      iconColor: 'text-[#EF4444]',
      titleKey: 'volunteerPage.otherWays.cards.donateFunds.title',
      descKey: 'volunteerPage.otherWays.cards.donateFunds.description',
      link: '/get-involved/donate',
    },
    {
      id: 'partner',
      icon: 'users',
      iconBg: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0F766E]',
      titleKey: 'volunteerPage.otherWays.cards.partner.title',
      descKey: 'volunteerPage.otherWays.cards.partner.description',
      link: '/get-involved/partner',
    },
    {
      id: 'donateSupplies',
      icon: 'hand',
      iconBg: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0D9488]',
      titleKey: 'volunteerPage.otherWays.cards.donateSupplies.title',
      descKey: 'volunteerPage.otherWays.cards.donateSupplies.description',
      link: '/get-involved/donate#donate-supplies',
    },
  ];

  return (
    <Section className="py-10 md:py-16 bg-[#F8FAFC]">
      <Container className="space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            {t('volunteerPage.otherWays.title')}
          </h2>
          <p className="text-body-lg text-primary/80">
            {t('volunteerPage.otherWays.description')}
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            return (
              <Link
                key={card.id}
                to={card.link}
                className="flex items-center justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${card.iconBg} transition-transform duration-200 group-hover:scale-105`}>
                    <SiteIcon name={card.icon} className={`h-7 w-7 ${card.iconColor}`} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                      {t(card.titleKey)}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary/80 leading-relaxed line-clamp-2">
                      {t(card.descKey)}
                    </p>
                  </div>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-200/80 bg-red-50/50 text-accent transition-transform duration-200 group-hover:translate-x-1 group-hover:bg-accent group-hover:text-white">
                  <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
