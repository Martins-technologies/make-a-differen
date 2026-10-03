import { ArrowRight, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { LeafCluster } from './LeafCluster';

function ComingSoonButton({ children, note }) {
  return (
    <button
      type="button"
      aria-disabled="true"
      title={note}
      className="relative z-10 inline-flex min-h-11 items-center gap-2 rounded-pill border border-primary bg-surface/80 px-5 py-2 text-small font-medium text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
      onClick={(event) => event.preventDefault()}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
      <span className="sr-only">. {note}</span>
    </button>
  );
}

function InfoCard({ id, title, body, action, note, iconClassName, className }) {
  return (
    <article id={id} className={`relative scroll-mt-32 overflow-hidden rounded-2xl p-6 sm:p-8 ${className}`}>
      <LeafCluster className="pointer-events-none absolute -bottom-6 -left-4 h-28 w-32 opacity-80" />
      <div className="relative z-10 flex gap-4">
        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconClassName}`}>
          <FileText className="h-6 w-6" aria-hidden />
        </span>
        <div className="space-y-3">
          <h3 className="font-heading text-primary">{title}</h3>
          <p className="text-body max-w-md text-primary/80">{body}</p>
          <div className="pt-3">
            <ComingSoonButton note={note}>{action}</ComingSoonButton>
          </div>
        </div>
      </div>
    </article>
  );
}

export function TransparencySection() {
  const { t } = useTranslation();

  return (
    <section className="bg-bg py-6 pb-16 md:pb-20 lg:pb-24" aria-labelledby="about-transparency-title">
      <Container>
        <h2 id="about-transparency-title" className="sr-only">
          {t('about.transparencyLabel')}
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard
            id="reports"
            title={t('about.reports.title')}
            body={t('about.reports.description')}
            action={t('about.reports.action')}
            note={t('about.reports.note')}
            iconClassName="bg-secondary-50 text-secondary"
            className="bg-tint-mint"
          />
          <InfoCard
            id="registration"
            title={t('about.registration.title')}
            body={t('about.registration.description')}
            action={t('about.registration.action')}
            note={t('about.registration.note')}
            iconClassName="bg-accent-50 text-accent"
            className="bg-tint-blush"
          />
        </div>
      </Container>
    </section>
  );
}
