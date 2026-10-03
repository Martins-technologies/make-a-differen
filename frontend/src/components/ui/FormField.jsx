import { cloneElement, isValidElement } from 'react';
import { cn } from '@/utils/cn';

export function FormField({ id, label, error, hint, required, children, className }) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  const control =
    isValidElement(children) &&
    cloneElement(children, {
      id: children.props.id ?? id,
      'aria-invalid': error ? true : undefined,
      'aria-describedby': describedBy,
    });

  return (
    <div className={cn('space-y-2', className)}>
      {label ? (
        <label htmlFor={id} className="text-body block font-medium text-text">
          {label}
          {required ? (
            <span className="text-danger" aria-hidden>
              {' '}
              *
            </span>
          ) : null}
          {required ? <span className="sr-only"> (required)</span> : null}
        </label>
      ) : null}
      {hint ? (
        <p id={hintId} className="text-small text-muted">
          {hint}
        </p>
      ) : null}
      {control || children}
      {error ? (
        <p id={errorId} className="text-small text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
