import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MediaImage } from '@/components/ui/MediaImage';
import { featuredCourses } from '@/data/home';
import { HomeIcon } from './homeIcons';

export function FeaturedCoursesSection() {
  const { t } = useTranslation();

  return (
    <Section className="py-10 md:py-14 lg:py-16">
      <Container>
        <div className="mb-8 md:mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              {t('home.featuredCourses.title')}
            </h2>
            <p className="text-body-lg text-text/80 whitespace-normal xl:whitespace-nowrap">
              {t('home.featuredCourses.description')}
            </p>
          </div>
          <Link
            to="/courses"
            className="group inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-700 transition-colors text-sm sm:text-base shrink-0 underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            <span>{t('home.featuredCourses.viewAll')}</span>
            <HomeIcon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 lg:gap-6">
          {featuredCourses.map((course) => (
            <li key={course.slug} className="h-full">
              <Link
                to="/courses"
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-border/70 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <MediaImage
                  src={course.image}
                  alt={t(course.imageAltKey)}
                  aspect="16/9"
                  roundedClassName="rounded-t-2xl"
                  className="w-full rounded-b-none"
                  imgClassName="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-4.5 gap-2">
                  <h3 className="font-bold text-primary text-[0.92rem] sm:text-[0.95rem] lg:text-[0.9rem] xl:text-[0.95rem] 2xl:text-[1rem] leading-snug whitespace-nowrap overflow-hidden text-ellipsis">
                    {t(course.titleKey)}
                  </h3>
                  <div className="flex items-end justify-between gap-2 mt-auto pt-1">
                    <p className="text-xs sm:text-[0.8125rem] text-text/75 leading-relaxed flex-1 line-clamp-2">
                      {t(course.descriptionKey)}
                    </p>
                    <div
                      className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#FFF1F0] text-[#FF5A50] group-hover:bg-[#FF5A50] group-hover:text-white transition-colors shrink-0 mb-0.5"
                      aria-hidden="true"
                    >
                      <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
