import {
  Briefcase,
  Calendar,
  Coins,
  FileText,
  Heart,
  Laptop,
  Monitor,
  Settings,
  Shield,
  Target,
  UserRound,
  Users,
  Utensils,
  Accessibility,
} from 'lucide-react';
import { cn } from '@/utils/cn';

const ICONS = {
  utensils: Utensils,
  heart: Heart,
  users: Users,
  coins: Coins,
  briefcase: Briefcase,
  cog: Settings,
  laptop: Laptop,
  shield: Shield,
  file: FileText,
  target: Target,
  user: UserRound,
  calendar: Calendar,
  monitor: Monitor,
  accessibility: Accessibility,
};

export function CourseIcon({ name, className }) {
  if (name === 'ac') {
    return (
      <span className={cn('text-sm font-bold leading-none tracking-tight', className)} aria-hidden>
        AC
      </span>
    );
  }

  const Icon = ICONS[name] ?? Utensils;

  return <Icon className={cn(name === 'heart' && 'fill-current', className)} aria-hidden />;
}
