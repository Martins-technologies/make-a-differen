import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

export function EmploymentCta({ to, children, icon: Icon, iconPosition = 'start' }) {
  const icon = Icon ? <Icon className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden /> : null;

  return (
    <Link
      to={to}
      className={cn(
        buttonVariants({ variant: 'cta', size: 'md' }),
        'rounded-full px-6 font-semibold shadow-sm',
      )}
    >
      {iconPosition === 'start' ? icon : null}
      <span>{children}</span>
      {iconPosition === 'end' ? icon : null}
    </Link>
  );
}
