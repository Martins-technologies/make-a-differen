import { useTranslation } from 'react-i18next';
import { SiteIcon } from '@/components/icons/siteIcons';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const CARDS = [
  {
    id: 'email',
    icon: 'mail',
    cardBg: 'bg-[#E7F6F3]',
    iconBg: 'bg-[#D4EFE9]',
    iconColor: 'text-[#0F766E]',
  },
  {
    id: 'phone',
    icon: 'phone',
    cardBg: 'bg-[#FDECEC]',
    iconBg: 'bg-[#FAD9D9]',
    iconColor: 'text-[#E25C5C]',
  },
  {
    id: 'office',
    icon: 'mapPin',
    cardBg: 'bg-[#E8F6F4]',
    iconBg: 'bg-[#D4EFE9]',
    iconColor: 'text-[#0F766E]',
  },
  {
    id: 'hours',
    icon: 'clock',
    cardBg: 'bg-[#EEEAF8]',
    iconBg: 'bg-[#DDD6F3]',
    iconColor: 'text-[#5B4BBE]',
  },
  {
    id: 'accessibility',
    icon: 'accessibility',
    cardBg: 'bg-[#E7F6F0]',
    iconBg: 'bg-[#D2F0E4]',
    iconColor: 'text-[#0D9488]',
  },
  {
    id: 'media',
    icon: 'users',
    cardBg: 'bg-[#FDECEC]',
    iconBg: 'bg-[#FAD9D9]',
    iconColor: 'text-[#E25C5C]',
  },
];

export function GetInTouchSection() {
  const { t } = useTranslation();

  return (
    <Section className="bg-bg py-10 md:py-14">
      <Container className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            {t('contactPage.getInTouch.title')}
          </h2>
          <p className="text-body-lg max-w-3xl text-primary/80">
            {t('contactPage.getInTouch.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {CARDS.map((card) => {
            const email = t(`contactPage.getInTouch.cards.${card.id}.email`, { defaultValue: '' });
            const phone = t(`contactPage.getInTouch.cards.${card.id}.phone`, { defaultValue: '' });
            const hours = t(`contactPage.getInTouch.cards.${card.id}.hours`, { defaultValue: '' });
            const note = t(`contactPage.getInTouch.cards.${card.id}.note`, { defaultValue: '' });
            const extra = t(`contactPage.getInTouch.cards.${card.id}.extra`, { defaultValue: '' });

            return (
              <article
                key={card.id}
                className={`flex h-full gap-4 rounded-3xl p-5 sm:p-6 ${card.cardBg}`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${card.iconBg}`}
                >
                  <SiteIcon name={card.icon} className={`h-6 w-6 ${card.iconColor}`} aria-hidden />
                </div>
                <div className="min-w-0 space-y-1.5">
                  <h3 className="font-heading text-lg font-bold leading-snug text-primary">
                    {t(`contactPage.getInTouch.cards.${card.id}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-primary/75">
                    {t(`contactPage.getInTouch.cards.${card.id}.description`)}
                  </p>
                  {extra ? (
                    <p className="text-sm leading-relaxed text-primary/75">{extra}</p>
                  ) : null}
                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="inline-block text-sm font-bold text-primary underline-offset-2 hover:underline"
                    >
                      {email}
                    </a>
                  ) : null}
                  {phone ? (
                    <div>
                      <a
                        href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                        className="text-sm font-bold text-primary"
                      >
                        {phone}
                      </a>
                      {note ? (
                        <p className="mt-0.5 text-xs text-primary/55">{note}</p>
                      ) : null}
                    </div>
                  ) : null}
                  {hours ? (
                    <div>
                      <p className="text-sm font-bold text-primary">{hours}</p>
                      {note ? (
                        <p className="mt-0.5 text-xs leading-relaxed text-primary/55">{note}</p>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
