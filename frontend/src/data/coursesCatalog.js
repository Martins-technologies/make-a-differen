/** Course catalog for the Programs & Services courses page. Labels resolve through i18n. */

import { updatedImages } from '@/data/updatedImages';

export const courseCatalog = [
  {
    slug: 'cooking-nutrition',
    key: 'cooking',
    icon: 'utensils',
    chipClass: 'bg-[#2BA86F] text-white',
    image: updatedImages.courses.cooking,
    imageFit: 'contain',
  },
  {
    slug: 'mental-health-self-care',
    key: 'mentalHealth',
    icon: 'heart',
    chipClass: 'bg-[#E06B82] text-white',
    image: updatedImages.courses.mentalHealth,
  },
  {
    slug: 'parenting-child-development',
    key: 'parenting',
    icon: 'users',
    chipClass: 'bg-[#4A8AD4] text-white',
    image: updatedImages.courses.parenting,
  },
  {
    slug: 'budgeting-financial-literacy',
    key: 'budgeting',
    icon: 'coins',
    chipClass: 'bg-[#22A06B] text-white',
    image: updatedImages.courses.budgeting,
  },
  {
    slug: 'resume-interview-preparation',
    key: 'resume',
    icon: 'briefcase',
    chipClass: 'bg-[#6B5BB8] text-white',
    image: updatedImages.courses.resume,
  },
  {
    slug: 'workplace-skills',
    key: 'workplace',
    icon: 'cog',
    chipClass: 'bg-[#4A8AD4] text-white',
    image: updatedImages.courses.workplace,
  },
  {
    slug: 'digital-literacy',
    key: 'digital',
    icon: 'laptop',
    chipClass: 'bg-[#E3923A] text-white',
    image: updatedImages.courses.digital,
    imageFit: 'contain',
  },
  {
    slug: 'english-language-support',
    key: 'english',
    icon: 'ac',
    chipClass: 'bg-[#2EB8C4] text-white',
    image: updatedImages.courses.english,
  },
  {
    slug: 'personal-safety',
    key: 'safety',
    icon: 'shield',
    chipClass: 'bg-[#E54848] text-white',
    image: updatedImages.courses.safety,
  },
  {
    slug: 'healthy-relationships',
    key: 'relationships',
    icon: 'users',
    chipClass: 'bg-[#4A8AD4] text-white',
    image: updatedImages.courses.relationships,
  },
];
