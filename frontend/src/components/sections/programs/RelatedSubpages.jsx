import { ChevronRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LeafCluster } from '@/components/sections/about/LeafCluster';
import { HomeIcon } from '@/components/sections/home/homeIcons';
import { Container } from '@/components/ui/Container';
import { relatedSubpages } from '@/data/programs';

const ICONS = {
  cap: 'educationalCap',
  briefcase: 'employmentBriefcase',
};

export function RelatedSubpages() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-bg pb-16 pt-10 md:pb-20 md:pt-14" aria-labelledby="programs-related-title">
      <LeafCluster className="pointer-events-none absolute -bottom-8 -right-4 hidden h-44 w-48 text-[#B7D9A8] lg:block" />

      <Container className="relative z-10">
        <div className="max-w-3xl space-y-2">
          <h2 id="programs-related-title" className="text-primary">
            {t('programsPage.related.title')}
          </h2>
          <p className="text-base leading-relaxed text-primary/75 sm:text-[1.05rem]">
            {t('programsPage.related.description')}
          </p>
        </div>

        <ul className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
          {relatedSubpages.map((page) => {
            return (
              <li key={page.key} className="h-full">
                <Link
                  to={page.to}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-border/80 bg-white px-5 py-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E7F6F2] text-secondary">
                    {page.icon === 'heart' ? (
                      <Heart className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    ) : (
                      <HomeIcon name={ICONS[page.icon]} className="h-8 w-8" />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-body text-[1.02rem] font-bold leading-snug text-primary">
                      {t(`programsPage.related.${page.key}.title`)}
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-primary/70">
                      {t(`programsPage.related.${page.key}.description`)}
                    </span>
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors group-hover:bg-accent-700"
                    aria-hidden
                  >
                    <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
