import { Building2, Cog, FileText, MessagesSquare, Target, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { MediaImage } from '@/components/ui/MediaImage';
import { employmentServices } from '@/data/employment';
import { cn } from '@/utils/cn';

const ICONS = {
  resume: FileText,
  interview: Users,
  workshops: Target,
  communication: MessagesSquare,
  skills: Cog,
  directory: Building2,
};

const TONES = {
  coral: 'bg-accent text-accent-contrast',
  teal: 'bg-secondary-500 text-secondary-contrast',
};

export function EmploymentServices() {
  const { t } = useTranslation();

  return (
    <section className="pb-8 pt-6 sm:pb-10 sm:pt-8 lg:pb-12" aria-labelledby="employment-services-title">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-secondary">
            {t('employment.services.eyebrow')}
          </p>
          <h2
            id="employment-services-title"
            className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.65rem]"
          >
            {t('employment.services.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
            {t('employment.services.description')}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {employmentServices.map((service) => {
            const Icon = ICONS[service.icon];

            return (
              <li key={service.key} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-md">
                  <MediaImage
                    src={service.image}
                    alt={t(`employment.services.items.${service.key}.imageAlt`)}
                    placeholderLabel={t(`employment.services.items.${service.key}.imagePlaceholder`)}
                    placeholderVariant="icon"
                    aspect="16/9"
                    roundedClassName="rounded-none"
                    className="bg-primary-100"
                  />
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          'mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
                          TONES[service.tone],
                        )}
                      >
                        <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={2.25} aria-hidden />
                      </span>
                      <h3 className="font-body text-[1.05rem] font-bold leading-snug text-primary">
                        {t(`employment.services.items.${service.key}.title`)}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {t(`employment.services.items.${service.key}.description`)}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
