import { cn } from '@/utils/cn';

function HeartIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M16 25.2S6.8 19.4 6.8 12.8C6.8 9.2 9.6 6.8 12.8 6.8c1.8 0 3.2 1 3.2 1.6.2-.6 1.4-1.6 3.2-1.6 3.2 0 6 2.4 6 6 0 6.6-9.2 12.4-9.2 12.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CalendarIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M9 6.5a1.2 1.2 0 0 1 1.2-1.2h1.6V4a1.2 1.2 0 1 1 2.4 0v1.3h5.6V4a1.2 1.2 0 1 1 2.4 0v1.3h1.6A1.2 1.2 0 0 1 24 6.5V9H8V6.5Z"
        fill="currentColor"
      />
      <rect x="7" y="10" width="18" height="16" rx="2.5" fill="currentColor" />
      <path d="M7 14.5h18" stroke="white" strokeWidth="1.4" />
      <circle cx="12" cy="18.5" r="1.2" fill="white" />
      <circle cx="16" cy="18.5" r="1.2" fill="white" />
      <circle cx="20" cy="18.5" r="1.2" fill="white" />
    </svg>
  );
}

function GraduationCapIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path d="M16 7L4 14l12 7 12-7-12-7Z" fill="currentColor" />
      <path d="M9 17.5V22.5c0 2.2 3.1 4.5 7 4.5s7-2.3 7-4.5v-5L16 24.5 9 17.5Z" fill="currentColor" />
      <path
        d="M25 15v5.5c0 .8.6 1.5 1.3 1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UsersIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <circle cx="16" cy="10" r="4" fill="currentColor" />
      <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8v1H8v-1Z" fill="currentColor" />
      <circle cx="7" cy="13" r="3" fill="currentColor" opacity="0.85" />
      <path d="M2 26c0-2.8 2.2-5 5-5 1.2 0 2.3.4 3.2 1.1C8.8 23.2 8 24.5 8 26v1H2v-1Z" fill="currentColor" opacity="0.85" />
      <circle cx="25" cy="13" r="3" fill="currentColor" opacity="0.85" />
      <path d="M30 26c0-2.8-2.2-5-5-5-1.2 0-2.3.4-3.2 1.1c1.4 1.1 2.2 2.4 2.2 4.1v.8h6v-1Z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

function PackageIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path d="M16 5L27 11.5 16 18 5 11.5 16 5Z" fill="#F97316" />
      <path d="M5 13.5L16 20v11.5L5 24V13.5Z" fill="#EA580C" />
      <path d="M16 20l11-6.5V24L16 31.5V20Z" fill="#C2410C" />
      <path d="M13 11.5 16 13.2 19 11.5 16 9.8 13 11.5Z" fill="white" opacity="0.9" />
    </svg>
  );
}

function BriefcaseIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M11 10V8.5c0-.8.7-1.5 1.5-1.5h7c.8 0 1.5.7 1.5 1.5V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="5" y="10" width="22" height="15" rx="2.5" fill="currentColor" />
      <path d="M5 15h22" stroke="white" strokeWidth="1.5" />
      <rect x="14" y="17" width="4" height="4" rx="1" fill="white" />
    </svg>
  );
}

function MailIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <rect x="4" y="8" width="24" height="16" rx="2.5" fill="currentColor" />
      <path d="M4 10.5 16 19 28 10.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <rect x="9" y="5" width="14" height="22" rx="3" fill="currentColor" />
      <rect x="10.75" y="8" width="10.5" height="14" rx="2" fill="white" />
      <rect x="13.25" y="23.25" width="5.5" height="1.5" rx="0.75" fill="white" />
    </svg>
  );
}

function MapPinIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M16 27s8-7.2 8-13.5C24 8.5 20.5 5 16 5s-8 3.5-8 8.5C8 19.8 16 27 16 27Z"
        fill="currentColor"
      />
      <circle cx="16" cy="13.5" r="3" fill="white" />
    </svg>
  );
}

function ClockIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <circle cx="16" cy="16" r="11" fill="currentColor" />
      <path d="M16 10v6.5l4.5 2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AccessibilityIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <circle cx="16" cy="8.5" r="2.5" fill="currentColor" />
      <path d="M10 12.5h12M16 12.5v9M11 21.5l5-2.5 5 2.5M9 26.5l7-3.5 7 3.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LandmarkIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path d="M16 6 6 12v2h20v-2L16 6Z" fill="currentColor" />
      <rect x="8" y="14" width="3" height="10" fill="currentColor" />
      <rect x="14.5" y="14" width="3" height="10" fill="currentColor" />
      <rect x="21" y="14" width="3" height="10" fill="currentColor" />
      <rect x="6" y="24" width="20" height="2.5" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function GiftIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <rect x="6" y="14" width="20" height="12" rx="1.5" fill="currentColor" />
      <rect x="5" y="11" width="22" height="4" rx="1" fill="currentColor" />
      <path d="M16 11v15M10.5 11c-1.8 0-3-1-3-2.5S8.5 6 10.5 6c2 0 3.5 2 5.5 5-3.5 0-5.5 0-5.5 0ZM21.5 11c1.8 0 3-1 3-2.5S23.5 6 21.5 6c-2 0-3.5 2-5.5 5 3.5 0 5.5 0 5.5 0Z" fill="currentColor" />
      <path d="M16 11v15" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

function FileTextIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path d="M9 5h10l6 6v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" fill="currentColor" />
      <path d="M19 5v6h6" fill="currentColor" opacity="0.7" />
      <rect x="11" y="14" width="10" height="1.8" rx="0.9" fill="white" />
      <rect x="11" y="18" width="14" height="1.8" rx="0.9" fill="white" />
      <rect x="11" y="22" width="12" height="1.8" rx="0.9" fill="white" />
    </svg>
  );
}

function SettingsIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M13.2 5.5 14.5 8.2a6.5 6.5 0 0 0-2.6 1.5L9.2 8.3 6.8 12.5l2.8 2.1a6.4 6.4 0 0 0 0 3.1l-2.8 2.1 2.4 4.2 2.7-1.4a6.5 6.5 0 0 0 2.6 1.5l-1.3 2.7h4.8l-1.3-2.7a6.5 6.5 0 0 0 2.6-1.5l2.7 1.4 2.4-4.2-2.8-2.1a6.4 6.4 0 0 0 0-3.1l2.8-2.1-2.4-4.2-2.7 1.4a6.5 6.5 0 0 0-2.6-1.5l1.3-2.7h-4.8Z"
        fill="currentColor"
      />
      <circle cx="16" cy="16" r="3.5" fill="white" />
    </svg>
  );
}

function HandIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M16 6.5V14M12.5 8v8.5M19.5 7.5V15M23 10v9.5c0 4.2-3.2 7.5-7.5 7.5S8 23.7 8 19.5V14.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 14.5c0-2.2 1.8-4 4-4 .8 0 1.5.2 2.1.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function MessagesSquareIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path d="M6 8h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H12l-4 4v-4H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" fill="currentColor" />
      <path d="M20 12h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2l-2 2v-2h-4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

function BuildingIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <rect x="8" y="6" width="16" height="22" rx="1.5" fill="currentColor" />
      <rect x="11" y="10" width="3" height="3" fill="white" />
      <rect x="18" y="10" width="3" height="3" fill="white" />
      <rect x="11" y="16" width="3" height="3" fill="white" />
      <rect x="18" y="16" width="3" height="3" fill="white" />
      <rect x="14" y="22" width="4" height="6" fill="white" />
    </svg>
  );
}

function PresentationIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path d="M6 8h20v12H6V8Z" fill="currentColor" />
      <path d="M16 20v4M12 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="11" cy="24" r="2" fill="currentColor" />
      <circle cx="16" cy="25" r="2" fill="currentColor" />
      <circle cx="21" cy="24" r="2" fill="currentColor" />
      <rect x="9" y="11" width="14" height="2" rx="1" fill="white" />
      <rect x="9" y="15" width="10" height="1.5" rx="0.75" fill="white" opacity="0.85" />
    </svg>
  );
}

function FoodIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path d="M10 5v9a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M12 16v11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22 5v20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22 5a2.5 2.5 0 0 0-2.5 2.5V12a2.5 2.5 0 0 0 2.5 2.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function ShirtIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M13.5 6.5 16 9l2.5-2.5 5.6 4.1-3 2.8V26H10.9V13.4l-3-2.8 5.6-4.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HygieneIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <rect x="14" y="4" width="4" height="4" rx="1" fill="currentColor" />
      <path d="M12 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 10h6v2H13z" fill="currentColor" />
      <path d="M12.5 12h7l1.5 4v10.5a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V16l1.5-4Z" fill="currentColor" />
      <rect x="14" y="17" width="4" height="7" rx="1" fill="white" opacity="0.85" />
    </svg>
  );
}

function TeddyIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <circle cx="11" cy="11" r="3" fill="currentColor" />
      <circle cx="21" cy="11" r="3" fill="currentColor" />
      <circle cx="16" cy="17" r="7" fill="currentColor" />
      <circle cx="13.5" cy="16" r="1" fill="white" />
      <circle cx="18.5" cy="16" r="1" fill="white" />
      <ellipse cx="16" cy="19.5" rx="2" ry="1.5" fill="white" opacity="0.9" />
    </svg>
  );
}

function BookIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path d="M6 6h9a3 3 0 0 1 3 3v17H9a3 3 0 0 1-3-3V6Z" fill="currentColor" />
      <path d="M26 6h-9a3 3 0 0 0-3 3v17h9a3 3 0 0 0 3-3V6Z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

function EllipsisIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <circle cx="8" cy="16" r="2.5" fill="currentColor" />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      <circle cx="24" cy="16" r="2.5" fill="currentColor" />
    </svg>
  );
}

function CompassIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2.2" />
      <path d="M19.5 12.5 17 17l-4.5 2.5 2.5-4.5 4.5-2.5Z" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M16 4 7 8.5v8.2c0 5.8 3.8 11.2 9 12.3 5.2-1.1 9-6.5 9-12.3V8.5L16 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ScaleIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path d="M16 6v18M10 24h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7 11h8l-4 7-4-7ZM17 11h8l-4 7-4-7Z" fill="currentColor" />
    </svg>
  );
}

function HandshakeIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M6 14.5 11 10l4 4 2-2 5 5v6.5H9V18l-3-3.5Z"
        fill="currentColor"
      />
      <path
        d="M26 14.5 21 10l-4 4-2-2-5 5v6.5h13V18l3-3.5Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

function CommunityFiveIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <circle cx="16" cy="9" r="3" fill="currentColor" />
      <circle cx="9" cy="12" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="23" cy="12" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="7" cy="18" r="2.2" fill="currentColor" opacity="0.8" />
      <circle cx="25" cy="18" r="2.2" fill="currentColor" opacity="0.8" />
      <path d="M11 26c0-3.3 2.2-6 5-6s5 2.7 5 6v1H11v-1Z" fill="currentColor" />
    </svg>
  );
}

function DocumentChartIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path d="M8 5h11l5 5v19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" fill="currentColor" />
      <path d="M19 5v5h5" fill="currentColor" opacity="0.7" />
      <rect x="11" y="17" width="3" height="6" rx="0.8" fill="white" />
      <rect x="15.5" y="14" width="3" height="9" rx="0.8" fill="white" />
      <rect x="20" y="16" width="3" height="7" rx="0.8" fill="white" />
    </svg>
  );
}

function DocumentLinesIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path d="M8 5h11l5 5v19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" fill="currentColor" />
      <path d="M19 5v5h5" fill="currentColor" opacity="0.7" />
      <rect x="11" y="13" width="12" height="1.8" rx="0.9" fill="white" />
      <rect x="11" y="17" width="14" height="1.8" rx="0.9" fill="white" />
      <rect x="11" y="21" width="10" height="1.8" rx="0.9" fill="white" />
    </svg>
  );
}

function FamiliesBustIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <circle cx="10.5" cy="9.5" r="4.25" fill="currentColor" />
      <path
        d="M3.5 26.5c0-4.35 3.15-7.85 7-7.85s7 3.5 7 7.85v.5H3.5v-.5Z"
        fill="currentColor"
      />
      <circle cx="21.5" cy="9.5" r="4.25" fill="currentColor" />
      <path
        d="M14.5 26.5c0-4.35 3.15-7.85 7-7.85s7 3.5 7 7.85v.5h-14v-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LeafCommunityIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M23.5 4.5C15.5 5 9.5 10.5 8 18.5c4.5.25 8.5-1.75 10.5-6.5 1.75 4.25 5.5 7 10.5 7.5C26.5 14 25 8.5 23.5 4.5Z"
        fill="currentColor"
      />
      <path
        d="M8.5 18c2.25 3.25 5.25 5.75 9 7.25"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

function BarChartIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <rect x="7" y="16" width="5" height="10" rx="1.2" fill="currentColor" />
      <rect x="13.5" y="11" width="5" height="15" rx="1.2" fill="currentColor" />
      <rect x="20" y="6" width="5" height="20" rx="1.2" fill="currentColor" />
    </svg>
  );
}

function GroceryBagIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden {...props}>
      <path d="M20 22V18a12 12 0 0 1 24 0v4" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 22h36l-3 32H17L14 22Z" fill="#F97316" />
      <rect x="38" y="38" width="14" height="12" rx="2" fill="#EA580C" />
      <path d="M38 38h14v4H38z" fill="#FB923C" />
    </svg>
  );
}

const ICONS = {
  heart: HeartIcon,
  calendar: CalendarIcon,
  graduationCap: GraduationCapIcon,
  users: UsersIcon,
  package: PackageIcon,
  briefcase: BriefcaseIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  mapPin: MapPinIcon,
  clock: ClockIcon,
  accessibility: AccessibilityIcon,
  landmark: LandmarkIcon,
  gift: GiftIcon,
  fileText: FileTextIcon,
  settings: SettingsIcon,
  hand: HandIcon,
  messagesSquare: MessagesSquareIcon,
  building: BuildingIcon,
  presentation: PresentationIcon,
  food: FoodIcon,
  shirt: ShirtIcon,
  hygiene: HygieneIcon,
  teddy: TeddyIcon,
  book: BookIcon,
  ellipsis: EllipsisIcon,
  interview: UsersIcon,
  resume: FileTextIcon,
  workshops: PresentationIcon,
  communication: MessagesSquareIcon,
  skills: SettingsIcon,
  directory: BuildingIcon,
  compass: CompassIcon,
  shield: ShieldIcon,
  scale: ScaleIcon,
  handshake: HandshakeIcon,
  communityFive: CommunityFiveIcon,
  documentChart: DocumentChartIcon,
  documentLines: DocumentLinesIcon,
  familiesBust: FamiliesBustIcon,
  leafCommunity: LeafCommunityIcon,
  barChart: BarChartIcon,
  groceryBag: GroceryBagIcon,
};

export function SiteIcon({ name, className, ...props }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon className={cn('h-6 w-6 shrink-0', className)} {...props} />;
}

export { ICONS as siteIcons };
