import { User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { leadershipPlaceholders } from '@/data/about';

export function LeadershipSection() {
  const { t } = useTranslation();

  return (
    <section id="leadership" className="scroll-mt-32 bg-bg py-14 md:py-16 lg:py-20" aria-labelledby="about-leadership-title">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="max-w-xl space-y-4 lg:col-span-5">
          <h2 id="about-leadership-title">{t('about.leadership.title')}</h2>
          <p className="text-body-lg text-primary/80">{t('about.leadership.description')}</p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-7">
          {leadershipPlaceholders.map((leader) => (
            <li key={leader.id} className={`flex flex-col items-center rounded-2xl px-4 py-8 ${leader.tile}`}>
              <span className={`mb-6 flex h-24 w-24 items-center justify-center rounded-full ${leader.bubble}`}>
                <User className="h-12 w-12" aria-hidden />
              </span>
              <span className="h-2.5 w-4/5 rounded-full bg-primary-100" aria-hidden="true" />
              <span className="mt-3 h-2.5 w-3/5 rounded-full bg-primary-100/70" aria-hidden="true" />
              <p className="sr-only">{t('about.leadership.profilePlaceholder')}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
