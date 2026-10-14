import { SiteIcon } from '@/components/icons/siteIcons';

const CATEGORY_ICON = {
  food: 'food',
  clothing: 'shirt',
  hygiene: 'hygiene',
  children: 'teddy',
  employment: 'briefcase',
  courses: 'book',
  community: 'users',
  other: 'ellipsis',
};

/** Custom icons matching approved mockup for Request Help categories */
export function SupportCategoryIcon({ name, className = 'h-7 w-7' }) {
  const iconName = CATEGORY_ICON[name] ?? 'ellipsis';
  return <SiteIcon name={iconName} className={className} />;
}
