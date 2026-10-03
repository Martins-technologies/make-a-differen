import { cn } from '@/utils/cn';

export function SectionHeading({
  title,
  description,
  action,
  className,
  as: Component = 'div',
}) {
  return (
    <Component
      className={cn(
        'mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between',
        className,
      )}
    >
      <div className="max-w-2xl space-y-2">
        {title ? <h2>{title}</h2> : null}
        {description ? <p className="text-body-lg text-muted">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Component>
  );
}
