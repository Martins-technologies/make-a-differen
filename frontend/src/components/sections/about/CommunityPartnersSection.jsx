import { useState } from 'react';
import { Mountain } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { partnerPlaceholders } from '@/data/about';

function PartnerSlot({ src, label }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className="flex aspect-[5/4] items-center justify-center rounded-2xl bg-surface-alt text-primary-200"
        role="img"
        aria-label={label}
      >
        <Mountain className="h-10 w-10" aria-hidden />
      </div>
    );
  }

  return (
    <div className="flex aspect-[5/4] items-center justify-center overflow-hidden rounded-2xl bg-surface-alt p-4">
      <img
        src={src}
        alt={label}
        className="max-h-16 w-auto max-w-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function CommunityPartnersSection() {
  const { t } = useTranslation();
  const label = t('about.partners.logoPlaceholder');

  return (
    <section id="partners" className="scroll-mt-32 bg-bg py-14 md:py-16 lg:py-20" aria-labelledby="about-partners-title">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="max-w-xl space-y-4 lg:col-span-5">
          <h2 id="about-partners-title">{t('about.partners.title')}</h2>
          <p className="text-body-lg text-primary/80">{t('about.partners.description')}</p>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-7">
          {partnerPlaceholders.map((partner) => (
            <li key={partner.id}>
              <PartnerSlot src={partner.src} label={label} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
