import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Heart, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function WaysToMakeDifference() {
  const { t } = useTranslation();

  const scrollToThreeWays = (e) => {
    e.preventDefault();
    const el = document.getElementById('three-ways');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cards = [
    {
      id: 'time',
      icon: Users,
      iconBg: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0F766E]',
      titleKey: 'getInvolvedPage.waysToMakeDifference.cards.time.title',
      descKey: 'getInvolvedPage.waysToMakeDifference.cards.time.description',
      image: '/getinvolved/givetime.webp',
    },
    {
      id: 'resources',
      icon: Heart,
      iconBg: 'bg-[#FFF1F1]',
      iconColor: 'text-[#EF4444]',
      titleKey: 'getInvolvedPage.waysToMakeDifference.cards.resources.title',
      descKey: 'getInvolvedPage.waysToMakeDifference.cards.resources.description',
      image: '/getinvolved/giveresources.webp',
    },
    {
      id: 'communities',
      icon: Users,
      iconBg: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0F766E]',
      titleKey: 'getInvolvedPage.waysToMakeDifference.cards.communities.title',
      descKey: 'getInvolvedPage.waysToMakeDifference.cards.communities.description',
      image: '/getinvolved/buildconnections.webp',
    },
  ];

  return (
    <Section className="py-10 md:py-16 bg-[#F8FAFC]">
      <Container className="space-y-8">
        {/* Header Row */}
        <div className="space-y-2 max-w-3xl">
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            {t('getInvolvedPage.waysToMakeDifference.title')}
          </h2>
          <p className="text-body-lg text-primary/80 leading-relaxed">
            {t('getInvolvedPage.waysToMakeDifference.description')}
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const IconComp = card.icon;

            return (
              <div
                key={card.id}
                className="flex flex-col space-y-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                {/* Top Info Header */}
                <div className="flex items-start gap-3.5 min-h-[90px]">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${card.iconBg}`}>
                    <IconComp className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-bold text-primary">
                      {t(card.titleKey)}
                    </h3>
                    <p className="text-sm text-primary/80 leading-relaxed">
                      {t(card.descKey)}
                    </p>
                  </div>
                </div>

                {/* Bottom Image Container */}
                <div className="h-48 w-full overflow-hidden rounded-2xl">
                  <img
                    src={card.image}
                    alt={t(card.titleKey)}
                    className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
