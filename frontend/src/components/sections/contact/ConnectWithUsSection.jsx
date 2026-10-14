import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { LeafCluster } from '@/components/sections/about/LeafCluster';
import { contactIcons } from '@/data/contactImages';

const SOCIAL_LINKS = [
  { key: 'facebook', href: '#', label: 'Facebook' },
  { key: 'instagram', href: '#', label: 'Instagram' },
  { key: 'linkedin', href: '#', label: 'LinkedIn' },
  { key: 'youtube', href: '#', label: 'YouTube' },
];

export function ConnectWithUsSection({ icons = contactIcons }) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#E8F6F3] py-12 md:py-16" aria-labelledby="connect-with-us-title">
      <LeafCluster className="pointer-events-none absolute -bottom-6 -right-4 hidden h-44 w-48 -scale-x-100 text-[#C5E3B4] sm:block lg:right-8" />

      <Container className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-2">
          <h2
            id="connect-with-us-title"
            className="font-heading text-3xl font-extrabold text-primary sm:text-4xl"
          >
            {t('contactPage.connect.title')}
          </h2>
          <p className="text-body-lg text-primary/80">{t('contactPage.connect.description')}</p>
        </div>

        <ul className="flex flex-wrap items-center gap-4 sm:gap-5" aria-label={t('footer.social')}>
          {SOCIAL_LINKS.map(({ key, href, label }) => (
            <li key={key}>
              <a
                href={href}
                aria-label={label}
                onClick={(event) => event.preventDefault()}
                className="inline-flex h-14 w-14 rounded-full transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <img src={icons[key]} alt="" className="h-14 w-14" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
