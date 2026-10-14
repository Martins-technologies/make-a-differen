import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { contactIcons } from '@/data/contactImages';

const CARDS = [
  {
    id: 'email',
    cardBg: 'bg-[#E7F6F3]',
  },
  {
    id: 'phone',
    cardBg: 'bg-[#FDECEC]',
  },
  {
    id: 'office',
    cardBg: 'bg-[#E8F6F4]',
  },
  {
    id: 'hours',
    cardBg: 'bg-[#EEEAF8]',
  },
  {
    id: 'accessibility',
    cardBg: 'bg-[#E7F6F0]',
  },
  {
    id: 'media',
    cardBg: 'bg-[#FDECEC]',
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
                <img src={contactIcons[card.id]} alt="" className="h-12 w-12 shrink-0" aria-hidden />
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
