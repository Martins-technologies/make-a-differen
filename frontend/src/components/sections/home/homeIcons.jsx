import {
  ArrowRight,
  BarChart3,
  Bandage,
  Briefcase,
  ChevronRight,
  FileText,
  GraduationCap,
  Heart,
  Leaf,
  Package,
  Users,
} from 'lucide-react';

function MapleLeafIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M495.2 284.1c-14.8-1.7-27.1-10.4-33.8-23.7l-26.6-53.1c-3.1-6.1-8.5-10.7-15.1-12.7s-13.6-.9-19.3 3.1l-24.1 17c-13.1 9.2-30.7 7.9-42.5-3.1l-22.1-20.7c-5.7-5.3-8.8-12.8-8.5-20.6s4-15 10.3-19.7l30.4-22.7c11.3-8.4 17.1-22.6 14.8-36.6s-12.7-25.3-26.6-28.8l-41.9-10.5c-7.6-1.9-13.8-7-16.7-14.1s-2-15.2 2.5-21.7l19.8-28.7c7.4-10.8 7.7-24.8.8-35.8S324.9-.7 312 0l-56 3.1-56-3.1C187.1-.7 174.1 5.4 167.2 16.4s-6.6 25 .8 35.8l19.8 28.7c4.5 6.5 5.4 14.6 2.5 21.7s-9.1 12.2-16.7 14.1l-41.9 10.5c-13.9 3.5-24.3 14.8-26.6 28.8s3.5 28.2 14.8 36.6l30.4 22.7c6.3 4.7 10 11.9 10.3 19.7s-2.8 15.3-8.5 20.6l-22.1 20.7c-11.8 11-29.4 12.3-42.5 3.1l-24.1-17c-5.7-4-12.7-5.1-19.3-3.1s-12 6.6-15.1 12.7l-26.6 53.1c-6.7 13.3-19 22-33.8 23.7l-3.3.4c-3.7.4-7 2.3-9.1 5.3s-2.7 6.8-1.7 10.4c5.1 18.6 15.1 35.6 29 48.9 16.3 15.6 37 25.4 59.2 28.1 4.5.5 8.7 2.7 11.8 6.1s4.8 7.8 4.7 12.4l-1.3 54.3c-.3 13.6 5.8 26.6 16.7 35.1 10.9 8.5 25.1 11.6 38.6 8.3l26.9-6.5c10.4-2.5 21.3-1.4 31 3.2 9.7 4.6 17.5 12.5 22.1 22.2l12.7 26.6c6.4 13.4 18.8 22.3 33.6 24.3 1.9.3 3.8.4 5.7.4v70c0 13.3 10.7 24 24 24s24-10.7 24-24v-70c1.9 0 3.8-.1 5.7-.4 14.8-2 27.2-10.9 33.6-24.3l12.7-26.6c4.6-9.7 12.4-17.6 22.1-22.2 9.7-4.6 20.6-5.7 31-3.2l26.9 6.5c13.5 3.3 27.7.2 38.6-8.3 10.9-8.5 17-21.5 16.7-35.1l-1.3-54.3c-.1-4.6 1.6-9 4.7-12.4s7.3-5.6 11.8-6.1c22.2-2.7 42.9-12.5 59.2-28.1 13.9-13.3 23.9-30.3 29-48.9 1-3.6.4-7.4-1.7-10.4s-5.4-4.9-9.1-5.3l-3.3-.4z" />
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
  barChart: BarChart3,
  briefcase: Briefcase,
  chevronRight: ChevronRight,
  fileText: FileText,
  firstAid: Bandage,
  graduationCap: GraduationCap,
  heart: Heart,
  leaf: Leaf,
  mapleLeaf: MapleLeafIcon,
  package: Package,
  users: Users,
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
