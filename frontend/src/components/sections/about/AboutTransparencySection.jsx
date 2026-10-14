import { useTranslation } from 'react-i18next';
import { SiteIcon } from '@/components/icons/siteIcons';
import { Container } from '@/components/ui/Container';

const CARDS = [
  {
    id: 'reports',
    icon: 'documentChart',
    panel: 'bg-tint-mint',
    iconWrap: 'bg-secondary-50 text-secondary',
  },
  {
    id: 'registration',
    icon: 'documentLines',
    panel: 'bg-tint-blush',
    iconWrap: 'bg-accent-50 text-accent',
  },
];

export function AboutTransparencySection() {
  const { t } = useTranslation();

  return (
    <section
      id="transparency"
      className="scroll-mt-32 border-t border-border bg-bg py-14 md:py-16"
      aria-labelledby="about-transparency-title"
    >
      <Container>
        <h2 id="about-transparency-title" className="sr-only">
          {t('about.transparencyLabel')}
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {CARDS.map((card) => (
            <article key={card.id} className={`rounded-2xl p-6 sm:p-8 ${card.panel}`}>
              <div className="flex gap-4 sm:gap-5">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${card.iconWrap}`}>
                  <SiteIcon name={card.icon} className="h-7 w-7" aria-hidden />
                </span>
                <div className="min-w-0 space-y-3">
                  <h3 className="font-heading text-primary">{t(`about.${card.id}.title`)}</h3>
                  <p className="text-body text-primary/80">{t(`about.${card.id}.description`)}</p>
                  <p className="text-small font-semibold text-primary/70">{t(`about.${card.id}.note`)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
