import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

export function DonateActions({ className }) {
  const { t } = useTranslation();

  return (
    <div className={cn('flex flex-wrap items-center pt-1', className)}>
      <a
        href="#donate-supplies"
        className={cn(
          buttonVariants({ variant: 'outline', size: 'lg' }),
          'shrink-0 gap-2 rounded-lg border-2 border-primary bg-transparent font-medium text-primary hover:bg-primary/5',
        )}
      >
        <span>{t('donatePage.hero.ctaSupplies')}</span>
        <ArrowRight className="h-4 w-4 stroke-[2.5]" aria-hidden />
      </a>
    </div>
  );
}
