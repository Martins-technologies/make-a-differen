import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { resourceIcons, resourceSupportLinks } from '@/data/resources';
import { cn } from '@/utils/cn';

export function LookingForSupport() {
  const { t } = useTranslation();

  return (
    <section className="bg-bg py-10 md:py-14" aria-labelledby="resources-support-title">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.7fr)] lg:gap-10">
          <div className="max-w-md space-y-3">
            <h2
              id="resources-support-title"
              className="font-heading text-3xl font-extrabold leading-tight text-primary sm:text-4xl"
            >
              {t('resourcesPage.support.title')}
            </h2>
            <p className="text-body-lg text-primary/80">
              {t('resourcesPage.support.description')}
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4">
            {resourceSupportLinks.map((card) => (
              <li key={card.key} className="h-full">
                <article className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white px-5 py-6 shadow-sm">
                  <img src={resourceIcons[card.key]} alt="" className="mb-4 h-12 w-12" aria-hidden />
                  <h3 className="font-heading text-[1.15rem] font-bold leading-snug text-primary">
                    {t(`resourcesPage.support.cards.${card.key}.title`)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-primary/65">
                    {t(`resourcesPage.support.cards.${card.key}.description`)}
                  </p>
                  <Link
                    to={card.to}
                    className={cn(
                      'mt-5 inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-full px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
                      card.buttonClass,
                    )}
                  >
                    <span>{t(`resourcesPage.support.cards.${card.key}.cta`)}</span>
                    <ArrowRight className="h-4 w-4 stroke-[2.5]" aria-hidden />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
