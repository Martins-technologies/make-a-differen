/** Course catalog for the Programs & Services courses page. Labels resolve through i18n. */

import { updatedImages } from '@/data/updatedImages';

export const courseCatalog = [
  {
    slug: 'cooking-nutrition',
    key: 'cooking',
    icon: 'utensils',
    chipClass: 'bg-tint-mint text-secondary',
    image: updatedImages.courses.cooking,
    imageFit: 'contain',
  },
  {
    slug: 'mental-health-self-care',
    key: 'mentalHealth',
    icon: 'heart',
    chipClass: 'bg-tint-blush text-accent',
    image: updatedImages.courses.mentalHealth,
  },
  {
    slug: 'parenting-child-development',
    key: 'parenting',
    icon: 'users',
    chipClass: 'bg-tint-sky text-primary',
    image: updatedImages.courses.parenting,
  },
  {
    slug: 'budgeting-financial-literacy',
    key: 'budgeting',
    icon: 'coins',
    chipClass: 'bg-tint-mint text-secondary',
    image: updatedImages.courses.budgeting,
  },
  {
    slug: 'resume-interview-preparation',
    key: 'resume',
    icon: 'briefcase',
    chipClass: 'bg-tint-lilac text-primary',
    image: updatedImages.courses.resume,
  },
  {
    slug: 'workplace-skills',
    key: 'workplace',
    icon: 'cog',
    chipClass: 'bg-tint-sky text-primary',
    image: updatedImages.courses.workplace,
  },
  {
    slug: 'digital-literacy',
    key: 'digital',
    icon: 'laptop',
    chipClass: 'bg-tint-cream text-warning',
    image: updatedImages.courses.digital,
    imageFit: 'contain',
  },
  {
    slug: 'english-language-support',
    key: 'english',
    icon: 'ac',
    chipClass: 'bg-tint-turquoise text-secondary',
    image: updatedImages.courses.english,
  },
  {
    slug: 'personal-safety',
    key: 'safety',
    icon: 'shield',
    chipClass: 'bg-tint-blush text-accent',
    image: updatedImages.courses.safety,
  },
  {
    slug: 'healthy-relationships',
    key: 'relationships',
    icon: 'users',
    chipClass: 'bg-tint-sky text-primary',
    image: updatedImages.courses.relationships,
  },
];
