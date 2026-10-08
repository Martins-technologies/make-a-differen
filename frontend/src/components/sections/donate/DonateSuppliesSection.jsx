import { Apple, Baby, Backpack, Droplets, Shirt } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { donateImages } from '@/data/donateImages';

const CATEGORIES = [
  { id: 'food', icon: Apple, iconWrap: 'bg-accent-50 text-accent' },
  { id: 'clothing', icon: Shirt, iconWrap: 'bg-secondary-50 text-secondary' },
  { id: 'hygiene', icon: Droplets, iconWrap: 'bg-accent-50 text-accent' },
  { id: 'school', icon: Backpack, iconWrap: 'bg-secondary-50 text-secondary' },
  { id: 'baby', icon: Baby, iconWrap: 'bg-accent-50 text-accent' },
];

export function DonateSuppliesSection() {
  const { t } = useTranslation();

  return (
    <Section id="donate-supplies" className="scroll-mt-24 py-10 md:py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-6">
          <div className="max-w-xl space-y-3">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {t('donatePage.supplies.title')}
            </h2>
            <p className="text-body-lg leading-relaxed text-primary/80">{t('donatePage.supplies.description')}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <article
                  key={category.id}
                  className="flex gap-3 rounded-2xl border border-border/80 bg-surface p-4 shadow-sm"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${category.iconWrap}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-base font-bold text-primary">
                      {t(`donatePage.supplies.categories.${category.id}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-primary/75">
                      {t(`donatePage.supplies.categories.${category.id}.description`)}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-surface-alt shadow-sm">
          <img
            src={donateImages.supplies}
            alt={t('donatePage.supplies.imageAlt')}
            className="aspect-[4/3] h-full w-full object-cover object-top lg:aspect-auto lg:min-h-[32rem]"
          />
        </div>
      </Container>
    </Section>
  );
}
