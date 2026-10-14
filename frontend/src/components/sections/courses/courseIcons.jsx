import { cn } from '@/utils/cn';
import { SiteIcon } from '@/components/icons/siteIcons';

function ForkKnifeIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M9 5v11a2.5 2.5 0 0 0 2.5 2.5H9V28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M23 5v23" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M23 5a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function HeartOutlineIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M16 25.2S6.8 19.4 6.8 12.8C6.8 9.2 9.6 6.8 12.8 6.8c1.8 0 3.2 1 3.2 1.6.2-.6 1.4-1.6 3.2-1.6 3.2 0 6 2.4 6 6 0 6.6-9.2 12.4-9.2 12.4Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function CoinsStackIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <ellipse cx="13" cy="20" rx="7" ry="5" fill="currentColor" />
      <ellipse cx="19" cy="14" rx="6.5" ry="4.5" fill="currentColor" />
      <ellipse cx="19" cy="14" rx="3.2" ry="2.2" stroke="white" strokeWidth="1.3" />
    </svg>
  );
}

function CogIcon({ className }) {
  return <SiteIcon name="settings" className={className} />;
}

function LaptopIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect x="6" y="8" width="20" height="13" rx="2" fill="currentColor" />
      <path d="M4 23h24v2H4z" fill="currentColor" />
      <rect x="13" y="11" width="6" height="1.5" rx="0.75" fill="white" opacity="0.85" />
    </svg>
  );
}

function ShieldOutlineIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M16 4 7 8.5v8.2c0 5.8 3.8 11.2 9 12.3 5.2-1.1 9-6.5 9-12.3V8.5L16 4Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function FileOutlineIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M9 5h11l5 5v19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
      <path d="M20 5v5h5" stroke="currentColor" strokeWidth="2" />
      <path d="M11 14h10M11 18h12M11 22h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CalendarOutlineIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect x="6" y="8" width="20" height="18" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M6 13h20M11 6v4M21 6v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MonitorIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect x="5" y="7" width="22" height="14" rx="2" fill="currentColor" />
      <path d="M12 25h8v2H12z" fill="currentColor" />
      <path d="M10 27h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TargetIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="1.8" fill="currentColor" />
    </svg>
  );
}

function UserIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <circle cx="16" cy="11" r="4.5" fill="currentColor" />
      <path d="M7 27c0-5 4-9 9-9s9 4 9 9v1H7v-1Z" fill="currentColor" />
    </svg>
  );
}

function WheelchairIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <circle cx="19" cy="8" r="2.2" fill="currentColor" />
      <path d="M19 10v5h-6l-2 9h4l1.5-6h4.5v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const SOLID_ICONS = {
  utensils: ForkKnifeIcon,
  heart: HeartOutlineIcon,
  users: ({ className }) => <SiteIcon name="users" className={className} />,
  coins: CoinsStackIcon,
  briefcase: ({ className }) => <SiteIcon name="briefcase" className={className} />,
  cog: CogIcon,
  laptop: LaptopIcon,
  shield: ShieldOutlineIcon,
  file: FileOutlineIcon,
  calendar: CalendarOutlineIcon,
  monitor: MonitorIcon,
  target: TargetIcon,
  user: UserIcon,
  accessibility: WheelchairIcon,
};

export function CourseIcon({ name, className }) {
  if (name === 'ac') {
    return (
      <span className={cn('text-sm font-bold leading-none tracking-tight', className)} aria-hidden>
        AC
      </span>
    );
  }

  const Icon = SOLID_ICONS[name];
  if (!Icon) return null;
  return <Icon className={cn('h-5 w-5', className)} aria-hidden />;
}
