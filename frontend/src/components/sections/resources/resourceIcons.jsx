import { useId } from 'react';
import { cn } from '@/utils/cn';

function MentalHealthIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M18.6 5.4c-3.7.2-6.6 3.2-6.6 6.8 0 1.3.4 2.5 1 3.5-.5.8-.8 1.7-.8 2.7 0 3.1 2.5 5.5 5.8 5.8v1.3c0 .7.5 1.2 1.2 1.2h2.4c.7 0 1.2-.5 1.2-1.2v-1.5c2.6-.8 4.4-3.1 4.4-5.8 0-1.2-.4-2.3-1-3.2.8-1.1 1.2-2.4 1.2-3.8 0-3.8-3.1-6.8-6.8-7-.7-.1-1.4-.1-2 .2Z"
        fill="currentColor"
      />
      <path
        d="M16.2 13.2c.7-1.3 2.6-1.3 3.3 0 .3.6.3 1 0 1.6l-1.4 2.2a.4.4 0 0 1-.5 0l-1.4-2.2c-.3-.6-.3-1 0-1.6Z"
        fill="white"
      />
    </svg>
  );
}

function ParentingIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="12.2" cy="9.2" r="3.1" fill="currentColor" />
      <path
        d="M6.4 22.8c.4-3.6 2.8-5.8 5.8-5.8s5.4 2.2 5.8 5.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="21.2" cy="12.2" r="2.3" fill="currentColor" />
      <path
        d="M17.2 23.2c.3-2.4 1.8-3.9 4-3.9s3.7 1.5 4 3.9"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NutritionIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16.4 8.2c.2-2.4 1.6-4 3.6-4.4-.4 2.2-1.8 3.6-3.6 4.4Z"
        fill="currentColor"
      />
      <path
        d="M16.2 7.6c1.4 1.2 2.2 2.4 2.2 3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16.1 10.2c-3.6.4-6.4 3.4-6.4 7.1 0 4 3.2 7.2 7.1 7.2 3.8 0 6.9-3 7.2-6.8.2-3.6-2.2-6.6-5.6-7.4-1-.3-1.8-.3-2.3-.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BriefcaseIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 9.4V8.2c0-.7.6-1.3 1.3-1.3h5.4c.7 0 1.3.6 1.3 1.3v1.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="6.2" y="9.6" width="19.6" height="13.4" rx="2.6" fill="currentColor" />
      <path d="M6.2 15.2h19.6" stroke="white" strokeWidth="1.6" />
    </svg>
  );
}

function PrideIcon({ className }) {
  const clipId = `pride-heart-${useId().replace(/:/g, '')}`;

  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <path d="M16 26.4s-8.4-5.2-8.4-11.2c0-3.2 2.4-5.4 5.2-5.4 1.6 0 2.8.8 3.2 1.8.4-1 1.6-1.8 3.2-1.8 2.8 0 5.2 2.2 5.2 5.4 0 6-8.4 11.2-8.4 11.2Z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect x="6" y="9" width="20" height="3.1" fill="#E54848" />
        <rect x="6" y="12.1" width="20" height="3.1" fill="#F59E0B" />
        <rect x="6" y="15.2" width="20" height="3.1" fill="#EAB308" />
        <rect x="6" y="18.3" width="20" height="3.1" fill="#22C55E" />
        <rect x="6" y="21.4" width="20" height="3.1" fill="#3B82F6" />
        <rect x="6" y="24.5" width="20" height="3.1" fill="#8B5CF6" />
      </g>
    </svg>
  );
}

function VenusIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="11.4" r="5.2" stroke="currentColor" strokeWidth="2.3" />
      <path d="M16 16.6v8.4M12.2 21.4h7.6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  );
}

function ChildrenIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="11.4" cy="11.2" r="2.7" fill="currentColor" />
      <path
        d="M6.6 23.4c.3-3.1 2.3-5 4.8-5s4.5 1.9 4.8 5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <circle cx="20.8" cy="12.4" r="2.2" fill="currentColor" />
      <path
        d="M16.8 23.6c.3-2.4 1.7-3.9 3.9-3.9 2.2 0 3.6 1.5 3.9 3.9"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CoinsIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <ellipse cx="13.4" cy="19.6" rx="6.6" ry="5.2" fill="currentColor" />
      <ellipse cx="19.2" cy="14.2" rx="6.2" ry="4.8" fill="currentColor" />
      <ellipse cx="19.2" cy="14.2" rx="3.2" ry="2.3" stroke="white" strokeWidth="1.3" />
      <path d="M19.2 12.2v4" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function HouseIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M5.6 15.4 16 6.4l10.4 9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 14.4V25h15.6V14.4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M16 18.2c.5-.9 1.8-.9 2.3 0 .2.4.2.7 0 1.1l-1 1.5a.3.3 0 0 1-.4 0l-1-1.5c-.2-.4-.2-.7 0-1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 25.2S6.8 19.4 6.8 12.8C6.8 9.2 9.6 6.8 12.8 6.8c1.8 0 3.2 1 3.2 1.6.2-.6 1.4-1.6 3.2-1.6 3.2 0 6 2.4 6 6 0 6.6-9.2 12.4-9.2 12.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="5.5" y="8.5" width="21" height="15" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M7 10.5 16 17l9-6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ICONS = {
  mentalHealth: MentalHealthIcon,
  parenting: ParentingIcon,
  nutrition: NutritionIcon,
  employment: BriefcaseIcon,
  lgbtq: PrideIcon,
  women: VenusIcon,
  children: ChildrenIcon,
  financial: CoinsIcon,
  housing: HouseIcon,
  heart: HeartIcon,
  people: ParentingIcon,
  mail: MailIcon,
};

export function ResourceIcon({ name, className }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon className={cn('h-7 w-7', className)} />;
}
