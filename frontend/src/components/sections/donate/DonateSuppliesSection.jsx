import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MergedMedia } from '@/components/ui/MergedMedia';
import { donateImages } from '@/data/donateImages';

const CATEGORIES = [
  { id: 'food', icon: FoodIcon, color: 'text-accent' },
  { id: 'clothing', icon: ShirtIcon, color: 'text-secondary' },
  { id: 'hygiene', icon: HygieneIcon, color: 'text-secondary' },
  { id: 'school', icon: BackpackIcon, color: 'text-secondary' },
  { id: 'baby', icon: BottleIcon, color: 'text-accent' },
];

export function DonateSuppliesSection() {
  const { t } = useTranslation();

  return (
    <Section id="donate-supplies" className="relative scroll-mt-24 overflow-hidden py-10 md:py-16">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] lg:block">
        <MergedMedia
          src={donateImages.supplies}
          alt={t('donatePage.supplies.imageAlt')}
          placeholderLabel={t('donatePage.supplies.imageAlt')}
          fade={false}
          priority
          imgClassName="object-right"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[34%] bg-gradient-to-r from-bg from-0% via-bg via-[18%] to-transparent to-[58%] lg:block"
        aria-hidden="true"
      />

      <Container className="relative z-10 space-y-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {t('donatePage.supplies.title')}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-primary/80 sm:text-xl">
            {t('donatePage.supplies.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:pr-16">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.id}
                className="flex flex-col items-center rounded-2xl bg-[#F7F4EE] px-4 py-7 text-center"
              >
                <Icon className={`mb-5 h-14 w-14 ${category.color}`} />
                <h3 className="font-heading text-base font-bold text-primary">
                  {t(`donatePage.supplies.categories.${category.id}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/70">
                  {t(`donatePage.supplies.categories.${category.id}.description`)}
                </p>
              </article>
            );
          })}
        </div>

        <div className="relative min-h-64 overflow-hidden rounded-2xl lg:hidden">
          <MergedMedia
            src={donateImages.supplies}
            alt={t('donatePage.supplies.imageAlt')}
            placeholderLabel={t('donatePage.supplies.imageAlt')}
            edge="top"
            fade={false}
            imgClassName="object-[88%_center]"
          />
        </div>
      </Container>
    </Section>
  );
}

function FoodIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden>
      <rect x="15" y="8" width="18" height="5" rx="1.5" />
      <path d="M16.5 15h15c.8 0 1.6.8 1.8 2.4.7 5.2 1 10 .5 14.2-.4 3.6-2.6 6.4-9.8 6.4s-9.4-2.8-9.8-6.4c-.5-4.2-.2-9 .5-14.2.2-1.6 1-2.4 1.8-2.4z" />
      <path d="M24 22.5 26.4 24.6 24 26.7 21.6 24.6 24 22.5z" fill="white" />
    </svg>
  );
}

function ShirtIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden>
      <path d="M18.2 8.5 24 13l5.8-4.5 8.4 6.2-4.6 4.2-2.1-1.6V39H16.5V17.3l-2.1 1.6-4.6-4.2 8.4-6.2z" />
    </svg>
  );
}

function HygieneIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden>
      <rect x="21" y="6" width="4" height="6" rx="1" />
      <path d="M17 12h12a1.5 1.5 0 0 1 0 3H17a1.5 1.5 0 0 1 0-3z" />
      <path d="M18.5 17h11l1.6 4.2v14.3A4.5 4.5 0 0 1 26.6 40h-5.2a4.5 4.5 0 0 1-4.5-4.5V21.2L18.5 17z" />
      <rect x="21" y="23" width="6" height="10" rx="1" fill="white" opacity="0.85" />
    </svg>
  );
}

function BackpackIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden>
      <path d="M18 15.5V14a6 6 0 0 1 12 0v1.5h3.2A3.8 3.8 0 0 1 37 19.3v15.2A4.5 4.5 0 0 1 32.5 39h-17A4.5 4.5 0 0 1 11 34.5V19.3a3.8 3.8 0 0 1 3.8-3.8H18z" />
      <path d="M20 15.5h8V14a4 4 0 0 0-8 0v1.5z" fill="white" />
      <path d="M16.5 22h15v2.2h-15z" fill="white" opacity="0.9" />
      <path d="M22.2 24.2h3.6V34h-3.6z" fill="white" opacity="0.9" />
    </svg>
  );
}

function BottleIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden>
      <path d="M20 6h8v4.2a2.2 2.2 0 0 1-2.2 2.2h-3.6A2.2 2.2 0 0 1 20 10.2V6z" />
      <rect x="17.5" y="12.5" width="13" height="3.2" rx="1" />
      <path d="M18.2 17.5h11.6l1.2 3.4v15.2A4.4 4.4 0 0 1 26.6 40.5h-5.2a4.4 4.4 0 0 1-4.4-4.4V20.9l1.2-3.4z" />
      <path d="M21 24.5h8M21 28.5h8M21 32.5h6" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
