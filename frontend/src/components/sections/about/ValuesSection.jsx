import { BookOpen, Handshake, Heart, Scale, Shield, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { aboutValues } from '@/data/about';

const ICONS = {
  users: Users,
  heart: Heart,
  shield: Shield,
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

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {aboutValues.map((value) => {
            const Icon = ICONS[value.icon];
            return (
              <li key={value.key}>
                <div className={`flex h-full flex-col items-center justify-center gap-4 rounded-2xl px-3 py-6 text-center ${value.tile}`}>
                  <span className={`flex h-14 w-14 items-center justify-center rounded-full ${value.bubble}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
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
