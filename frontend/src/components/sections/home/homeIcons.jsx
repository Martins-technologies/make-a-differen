import {
  ArrowRight,
  Bandage,
  Briefcase,
  ChevronRight,
  FileText,
  GraduationCap,
  Heart,
  Package,
  Users,
} from 'lucide-react';
import { SiteIcon } from '@/components/icons/siteIcons';

function siteIconBridge(name) {
  return function Bridge({ className, ...props }) {
    return <SiteIcon name={name} className={className} {...props} />;
  };
}

/** Hero trust row — single bust silhouette (Stronger People). */
function PersonBustIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="16" cy="8.75" r="5.25" fill="currentColor" />
      <path
        d="M5.5 27.25c0-5.8 4.7-10.5 10.5-10.5s10.5 4.7 10.5 10.5v.75H5.5v-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Hero trust row — two equal bust silhouettes (Healthier Families). */
function FamiliesBustIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" {...props}>
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

/** Hero trust row — tilted leaf with midrib (Brighter Communities). */
function LeafCommunityIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" {...props}>
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

function EducationalCapIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M32 10L6 23L32 36L58 23L32 10Z" fill="#2E2875" />
      <path d="M18 29.5V42.5C18 42.5 23 48.5 32 48.5C41 48.5 46 42.5 46 42.5V29.5L32 36.5L18 29.5Z" fill="#1E1B4B" />
      <path d="M50 25V39C48.5 40 47.5 42 47.5 44C47.5 46.5 49 48 50.5 48C52 48 53.5 46.5 53.5 44C53.5 42 52.5 40 51 39V25" fill="#2E2875" stroke="#2E2875" strokeWidth="1.5" />
    </svg>
  );
}

function SuppliesBoxIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" {...props}>
      {/* Top isometric face */}
      <path d="M32 8L54 20L32 32L10 20L32 8Z" fill="#14B8A6" />
      {/* Left isometric face */}
      <path d="M10 23L32 35V57L10 45V23Z" fill="#0D9488" />
      {/* Right isometric face */}
      <path d="M32 35L54 23V45L32 57V35Z" fill="#0F766E" />
    </svg>
  );
}

function EmploymentBriefcaseIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" {...props}>
      {/* Handle */}
      <path d="M24 18V13C24 10.7909 25.7909 9 28 9H36C38.2091 9 40 10.7909 40 13V18" stroke="#0E7490" strokeWidth="4" strokeLinecap="round" />
      {/* Briefcase Base */}
      <rect x="10" y="18" width="44" height="34" rx="6" fill="#0891B2" />
      {/* Flap accent */}
      <path d="M10 23H54V31C54 32.6569 52.6569 34 51 34H13C11.3431 34 10 32.6569 10 31V23Z" fill="#06748C" />
      {/* Latch */}
      <rect x="29" y="30" width="6" height="7" rx="1.5" fill="#FFFFFF" />
    </svg>
  );
}

function MentalHealthHeartIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M32 54C32 54 10 39 10 23.5C10 15 16.5 9 24.5 9C28.8 9 31.5 11.5 32 12.8C32.5 11.5 35.2 9 39.5 9C47.5 9 54 15 54 23.5C54 39 32 54 32 54Z"
        fill="#FF5A50"
      />
    </svg>
  );
}

function CommunityGroupIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" {...props}>
      {/* Center head */}
      <circle cx="32" cy="18" r="6.5" fill="#0F766E" />
      {/* Center body */}
      <path d="M21 44C21 37.9249 25.9249 33 32 33C38.0751 33 43 37.9249 43 44V47H21V44Z" fill="#0F766E" />
      {/* Left head */}
      <circle cx="16" cy="23" r="5.5" fill="#0D9488" />
      {/* Left body */}
      <path d="M8 47C8 41.5 11.5 37 16.5 37C18.8 37 20.8 37.8 22.3 39.2C21.5 40.7 21 42.3 21 44V47H8Z" fill="#0D9488" />
      {/* Right head */}
      <circle cx="48" cy="23" r="5.5" fill="#0D9488" />
      {/* Right body */}
      <path d="M56 47C56 41.5 52.5 37 47.5 37C45.2 37 43.2 37.8 41.7 39.2C42.5 40.7 43 42.3 43 44V47H56Z" fill="#0D9488" />
    </svg>
  );
}

function FoodSuppliesIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M22 14V10C22 8.89543 22.8954 8 24 8H30C31.1046 8 32 8.89543 32 10V14" stroke="#FF5A50" strokeWidth="4" strokeLinecap="round" />
      <path d="M36 12H44V18H36V12Z" fill="#FF7870" />
      <rect x="10" y="18" width="44" height="36" rx="6" fill="#FF5A50" />
      <rect x="10" y="24" width="44" height="4" fill="#E8493F" />
      <path d="M30 33H34V38H39V42H34V47H30V42H25V38H30V33Z" fill="#FFFFFF" />
    </svg>
  );
}

function ReferralsIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="39" cy="20" r="7" fill="#FF5A50" />
      <path d="M28 48C28 40.268 34.268 34 42 34C49.732 34 56 40.268 56 48V52H28V48Z" fill="#FF5A50" />
      <circle cx="20" cy="25" r="5.5" fill="#FF7870" />
      <path d="M8 52C8 45.3726 13.3726 40 20 40C22.6 40 25 40.8 27 42.2C25.5 44 24.5 46.4 24.5 49V52H8Z" fill="#FF7870" />
    </svg>
  );
}

function ResumeDocIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M14 14C14 10.6863 16.6863 8 20 8H38L50 20V50C50 53.3137 47.3137 56 44 56H20C16.6863 56 14 53.3137 14 50V14Z" fill="#0D9488" />
      <path d="M38 8V18C38 19.1046 38.8954 20 40 20H50L38 8Z" fill="#0A7E74" />
      <rect x="22" y="24" width="12" height="4" rx="2" fill="#FFFFFF" />
      <rect x="22" y="32" width="20" height="3" rx="1.5" fill="#FFFFFF" />
      <rect x="22" y="39" width="20" height="3" rx="1.5" fill="#FFFFFF" />
      <rect x="22" y="46" width="14" height="3" rx="1.5" fill="#FFFFFF" />
    </svg>
  );
}

function InterviewPrepIcon({ className, ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="32" cy="16" r="6.5" fill="#0D9488" />
      <circle cx="20" cy="34" r="5.5" fill="#0A7E74" />
      <path d="M10 54C10 48.4772 14.4772 44 20 44C25.5228 44 30 48.4772 30 54V56H10V54Z" fill="#0A7E74" />
      <circle cx="44" cy="34" r="5.5" fill="#0A7E74" />
      <path d="M34 54C34 48.4772 38.4772 44 44 44C49.5228 44 54 48.4772 54 54V56H34V54Z" fill="#0A7E74" />
    </svg>
  );
}

const ICONS = {
  arrowRight: ArrowRight,
  barChart: siteIconBridge('barChart'),
  briefcase: Briefcase,
  chevronRight: ChevronRight,
  fileText: FileText,
  firstAid: Bandage,
  graduationCap: GraduationCap,
  heart: Heart,
  personBust: PersonBustIcon,
  package: Package,
  users: Users,
  familiesBust: FamiliesBustIcon,
  leafCommunity: LeafCommunityIcon,
  groceryBag: siteIconBridge('groceryBag'),
  educationalCap: EducationalCapIcon,
  suppliesBox: SuppliesBoxIcon,
  employmentBriefcase: EmploymentBriefcaseIcon,
  mentalHealthHeart: MentalHealthHeartIcon,
  communityGroup: CommunityGroupIcon,
  foodSupplies: FoodSuppliesIcon,
  referrals: ReferralsIcon,
  resumeDoc: ResumeDocIcon,
  interviewPrep: InterviewPrepIcon,
};

export function HomeIcon({ name, className, ...props }) {
  const Icon = ICONS[name] ?? Users;
  return <Icon className={className} aria-hidden {...props} />;
}
