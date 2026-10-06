import { Heart, Package, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { MediaImage } from '@/components/ui/MediaImage';
import { programCategories } from '@/data/programs';
import { cn } from '@/utils/cn';

const ICONS = {
  users: Users,
  heart: Heart,
  package: Package,
};

function ProgramPhoto({ src, alt, label }) {
  return (
    <div className="relative h-full min-h-[16.5rem] sm:min-h-[18rem]">
      <MediaImage
        src={src}
        alt={alt}
        placeholderLabel={label}
        placeholderVariant="icon"
        fill
        roundedClassName="absolute inset-0 rounded-[1.35rem]"
        className="h-full w-full"
      />
    </div>
  );
}

export function ProgramCategories() {
  const { t } = useTranslation();

  return (
    <section className="bg-bg pb-4 pt-2 md:pb-6" aria-label={t('programsPage.hero.title')}>
      <Container className="space-y-5 md:space-y-6">
        {programCategories.map((category) => {
          const Icon = ICONS[category.icon];
          const title = t(`programsPage.categories.${category.key}.title`);
          const items = t(`programsPage.categories.${category.key}.items`, { returnObjects: true });
          const imageRight = category.imageSide === 'right';

          return (
            <article
              key={category.key}
              id={category.key}
              className="grid items-stretch gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6"
            >
              <div className={cn('h-full', imageRight && 'lg:order-2')}>
                <ProgramPhoto
                  src={category.image}
                  alt={t(`programsPage.categories.${category.key}.imageAlt`)}
                  label={t('programsPage.imagePlaceholder', { title })}
                />
              </div>

              <div
                className={cn(
                  'flex h-full flex-col justify-center rounded-[1.35rem] px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9',
                  category.panel,
                  imageRight && 'lg:order-1',
                )}
              >
                <span
                  className={cn(
                    'mb-4 flex h-14 w-14 items-center justify-center rounded-full',
                    category.iconWrap,
                  )}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </span>
                <h2 className="font-heading text-[1.65rem] font-bold leading-tight tracking-tight text-primary sm:text-[1.9rem]">
                  {title}
                </h2>
                <p className="mt-2 max-w-xl text-[0.98rem] leading-relaxed text-primary/75 sm:text-base">
                  {t(`programsPage.categories.${category.key}.description`)}
                </p>
                <ul className="mt-4 space-y-2">
                  {(Array.isArray(items) ? items : []).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.95rem] leading-snug text-primary sm:text-base">
                      <span className={cn('mt-[0.45rem] h-2 w-2 shrink-0 rounded-full', category.bullet)} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </Container>
    </section>
  );
}
