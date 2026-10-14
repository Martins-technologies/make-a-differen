import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { howWeHelpItems } from '@/data/home';
import { HomeImageIcon } from './HomeImageIcon';

export function HowWeMakeDifferenceSection() {
  const { t } = useTranslation();

  return (
    <Section className="py-10 md:py-14 lg:py-16">
      <Container>
        <div className="mb-8 md:mb-10 space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            {t('home.howWeHelp.title')}
          </h2>
          <p className="text-body-lg text-text/80 whitespace-normal xl:whitespace-nowrap">
            {t('home.howWeHelp.description')}
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {howWeHelpItems.map((item) => (
            <li key={item.key} className="h-full">
              <Link
                to={item.to}
                className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <div
                  className={`flex h-full min-h-[14rem] flex-col items-center justify-start rounded-2xl ${item.bgClass} p-6 sm:p-5 text-center transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md`}
                >
                  <HomeImageIcon src={item.icon} className={`mb-4 h-16 w-16 rounded-2xl ${item.iconWrap}`} />
                  <h3 className="text-[1.05rem] font-bold text-primary mb-2 leading-snug">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-xs sm:text-[0.8125rem] text-text/75 leading-relaxed">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
