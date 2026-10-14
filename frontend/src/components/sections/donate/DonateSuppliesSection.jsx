import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { donateIcons } from '@/data/donateImages';

const CATEGORIES = ['food', 'clothing', 'hygiene', 'school', 'baby'];

export function DonateSuppliesSection() {
  const { t } = useTranslation();

  return (
    <Section id="donate-supplies" className="scroll-mt-24 py-10 md:py-16">
      <Container className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {t('donatePage.supplies.title')}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-primary/80 sm:text-xl">
            {t('donatePage.supplies.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CATEGORIES.map((id) => (
            <article key={id} className="flex flex-col items-center rounded-2xl bg-[#F7F4EE] px-4 py-7 text-center">
              <img src={donateIcons[id]} alt="" className="mb-5 h-14 w-14" aria-hidden />
              <h3 className="font-heading text-base font-bold text-primary">
                {t(`donatePage.supplies.categories.${id}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/70">
                {t(`donatePage.supplies.categories.${id}.description`)}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

