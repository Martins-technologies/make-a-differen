import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  Package,
  Landmark,
  ChevronRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MergedMedia } from '@/components/ui/MergedMedia';

export function WhoWePartnerWith() {
  const { t } = useTranslation();

  const items = [
    {
      id: 'community',
      icon: Users,
      iconBg: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0F766E]',
      titleKey: 'partnerPage.whoWePartnerWith.items.community.title',
      descKey: 'partnerPage.whoWePartnerWith.items.community.description',
      image: '/images/partner-community-organizations.jpg',
      placeholder: 'Photo placeholder — Community Organizations image will be added here',
    },
    {
      id: 'employers',
      icon: Briefcase,
      iconBg: 'bg-[#F3F3FF]',
      iconColor: 'text-[#3730A3]',
      titleKey: 'partnerPage.whoWePartnerWith.items.employers.title',
      descKey: 'partnerPage.whoWePartnerWith.items.employers.description',
      image: '/images/partner-employers.jpg',
      placeholder: 'Photo placeholder — Employers image will be added here',
    },
    {
      id: 'schools',
      icon: GraduationCap,
      iconBg: 'bg-[#FFF1F1]',
      iconColor: 'text-[#EF4444]',
      titleKey: 'partnerPage.whoWePartnerWith.items.schools.title',
      descKey: 'partnerPage.whoWePartnerWith.items.schools.description',
      image: '/images/partner-schools.jpg',
      placeholder: 'Photo placeholder — Schools image will be added here',
    },
    {
      id: 'healthcare',
      icon: Heart,
      iconBg: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0F766E]',
      titleKey: 'partnerPage.whoWePartnerWith.items.healthcare.title',
      descKey: 'partnerPage.whoWePartnerWith.items.healthcare.description',
      image: '/images/partner-healthcare-providers.jpg',
      placeholder: 'Photo placeholder — Healthcare Providers image will be added here',
    },
    {
      id: 'retailers',
      icon: Package,
      iconBg: 'bg-[#F3F3FF]',
      iconColor: 'text-[#4F46E5]',
      titleKey: 'partnerPage.whoWePartnerWith.items.retailers.title',
      descKey: 'partnerPage.whoWePartnerWith.items.retailers.description',
      image: '/images/partner-retailers-suppliers.jpg',
      placeholder: 'Photo placeholder — Retailers and Suppliers image will be added here',
    },
    {
      id: 'government',
      icon: Landmark,
      iconBg: 'bg-[#FFF1F1]',
      iconColor: 'text-[#EF4444]',
      titleKey: 'partnerPage.whoWePartnerWith.items.government.title',
      descKey: 'partnerPage.whoWePartnerWith.items.government.description',
      image: '/images/partner-government-funding.jpg',
      placeholder: 'Photo placeholder — Government and Funding Partners image will be added here',
    },
  ];

  return (
    <Section className="py-10 md:py-16 bg-[#F8FAFC]">
      <Container className="space-y-8 max-w-7xl">
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            {t('partnerPage.whoWePartnerWith.title')}
          </h2>
          <p className="text-body-lg text-primary/80 max-w-4xl leading-relaxed">
            {t('partnerPage.whoWePartnerWith.description')}
          </p>
        </div>

        {/* 6 Partner Type Cards (2 Columns Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => {
            const IconComp = item.icon;

            return (
              <div
                key={item.id}
                className="flex flex-col rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
              >
                {/* Top Image Container with Fallback Placeholder */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <MergedMedia
                    src={item.image}
                    alt={t(item.titleKey)}
                    placeholderLabel={item.placeholder}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Card Content Footer */}
                <div className="flex items-start justify-between gap-4 p-6 sm:p-7 bg-[#FFFDF9]/60 flex-1">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}>
                      <IconComp className={`h-7 w-7 ${item.iconColor}`} />
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <h3 className="font-heading text-xl font-bold text-primary">
                        {t(item.titleKey)}
                      </h3>
                      <p className="text-sm text-primary/80 leading-relaxed">
                        {t(item.descKey)}
                      </p>
                    </div>
                  </div>

                  {/* Circular Chevron Link */}
                  <Link
                    to="/contact"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-200/80 bg-red-50/50 text-accent transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-white mt-1"
                    aria-label={`Get in touch regarding ${t(item.titleKey)}`}
                  >
                    <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
