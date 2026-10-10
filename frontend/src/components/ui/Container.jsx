import { cn } from '@/utils/cn';
import { containerMarginLeft } from '@/components/layout/pageGutter';

const MAX_WIDTH_BY_CLASS = {
  'max-w-3xl': '48rem',
  'max-w-6xl': '72rem',
  'max-w-7xl': '80rem',
};

function maxWidthFromClassName(className = '') {
  const arbitrary = className.match(/\bmax-w-\[([^\]]+)\]/);
  if (arbitrary) return arbitrary[1].replace(/_/g, ' ');

  const named = className.match(/\bmax-w-[\w-]+/);
  if (named && MAX_WIDTH_BY_CLASS[named[0]]) return MAX_WIDTH_BY_CLASS[named[0]];

  return null;
}

export function Container({ className, as: Component = 'div', style, ...props }) {
  const customMax = maxWidthFromClassName(className);

  return (
    <Component
      className={cn('w-full', !customMax && 'max-w-container', className)}
      style={{
        marginRight: 'auto',
        marginLeft: containerMarginLeft(customMax ?? 'var(--container-max)'),
        ...style,
      }}
      {...props}
    />
  );
}
