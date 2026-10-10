import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { LeafCluster } from '@/components/sections/about/LeafCluster';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { programImages } from '@/data/programs';
import { cn } from '@/utils/cn';

const HERO_LINKS = [
  {
    to: '/courses',
    labelKey: 'nav.courses',
    icon: GraduationCap,
    className: 'bg-[#E7F6F3] hover:bg-[#D7EFEA]',
    iconClassName: 'text-[#1F8F78]',
  },
  {
    to: '/employment',
    labelKey: 'nav.employment',
    icon: Briefcase,
    className: 'bg-[#FDECEC] hover:bg-[#F8DEDE]',
    iconClassName: 'text-[#E36A58]',
  },
  {
    to: '/request-help',
    labelKey: 'nav.requestHelp',
    icon: Heart,
    className: 'bg-[#F3EEF8] hover:bg-[#E8DFF2]',
    iconClassName: 'text-[#7B62B3]',
  },
];

export function ProgramsHero() {
  const { t } = useTranslation();

  return (
    <Section className="relative overflow-hidden py-8 md:py-12 lg:min-h-[32rem] lg:py-16" aria-labelledby="programs-hero-title">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <MergedMedia
          src={programImages.hero}
          alt={t('programsPage.hero.imageAlt')}
          placeholderLabel={t('programsPage.hero.imagePlaceholder')}
          priority
        />
      </div>

      <LeafCluster className="pointer-events-none absolute -bottom-10 left-0 hidden h-40 w-44 text-[#A9D3A0] lg:block" />
      <LeafCluster className="pointer-events-none absolute bottom-6 right-[46%] hidden h-24 w-28 -scale-x-100 text-[#C5E3B4] xl:block" />

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 space-y-5 lg:col-span-6 lg:max-w-[34rem] xl:max-w-[38rem]">
            <span className="block h-1.5 w-14 rounded-pill bg-accent" aria-hidden="true" />
            <h1
              id="programs-hero-title"
              className="font-heading text-[2.6rem] font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-[3.35rem] lg:leading-[1.02]"
            >
              <span className="block">{t('programsPage.hero.titleLine1')}</span>
              <span className="block">{t('programsPage.hero.titleLine2')}</span>
            </h1>
            <p className="max-w-full text-[1.05rem] leading-relaxed text-primary/75 sm:text-lg">
              {t('programsPage.hero.description')}
            </p>

            <nav className="flex max-w-full flex-col items-start gap-2.5 pt-1 sm:flex-row sm:flex-wrap" aria-label={t('programsPage.hero.title')}>
              {HERO_LINKS.map(({ to, labelKey, icon: Icon, className, iconClassName }) => (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    'inline-flex w-fit max-w-full items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-primary shadow-sm transition-colors',
                    className,
                  )}
                >
                  <Icon className={cn('h-4 w-4 shrink-0', iconClassName)} strokeWidth={2} aria-hidden />
                  <span className="whitespace-nowrap">{t(labelKey)}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                </Link>
              ))}
            </nav>
          </div>

        <div className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-6 lg:hidden">
          <MergedMedia
            src={programImages.hero}
            alt={t('programsPage.hero.imageAlt')}
            placeholderLabel={t('programsPage.hero.imagePlaceholder')}
            edge="top"
          />
        </div>
      </Container>
    </Section>
  );
}
