import { Compass, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';

function PurposeCard({ id, title, body, icon: Icon, className, iconClassName }) {
  return (
    <article id={id} className={`scroll-mt-32 rounded-2xl p-6 sm:p-8 ${className}`}>
      <div className="flex gap-4 sm:gap-5">
        <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${iconClassName}`}>
          <Icon className="h-7 w-7" aria-hidden />
        </span>
        <div className="space-y-3">
          <h3 className="font-heading text-primary">{title}</h3>
          <p className="text-body text-primary/80">{body}</p>
        </div>
      </div>
    </article>
  );
}

export function MissionVisionSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-bg py-4 pb-14 md:pb-16 lg:pb-20" aria-labelledby="about-purpose-title">
      <Container>
        <h2 id="about-purpose-title" className="sr-only">
          {t('about.purposeLabel')}
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <PurposeCard
            id="mission"
            title={t('about.mission.title')}
            body={t('about.mission.description')}
            icon={Compass}
            className="bg-tint-mint"
            iconClassName="bg-secondary-50 text-secondary"
          />
          <PurposeCard
            id="vision"
            title={t('about.vision.title')}
            body={t('about.vision.description')}
            icon={Heart}
            className="bg-tint-blush"
            iconClassName="bg-accent-50 text-accent"
          />
        </div>
      </Container>
    </section>
  );
}
