import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import {
  employmentSupportPreview,
  requestSupportPreview,
} from '@/data/home';
import { HomeIcon } from './homeIcons';
import { HomeImageIcon } from './HomeImageIcon';

function SupportColumn({ title, description, items, moreLink, moreLabelKey }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between space-y-5">
      <div className="space-y-2">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-primary tracking-tight">
          {title}
        </h2>
        <p className="text-text/80 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <li key={item.titleKey} className="h-full">
            <Link
              to={item.to}
              className="group flex h-full min-h-[145px] flex-col justify-between rounded-2xl bg-white border border-border/75 p-5 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
            >
              <div className="flex items-start gap-3.5 mb-2.5">
                <HomeImageIcon src={item.icon} className="h-11 w-11" />
                <h3 className="font-bold text-primary text-[0.95rem] sm:text-[1rem] leading-snug pt-0.5">
                  {t(item.titleKey)}
                </h3>
              </div>

              <div className="flex items-end justify-between gap-2 mt-auto pt-2">
                <p className="text-xs text-text/75 leading-relaxed flex-1">
                  {t(item.descriptionKey)}
                </p>
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF1F0] text-[#FF5A50] group-hover:bg-[#FF5A50] group-hover:text-white transition-colors shrink-0 mb-0.5"
                  aria-hidden="true"
                >
                  <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-end pt-1">
        <Link
          to={moreLink}
          className="group inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-700 transition-colors text-sm underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          <span>{t(moreLabelKey)}</span>
          <HomeIcon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

export function SupportServicesSection() {
  const { t } = useTranslation();

  return (
    <Section className="bg-[#F8F6F0] py-12 md:py-16 lg:py-20">
      <Container>
        <h2 className="sr-only">{t('home.supportServices.srTitle')}</h2>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <SupportColumn
            title={t('home.requestSupport.title')}
            description={t('home.requestSupport.subtitle')}
            items={requestSupportPreview}
            moreLink="/request-help"
            moreLabelKey="home.requestSupport.viewMore"
          />
          <SupportColumn
            title={t('home.employmentSupport.title')}
            description={t('home.employmentSupport.subtitle')}
            items={employmentSupportPreview}
            moreLink="/employment"
            moreLabelKey="home.employmentSupport.viewMore"
          />
        </div>
      </Container>
    </Section>
  );
}
