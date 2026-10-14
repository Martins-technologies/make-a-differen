import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronUp } from 'lucide-react';
import { MediaImage } from '@/components/ui/MediaImage';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { CourseIcon } from './courseIcons';

const DETAIL_FIELDS = [
  { id: 'description', icon: 'file', textKey: 'description', iconStyle: 'outline' },
  { id: 'audience', icon: 'users', textKey: 'audience', iconStyle: 'badge' },
  { id: 'instructor', icon: 'user', sharedKey: 'instructor', iconStyle: 'badge' },
  { id: 'schedule', icon: 'calendar', sharedKey: 'schedule', iconStyle: 'outline' },
  { id: 'format', icon: 'monitor', sharedKey: 'format', iconStyle: 'badge' },
  { id: 'accessibility', icon: 'accessibility', sharedKey: 'accessibility', iconStyle: 'badge' },
];

export function CourseDetailPanel({ course, panelRef, onClose }) {
  const { t } = useTranslation();
  const base = `coursesPage.items.${course.key}`;
  const outcomes = t(`${base}.outcomes`, { returnObjects: true });
  const outcomeList = Array.isArray(outcomes) ? outcomes : [];

  return (
    <article
      id="course-detail-panel"
      ref={panelRef}
      tabIndex={-1}
      className="scroll-mt-28 rounded-2xl border-2 border-primary/50 bg-surface p-4 shadow-sm sm:p-6 lg:p-8"
      aria-labelledby="course-detail-title"
    >
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <MediaImage
            src={course.image}
            alt={t(`${base}.title`)}
            placeholderLabel={t('coursesPage.detailImageAlt')}
            placeholderVariant="label"
            aspect="1/1"
            fit={course.imageFit ?? 'cover'}
            roundedClassName="rounded-xl"
            className="w-16 sm:w-20"
          />
          <span
            className={cn(
              'absolute -bottom-3 -right-3 flex h-11 w-11 items-center justify-center rounded-full shadow-sm',
              course.chipClass,
            )}
          >
            <CourseIcon name={course.icon} className="h-5 w-5" />
          </span>
        </div>

        <div className="min-w-0 flex-1 pt-1">
          <h3 id="course-detail-title" className="font-heading text-2xl font-bold text-primary sm:text-3xl">
            {t(`${base}.title`)}
          </h3>
          <p className="mt-1 max-w-3xl text-small text-muted sm:text-body">{t(`${base}.tagline`)}</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E7F0FE] text-primary hover:bg-[#D6E6FD] focus-visible:ring-2 focus-visible:ring-focus-ring"
          aria-label={t('coursesPage.collapseDetails')}
        >
          <ChevronUp className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {course.key === 'mentalHealth' ? (
        <p className="mt-6 rounded-xl bg-tint-blush px-4 py-3 text-small leading-relaxed text-primary">
          {t('coursesPage.mentalHealthNote')}
        </p>
      ) : null}

      <div className="mt-8 grid gap-6 border-t border-border pt-6 md:grid-cols-2 xl:grid-cols-3">
        {DETAIL_FIELDS.filter((field) => field.textKey).map((field) => (
          <DetailBlock
            key={field.id}
            icon={field.icon}
            iconStyle={field.iconStyle}
            label={t(`coursesPage.fields.${field.id}`)}
          >
            <p>{t(`${base}.${field.textKey}`)}</p>
          </DetailBlock>
        ))}

        <DetailBlock icon="target" iconStyle="badge" label={t('coursesPage.fields.outcomes')}>
          <ul className="list-disc space-y-1 pl-4">
            {outcomeList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailBlock>
      </div>

      <div className="mt-6 grid gap-6 border-t border-border pt-6 sm:grid-cols-2 xl:grid-cols-4">
        {DETAIL_FIELDS.filter((field) => field.sharedKey).map((field) => (
          <DetailBlock
            key={field.id}
            icon={field.icon}
            iconStyle={field.iconStyle}
            label={t(`coursesPage.fields.${field.id}`)}
          >
            <p>{t(`coursesPage.shared.${field.sharedKey}`)}</p>
          </DetailBlock>
        ))}
      </div>

      <Link
        to="/contact"
        className={cn(
          buttonVariants({ variant: 'primary', size: 'lg' }),
          'mt-8 rounded-pill px-6',
        )}
      >
        {t('coursesPage.register')}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </article>
  );
}

function DetailBlock({ icon, label, children, iconStyle = 'badge' }) {
  const isOutline = iconStyle === 'outline';

  return (
    <div className="flex gap-3">
      <span
        className={cn(
          'flex h-11 w-11 shrink-0 items-center justify-center',
          isOutline ? 'text-primary' : 'rounded-full bg-primary text-primary-contrast',
        )}
      >
        <CourseIcon name={icon} className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <h4 className="font-body text-body font-bold text-primary">{label}</h4>
        <div className="mt-1 text-small leading-relaxed text-muted">{children}</div>
      </div>
    </div>
  );
}
