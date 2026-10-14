import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { donateIcons } from '@/data/donateImages';

const OPTIONS = [
  {
    id: 'oneTime',
    iconWrap: 'bg-accent-50',
  },
  {
    id: 'monthly',
    iconWrap: 'bg-secondary-50',
  },
  {
    id: 'course',
    iconWrap: 'bg-accent-50',
  },
  {
    id: 'family',
    iconWrap: 'bg-secondary-50',
  },
  {
    id: 'supplies',
    iconWrap: 'bg-accent-50',
  },
  {
    id: 'corporate',
    iconWrap: 'bg-secondary-50',
  },
];

export function WaysToGive() {
  const { t } = useTranslation();

  return (
    <Section id="ways-to-give" className="scroll-mt-24 bg-surface py-10 md:py-16">
      <Container className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t('donatePage.ways.title')}
          </h2>
          <p className="text-body-lg leading-relaxed text-primary/80">{t('donatePage.ways.description')}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {OPTIONS.map((option) => (
            <article
              key={option.id}
              className="relative flex h-full flex-col rounded-2xl border border-border/80 bg-surface p-6 shadow-sm"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${option.iconWrap}`}>
                <img src={donateIcons[option.id]} alt="" className="h-8 w-8" aria-hidden />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-primary">
                {t(`donatePage.ways.options.${option.id}.title`)}
              </h3>
              <p className="mt-2 pr-6 text-sm leading-relaxed text-primary/75">
                {t(`donatePage.ways.options.${option.id}.description`)}
              </p>
              <ChevronRight className="absolute bottom-5 right-5 h-5 w-5 text-accent" aria-hidden />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
