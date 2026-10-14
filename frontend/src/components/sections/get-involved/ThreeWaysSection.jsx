import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { SiteIcon } from '@/components/icons/siteIcons';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function ThreeWaysSection() {
  const { t } = useTranslation();

  const paths = [
    {
      id: 'volunteer',
      titleKey: 'getInvolvedPage.threeWays.paths.volunteer.title',
      descKey: 'getInvolvedPage.threeWays.paths.volunteer.description',
      bulletsKey: 'getInvolvedPage.threeWays.paths.volunteer.bullets',
      ctaKey: 'getInvolvedPage.threeWays.paths.volunteer.cta',
      link: '/get-involved/volunteer',
      image: '/getinvolved/volunteer.webp',
      icon: 'graduationCap',
      iconBg: 'bg-[#F3F3FF]',
      iconColor: 'text-[#4F46E5]',
      cardBg: 'bg-[#FAF8FF]',
      btnBg: 'bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#3730A3]',
    },
    {
      id: 'donate',
      titleKey: 'getInvolvedPage.threeWays.paths.donate.title',
      descKey: 'getInvolvedPage.threeWays.paths.donate.description',
      bulletsKey: 'getInvolvedPage.threeWays.paths.donate.bullets',
      ctaKey: 'getInvolvedPage.threeWays.paths.donate.cta',
      link: '/get-involved/donate',
      image: '/getinvolved/donate.webp',
      icon: 'heart',
      iconBg: 'bg-[#FFF1F1]',
      iconColor: 'text-[#EF4444]',
      cardBg: 'bg-[#FFF9F9]',
      btnBg: 'bg-[#FEE2E2] hover:bg-[#FECDD3] text-[#B91C1C]',
    },
    {
      id: 'partner',
      titleKey: 'getInvolvedPage.threeWays.paths.partner.title',
      descKey: 'getInvolvedPage.threeWays.paths.partner.description',
      bulletsKey: 'getInvolvedPage.threeWays.paths.partner.bullets',
      ctaKey: 'getInvolvedPage.threeWays.paths.partner.cta',
      link: '/get-involved/partner',
      image: '/getinvolved/partnerwithus.webp',
      icon: 'users',
      iconBg: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0F766E]',
      cardBg: 'bg-[#F4FBFB]',
      btnBg: 'bg-[#E0F2F1] hover:bg-[#CCFBF1] text-[#0F766E]',
    },
  ];

  return (
    <Section id="three-ways" className="py-10 md:py-16 bg-bg scroll-mt-16">
      <Container className="space-y-8 max-w-7xl">
        {/* Section Heading */}
        <div className="space-y-3">
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            {t('getInvolvedPage.threeWays.title')}
          </h2>
          <p className="text-body-lg text-primary/80 max-w-4xl leading-relaxed">
            {t('getInvolvedPage.threeWays.description')}
          </p>
        </div>

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {paths.map((path) => {
            const bullets = t(path.bulletsKey, { returnObjects: true }) || [];

            return (
              <div
                key={path.id}
                className={`flex flex-col rounded-3xl border border-slate-200/80 ${path.cardBg} overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1`}
              >
                {/* Top Card Image */}
                <div className="h-52 w-full overflow-hidden bg-slate-50 flex items-center justify-center">
                  <img
                    src={path.image}
                    alt={t(path.titleKey)}
                    className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Card Header & Content */}
                <div className="flex flex-col flex-1 p-6 sm:p-7 space-y-5">
                  <div className="flex items-center gap-3.5">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${path.iconBg}`}>
                      <SiteIcon name={path.icon} className={`h-6 w-6 ${path.iconColor}`} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary">
                      {t(path.titleKey)}
                    </h3>
                  </div>

                  <p className="text-body text-primary/80 leading-relaxed">
                    {t(path.descKey)}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 pt-1 text-sm font-medium text-primary/85 flex-1">
                    {Array.isArray(bullets) &&
                      bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <span className="h-2 w-2 rounded-full bg-[#0F766E] shrink-0" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                  </ul>

                  {/* Bottom Link Button */}
                  <div className="pt-3">
                    <Link
                      to={path.link}
                      className={`inline-flex items-center justify-center gap-2 w-full rounded-2xl py-3.5 px-4 font-semibold text-sm transition-all ${path.btnBg}`}
                    >
                      <span>{t(path.ctaKey)}</span>
                      <ArrowRight className="h-4 w-4 stroke-[2.5]" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
