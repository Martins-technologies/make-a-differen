import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { donateImages } from '@/data/donateImages';

const CARDS = [
  { id: 'courses', image: donateImages.educationalCourses },
  { id: 'essentials', image: donateImages.essentialSupplies },
  { id: 'employment', image: donateImages.employmentSupport },
  { id: 'family', image: donateImages.familyCommunity },
];

export function YourSupportSection() {
  const { t } = useTranslation();

  return (
    <Section className="bg-surface py-10 md:py-16">
      <Container className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t('donatePage.support.title')}
          </h2>
          <p className="text-body-lg leading-relaxed text-primary/80">{t('donatePage.support.description')}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {CARDS.map((card) => (
            <article key={card.id} className="overflow-hidden rounded-2xl bg-bg">
              <img
                src={card.image}
                alt={t(`donatePage.support.cards.${card.id}.imageAlt`)}
                className="aspect-[4/3] w-full object-cover object-top"
              />
              <div className="space-y-2 px-1 py-4">
                <h3 className="font-heading text-lg font-bold text-primary">
                  {t(`donatePage.support.cards.${card.id}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-primary/75">
                  {t(`donatePage.support.cards.${card.id}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
