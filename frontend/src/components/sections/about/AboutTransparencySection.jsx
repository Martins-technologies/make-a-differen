import { useTranslation } from 'react-i18next';
import { aboutIcons } from '@/data/about';
import { Container } from '@/components/ui/Container';

const CARDS = [
  {
    id: 'reports',
    panel: 'bg-tint-mint',
  },
  {
    id: 'registration',
    panel: 'bg-tint-blush',
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
                <img src={aboutIcons[card.id]} alt="" className="h-14 w-14 shrink-0" aria-hidden />
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
