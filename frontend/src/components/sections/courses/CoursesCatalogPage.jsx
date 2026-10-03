import { useEffect, useId, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { cn } from '@/utils/cn';
import { courseCatalog } from '@/data/coursesCatalog';
import { CourseIcon } from './courseIcons';
import { CourseDetailPanel } from './CourseDetailPanel';

export function CoursesCatalogPage() {
  const { t } = useTranslation();
  const panelRef = useRef(null);
  const skipInitialScroll = useRef(true);
  const baseId = useId();
  const [openSlug, setOpenSlug] = useState(courseCatalog[0].slug);

  const openCourse = courseCatalog.find((course) => course.slug === openSlug) ?? null;

  useEffect(() => {
    if (skipInitialScroll.current) {
      skipInitialScroll.current = false;
      return;
    }

    if (!openSlug || !panelRef.current) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    panelRef.current.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
    panelRef.current.focus({ preventScroll: true });
  }, [openSlug]);

  function toggleCourse(slug) {
    setOpenSlug((current) => (current === slug ? null : slug));
  }

  return (
    <>
      <Helmet>
        <title>{t('coursesPage.metaTitle')}</title>
        <meta name="description" content={t('coursesPage.metaDescription')} />
      </Helmet>

      <section className="bg-bg py-10 md:py-14">
        <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-small font-semibold uppercase tracking-[0.14em] text-secondary">
              {t('coursesPage.eyebrow')}
            </p>
            <h1 className="mt-3 font-heading text-5xl font-bold text-primary sm:text-6xl">
              {t('coursesPage.title')}
            </h1>
            <p className="mt-4 max-w-xl text-body text-muted sm:text-body-lg">{t('coursesPage.intro')}</p>
          </div>
          <ImagePlaceholder
            label={t('coursesPage.heroImageAlt')}
            aspect="16/10"
            className="rounded-2xl shadow-md"
          />
        </Container>
      </section>

      <section id="explore-courses" className="scroll-mt-28 bg-bg pb-16 md:pb-24" aria-labelledby="explore-courses-title">
        <Container>
          <h2 id="explore-courses-title" className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            {t('coursesPage.exploreTitle')}
          </h2>
          <p className="mt-2 max-w-3xl text-small text-muted sm:text-body">{t('coursesPage.exploreIntro')}</p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {courseCatalog.map((course) => {
              const isOpen = openSlug === course.slug;
              const titleId = `${baseId}-${course.slug}-title`;

              return (
                <li key={course.slug} className="h-full">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? 'course-detail-panel' : undefined}
                    onClick={() => toggleCourse(course.slug)}
                    className={cn(
                      'flex h-full w-full flex-col rounded-2xl border-2 bg-surface p-3 text-left shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
                      isOpen ? 'border-primary' : 'border-border hover:border-primary/40',
                    )}
                  >
                    <div className="relative">
                      <ImagePlaceholder
                        label={t('coursesPage.cardImageAlt')}
                        aspect="16/10"
                        className="rounded-xl"
                      />
                      <span
                        className={cn(
                          'absolute -bottom-5 left-3 flex h-11 w-11 items-center justify-center rounded-full border border-surface shadow-sm',
                          course.chipClass,
                        )}
                      >
                        <CourseIcon name={course.icon} className="h-5 w-5" />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col px-1 pb-1 pt-8">
                      <h3 id={titleId} className="font-heading text-lg font-bold leading-snug text-primary">
                        {t(`coursesPage.items.${course.key}.title`)}
                      </h3>
                      <p className="mt-2 flex-1 text-small leading-relaxed text-muted">
                        {t(`coursesPage.items.${course.key}.summary`)}
                      </p>
                      <div className="mt-4 flex items-center justify-between gap-2">
                        <span className="text-small font-semibold text-primary">
                          {t('coursesPage.viewDetails')}
                        </span>
                        <span
                          className={cn(
                            'flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
                            course.chipClass,
                          )}
                          aria-hidden
                        >
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          {openCourse ? (
            <div className="mt-6">
              <CourseDetailPanel
                course={openCourse}
                panelRef={panelRef}
                onClose={() => setOpenSlug(null)}
              />
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
