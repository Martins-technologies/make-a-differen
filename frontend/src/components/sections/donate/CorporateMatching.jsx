import { SiteIcon } from '@/components/icons/siteIcons';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { donateImages } from '@/data/donateImages';

export function CorporateMatching() {
  const { t } = useTranslation();

  return (
    <Section id="corporate-matching" className="scroll-mt-24 py-10 md:py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="overflow-hidden rounded-3xl bg-surface-alt shadow-sm">
          <img
            src={donateImages.corporateMatching}
            alt={t('donatePage.corporate.imageAlt')}
            className="aspect-[4/3] w-full object-cover object-center"
          />
        </div>

        <div className="space-y-5">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t('donatePage.corporate.title')}
          </h2>
          <p className="text-body-lg leading-relaxed text-primary/80">{t('donatePage.corporate.description')}</p>
          <div className="flex gap-4 rounded-2xl border border-secondary-100 bg-secondary-50 p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-secondary">
              <SiteIcon name="gift" className="h-5 w-5" aria-hidden />
            </div>
            <p className="text-sm leading-relaxed text-primary/85">{t('donatePage.corporate.note')}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
