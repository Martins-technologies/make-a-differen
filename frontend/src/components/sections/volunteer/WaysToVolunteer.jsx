import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  GraduationCap,
  Users,
  Package,
  Calendar,
  FileText,
  Heart,
  Settings,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function WaysToVolunteer() {
  const { t } = useTranslation();

  const items = [
    {
      id: 'teaching',
      icon: GraduationCap,
      iconBg: 'bg-[#F3F3FF]',
      iconColor: 'text-[#4F46E5]',
      cardBg: 'bg-[#FAF8FF]',
      titleKey: 'volunteerPage.waysToVolunteer.items.teaching.title',
      descKey: 'volunteerPage.waysToVolunteer.items.teaching.description',
    },
    {
      id: 'mentorship',
      icon: Users,
      iconBg: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0F766E]',
      cardBg: 'bg-[#F4FBFB]',
      titleKey: 'volunteerPage.waysToVolunteer.items.mentorship.title',
      descKey: 'volunteerPage.waysToVolunteer.items.mentorship.description',
    },
    {
      id: 'supplies',
      icon: Package,
      iconBg: 'bg-[#FFF1F1]',
      iconColor: 'text-[#EF4444]',
      cardBg: 'bg-[#FFF9F9]',
      titleKey: 'volunteerPage.waysToVolunteer.items.supplies.title',
      descKey: 'volunteerPage.waysToVolunteer.items.supplies.description',
    },
    {
      id: 'events',
      icon: Calendar,
      iconBg: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0D9488]',
      cardBg: 'bg-[#F4FBFB]',
      titleKey: 'volunteerPage.waysToVolunteer.items.events.title',
      descKey: 'volunteerPage.waysToVolunteer.items.events.description',
    },
    {
      id: 'admin',
      icon: FileText,
      iconBg: 'bg-[#FDE8E8]',
      iconColor: 'text-[#E54848]',
      cardBg: 'bg-[#FFF9F9]',
      titleKey: 'volunteerPage.waysToVolunteer.items.admin.title',
      descKey: 'volunteerPage.waysToVolunteer.items.admin.description',
    },
    {
      id: 'fundraising',
      icon: Heart,
      iconBg: 'bg-[#F3F3FF]',
      iconColor: 'text-[#6366F1]',
      cardBg: 'bg-[#FAF8FF]',
      titleKey: 'volunteerPage.waysToVolunteer.items.fundraising.title',
      descKey: 'volunteerPage.waysToVolunteer.items.fundraising.description',
    },
    {
      id: 'professional',
      icon: Settings,
      iconBg: 'bg-[#E0F2F1]',
      iconColor: 'text-[#0F766E]',
      cardBg: 'bg-[#F4FBFB]',
      titleKey: 'volunteerPage.waysToVolunteer.items.professional.title',
      descKey: 'volunteerPage.waysToVolunteer.items.professional.description',
    },
  ];

  return (
    <Section className="py-10 md:py-16 bg-[#F8FAFC]">
      <Container className="space-y-8 max-w-7xl">
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            {t('volunteerPage.waysToVolunteer.title')}
          </h2>
          <p className="text-body-lg text-primary/80 max-w-4xl leading-relaxed">
            {t('volunteerPage.waysToVolunteer.description')}
          </p>
        </div>

        {/* 7 Opportunity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const IconComp = item.icon;

            return (
              <div
                key={item.id}
                className={`flex flex-col space-y-4 rounded-3xl border border-slate-200/80 ${item.cardBg} p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1`}
              >
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}>
                  <IconComp className={`h-7 w-7 ${item.iconColor}`} />
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="font-heading text-xl font-bold text-primary">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-sm text-primary/80 leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
