import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MergedMedia } from '@/components/ui/MergedMedia';

const COURSES_HERO_IMAGE = '/new/03_Courses_Hero.webp';

export function CoursesHero() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden py-8 md:py-12 lg:min-h-[32rem] lg:py-16">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <MergedMedia
          src={COURSES_HERO_IMAGE}
          alt={t('coursesPage.heroImageAlt')}
          placeholderLabel={t('coursesPage.heroImageAlt')}
          priority
        />
      </div>

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 sm:space-y-7 lg:col-span-7 lg:max-w-2xl">
          <div className="space-y-4">
            <h1 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem]">
              {t('coursesPage.title')}
            </h1>
            <p className="text-body-lg max-w-xl leading-relaxed text-primary/80">{t('coursesPage.intro')}</p>
          </div>
        </div>

        <div className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-5 lg:hidden">
          <MergedMedia
            src={COURSES_HERO_IMAGE}
            alt={t('coursesPage.heroImageAlt')}
            placeholderLabel={t('coursesPage.heroImageAlt')}
            edge="top"
          />
        </div>
      </Container>
    </Section>
  );
}
