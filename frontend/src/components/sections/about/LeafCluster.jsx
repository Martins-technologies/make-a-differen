import { cn } from '@/utils/cn';

export function LeafCluster({ className }) {
  return (
    <svg viewBox="0 0 200 180" fill="none" className={cn('text-secondary-200', className)} aria-hidden="true">
      <path d="M78 168c-8-38 6-78 42-108-28 22-46 58-42 108Z" fill="currentColor" opacity="0.55" />
      <path d="M96 170c-2-44 24-86 68-116-36 18-58 58-68 116Z" fill="currentColor" opacity="0.9" />
      <path d="M48 150c-18-28-10-70 18-96-24 18-36 52-18 96Z" fill="currentColor" opacity="0.4" />
      <path d="M118 172c8-30 32-58 62-74-28 8-48 32-62 74Z" fill="currentColor" opacity="0.35" />
    </svg>
  );
}
