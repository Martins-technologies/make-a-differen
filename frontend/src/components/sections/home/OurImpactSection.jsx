import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PAGE_GUTTER, PAGE_GUTTER_LEFT } from '@/components/layout/pageGutter';

const IMPACT_BANNER = '/impactbanner.png';

export function OurImpactSection() {
  const { t } = useTranslation();

  return (
    <Section
      className="relative overflow-hidden bg-surface-impact py-0 lg:py-0"
      style={{
        marginLeft: `calc(${PAGE_GUTTER_LEFT} * -1)`,
        marginRight: `calc(${PAGE_GUTTER} * -1)`,
        width: `calc(100% + ${PAGE_GUTTER_LEFT} + ${PAGE_GUTTER})`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 hidden bg-cover bg-left bg-no-repeat lg:block"
        style={{ backgroundImage: `url('${IMPACT_BANNER}')` }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 flex items-center lg:min-h-[33.333vw]"
        style={{ paddingLeft: PAGE_GUTTER_LEFT, paddingRight: PAGE_GUTTER }}
      >
        <Container>
          <div className="w-full max-w-xl py-12 sm:py-14 lg:py-10">
            <span className="block h-1 w-12 rounded-pill bg-accent" aria-hidden="true" />
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-primary lg:text-[2rem] xl:text-4xl 2xl:text-5xl">
              {t('home.impact.title')}
            </h2>
            <p className="mt-4 text-lg leading-snug text-muted lg:mt-3 lg:text-base xl:text-lg">{t('home.impact.lead')}</p>
            <p className="mt-4 text-base leading-relaxed text-muted lg:mt-3 lg:text-sm xl:text-[0.95rem] xl:leading-relaxed">
              {t('home.impact.body')}
            </p>
            <p className="mt-5 text-base font-bold leading-snug text-primary lg:mt-3 lg:text-sm xl:text-base">
              {t('home.impact.closing')}
            </p>
          </div>
        </Container>
      </div>

      <img
        src={IMPACT_BANNER}
        alt={t('home.impact.imageAlt')}
        className="h-56 w-full object-cover object-[72%_center] sm:h-72 lg:hidden"
      />
    </Section>
  );
}
