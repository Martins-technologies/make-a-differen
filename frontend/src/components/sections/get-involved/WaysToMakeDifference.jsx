import React from 'react';
import { useTranslation } from 'react-i18next';
import { getInvolvedIcons } from '@/data/getInvolvedIcons';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { updatedImages } from '@/data/updatedImages';

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
      titleKey: 'getInvolvedPage.waysToMakeDifference.cards.time.title',
      descKey: 'getInvolvedPage.waysToMakeDifference.cards.time.description',
      image: '/getinvolved/givetime.webp',
    },
    {
      id: 'resources',
      titleKey: 'getInvolvedPage.waysToMakeDifference.cards.resources.title',
      descKey: 'getInvolvedPage.waysToMakeDifference.cards.resources.description',
      image: updatedImages.getInvolved.giveResources,
    },
    {
      id: 'communities',
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
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                className="flex h-full flex-col space-y-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                {/* Top Info Header */}
                <div className="flex items-start gap-3.5 min-h-[90px]">
                  <img src={getInvolvedIcons[card.id]} alt="" className="h-12 w-12 shrink-0" aria-hidden />
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-bold text-primary">
                      {t(card.titleKey)}
                    </h3>
                    <p className="text-sm text-primary/80 leading-relaxed">
                      {t(card.descKey)}
                    </p>
                  </div>
                </div>

                {/* Bottom Image Container — fixed height, full image visible */}
                <div className="mt-auto flex h-52 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 md:h-56">
                  <img
                    src={card.image}
                    alt={t(card.titleKey)}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
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
