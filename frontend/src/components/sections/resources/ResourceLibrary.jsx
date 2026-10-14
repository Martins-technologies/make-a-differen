import { Clock, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { resourceIcons, resourceTopics } from '@/data/resources';
import { cn } from '@/utils/cn';

export function ResourceLibrary() {
  const { t } = useTranslation();

  return (
    <section className="bg-bg py-10 md:py-14" aria-labelledby="resource-library-title">
      <Container>
        <div className="max-w-3xl space-y-2">
          <h2
            id="resource-library-title"
            className="font-heading text-3xl font-extrabold text-primary sm:text-4xl"
          >
            {t('resourcesPage.library.title')}
          </h2>
          <p className="text-body-lg text-primary/80">
            {t('resourcesPage.library.description')}
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {resourceTopics.map((topic) => (
            <li key={topic.key} className="h-full">
              <article
                className={cn(
                  'flex h-full min-h-[13.75rem] flex-col rounded-3xl px-6 py-6 sm:px-7 sm:py-7',
                  topic.cardBg,
                )}
              >
                <img src={resourceIcons[topic.key]} alt="" className="mb-4 h-12 w-12" aria-hidden />
                <h3 className="font-heading text-xl font-bold leading-snug tracking-tight text-primary">
                  {t(`resourcesPage.topics.${topic.key}.title`)}
                </h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-primary/70">
                  {t(`resourcesPage.topics.${topic.key}.description`)}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary/45">
                  <Clock className="h-4 w-4" strokeWidth={2} aria-hidden />
                  <span>{t('resourcesPage.library.comingSoon')}</span>
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-start gap-4 rounded-3xl bg-[#F4F7FA] px-5 py-5 sm:items-center sm:px-7 sm:py-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D7EEE9] text-[#2A9B8C]">
            <Info className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </span>
          <p className="text-[0.95rem] leading-relaxed text-primary/70 sm:text-[1.02rem]">
            {t('resourcesPage.library.note')}
          </p>
        </div>
      </Container>
    </section>
  );
}
