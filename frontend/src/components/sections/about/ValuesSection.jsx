import { BookOpen, Handshake, Heart, Scale, ShieldCheck, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { aboutValues } from '@/data/about';

const ICONS = {
  users: Users,
  heart: Heart,
  shield: ShieldCheck,
  book: BookOpen,
  scale: Scale,
  handshake: Handshake,
};

export function ValuesSection() {
  const { t } = useTranslation();

  return (
    <section id="values" className="scroll-mt-32 bg-bg py-14 md:py-16 lg:py-20" aria-labelledby="about-values-title">
      <Container>
        <div className="max-w-3xl space-y-3">
          <h2 id="about-values-title">{t('about.values.title')}</h2>
          <p className="text-body-lg text-primary/80">{t('about.values.description')}</p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {aboutValues.map((value) => {
            const Icon = ICONS[value.icon];
            return (
              <li key={value.key}>
                <div className={`flex h-full min-h-36 flex-col items-center justify-center gap-4 rounded-2xl px-3 py-6 text-center ${value.tile}`}>
                  <Icon className={`h-10 w-10 ${value.iconClass}`} strokeWidth={1.5} aria-hidden />
                  <span className="text-small font-semibold text-primary">{t(`about.values.items.${value.key}`)}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
