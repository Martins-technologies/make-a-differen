import { useEffect, useId, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { MediaImage } from '@/components/ui/MediaImage';
import { cn } from '@/utils/cn';
import { courseCatalog, courseIcons } from '@/data/coursesCatalog';
import { CourseDetailPanel } from './CourseDetailPanel';
import { CoursesHero } from './CoursesHero';

export function CoursesCatalogPage() {
  const { t } = useTranslation();
  const panelRef = useRef(null);
  const scrollRequest = useRef(0);
  const baseId = useId();
  const [openSlug, setOpenSlug] = useState(courseCatalog[0].slug);

  const openCourse = courseCatalog.find((course) => course.slug === openSlug) ?? null;

  useEffect(() => {
    if (scrollRequest.current === 0 || !openSlug || !panelRef.current) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    panelRef.current.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
    panelRef.current.focus({ preventScroll: true });
  }, [openSlug]);

  function toggleCourse(slug) {
    scrollRequest.current += 1;
    setOpenSlug((current) => (current === slug ? null : slug));
  }

  return (
    <>
      <Helmet>
        <title>{t('coursesPage.metaTitle')}</title>
        <meta name="description" content={t('coursesPage.metaDescription')} />
      </Helmet>

      <CoursesHero />

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
                      <MediaImage
                        src={course.image}
                        alt={t(`coursesPage.items.${course.key}.title`)}
                        placeholderLabel={t('coursesPage.cardImageAlt')}
                        placeholderVariant="label"
                        aspect="4/3"
                        fit={course.imageFit ?? 'cover'}
                        roundedClassName="rounded-xl"
                        className="w-full"
                      />
                      <img
                        src={course.icon}
                        alt=""
                        className="absolute -bottom-5 left-3 h-11 w-11 rounded-full shadow-sm"
                        aria-hidden
                      />
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
                        <img src={courseIcons.viewDetails} alt="" className="h-9 w-9 shrink-0" aria-hidden />
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
