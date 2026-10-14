import { ChevronRight, Laptop } from 'lucide-react';
import { SiteIcon } from '@/components/icons/siteIcons';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { MediaImage } from '@/components/ui/MediaImage';
import { employmentImages } from '@/data/employment';
import { EmploymentCta } from './EmploymentCta';

function CalendarCtaIcon({ className }) {
  return <SiteIcon name="calendar" className={className} aria-hidden />;
}

function FutureMarks() {
  return (
    <svg viewBox="0 0 78 56" className="h-12 w-16 text-accent sm:h-14 sm:w-[4.5rem]" aria-hidden="true">
      <path d="M16 8 L34 48" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M40 8 L58 48" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function EmploymentBands() {
  const { t } = useTranslation();

  return (
    <div className="pb-16 pt-2 sm:pb-20 lg:pb-24">
      <Container className="space-y-5">
        <section
          id="appointment"
          className="scroll-mt-28 overflow-hidden rounded-[1.75rem] bg-primary text-primary-contrast"
          aria-labelledby="employment-appointment-title"
        >
          <div className="grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] lg:gap-10 lg:p-10 xl:p-12">
            <div className="max-w-xl">
              <h2
                id="employment-appointment-title"
                className="font-heading text-[1.85rem] font-bold leading-[1.15] tracking-tight text-primary-contrast sm:text-4xl"
              >
                {t('employment.appointment.title')}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-primary-contrast/90 sm:text-base">
                {t('employment.appointment.description')}
              </p>
              <div className="mt-6">
                <EmploymentCta to="/contact" icon={CalendarCtaIcon}>
                  {t('employment.appointment.action')}
                </EmploymentCta>
              </div>
            </div>
            <MediaImage
              src={employmentImages.appointment}
              alt={t('employment.appointment.imageAlt')}
              placeholderLabel={t('employment.appointment.imagePlaceholder')}
              placeholderVariant="icon"
              aspect="16/10"
              roundedClassName="rounded-2xl"
              className="bg-primary-100"
            />
          </div>
        </section>

        <section
          id="job-opportunities"
          className="scroll-mt-28 overflow-hidden rounded-[1.75rem] bg-tint-cream"
          aria-labelledby="employment-opportunities-title"
        >
          <div className="grid items-center lg:grid-cols-2">
            <MediaImage
              src={employmentImages.opportunities}
              alt={t('employment.opportunities.imageAlt')}
              placeholderLabel={t('employment.opportunities.imagePlaceholder')}
              placeholderVariant="icon"
              aspect="16/10"
              roundedClassName="rounded-none"
              className="bg-primary-100"
            />
            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
              <h2
                id="employment-opportunities-title"
                className="font-heading text-[1.85rem] font-bold leading-tight tracking-tight text-primary sm:text-4xl"
              >
                {t('employment.opportunities.title')}
              </h2>
              <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-muted sm:text-base">
                {t('employment.opportunities.description')}
              </p>
            </div>
          </div>
        </section>

        <section
          id="job-board"
          className="scroll-mt-28 overflow-hidden rounded-[1.75rem] bg-surface-impact"
          aria-labelledby="employment-job-board-title"
        >
          <div className="flex items-center gap-4 px-6 py-6 sm:gap-6 sm:px-8 sm:py-7 lg:px-10">
            <Laptop className="h-11 w-11 shrink-0 text-primary sm:h-12 sm:w-12" strokeWidth={1.5} aria-hidden />
            <div className="flex min-w-0 flex-1 flex-col">
              <h2
                id="employment-job-board-title"
                className="font-heading text-2xl font-bold leading-tight tracking-tight text-primary sm:text-[1.85rem]"
              >
                {t('employment.jobBoard.title')}
              </h2>
              <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted sm:text-[0.98rem]">
                {t('employment.jobBoard.description')}
              </p>
            </div>
            <div className="hidden shrink-0 sm:block">
              <FutureMarks />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
