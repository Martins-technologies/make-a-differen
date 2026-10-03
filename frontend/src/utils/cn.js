import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': ['text-display', 'text-nav', 'text-body-lg', 'text-body', 'text-small'],
    },
  },
});

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
