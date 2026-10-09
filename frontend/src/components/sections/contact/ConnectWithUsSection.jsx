import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LeafCluster } from '@/components/sections/about/LeafCluster';
import { cn } from '@/utils/cn';

const SOCIAL_LINKS = [
  { key: 'facebook', href: '#', label: 'Facebook', icon: Facebook, className: 'bg-[#1877F2]' },
  {
    key: 'instagram',
    href: '#',
    label: 'Instagram',
    icon: Instagram,
    className: 'bg-[linear-gradient(135deg,#F58529_0%,#DD2A7B_50%,#8134AF_100%)]',
  },
  { key: 'linkedin', href: '#', label: 'LinkedIn', icon: Linkedin, className: 'bg-[#0A66C2]' },
  { key: 'youtube', href: '#', label: 'YouTube', icon: Youtube, className: 'bg-[#FF0000]' },
];

export function ConnectWithUsSection() {
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
          {SOCIAL_LINKS.map(({ key, href, label, icon: Icon, className }) => (
            <li key={key}>
              <a
                href={href}
                aria-label={label}
                onClick={(event) => event.preventDefault()}
                className={cn(
                  'inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
                  className,
                )}
              >
                <Icon className="h-6 w-6 fill-current" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
