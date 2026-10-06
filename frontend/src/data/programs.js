/** Programs & Services overview. Drop photos into public/images using these names. */

export const programImages = {
  hero: '/images/programs-hero.jpg',
  women: '/images/programs-womens-support.jpg',
  children: '/images/programs-children-youth.jpg',
  lgbtq: '/images/programs-lgbtq2s-support.jpg',
  family: '/images/programs-family-parenting.jpg',
  supplies: '/images/programs-essential-supplies.jpg',
};

export const programCategories = [
  {
    key: 'women',
    icon: 'users',
    image: programImages.women,
    imageSide: 'left',
    panel: 'bg-[#FFF3F0]',
    iconWrap: 'bg-[#FDE3DC] text-[#E36A58]',
    bullet: 'bg-[#E3923A]',
  },
  {
    key: 'children',
    icon: 'users',
    image: programImages.children,
    imageSide: 'right',
    panel: 'bg-[#F3FBF6]',
    iconWrap: 'bg-[#E3F6EC] text-[#1F8F78]',
    bullet: 'bg-[#2F9E64]',
  },
  {
    key: 'lgbtq',
    icon: 'heart',
    image: programImages.lgbtq,
    imageSide: 'left',
    panel: 'bg-[#FFF4F6]',
    iconWrap: 'bg-[#FDE4E8] text-[#E25B78]',
    bullet: 'bg-[#7B62B3]',
  },
  {
    key: 'family',
    icon: 'users',
    image: programImages.family,
    imageSide: 'right',
    panel: 'bg-[#F3FBF6]',
    iconWrap: 'bg-[#E3F6EC] text-[#1F8F78]',
    bullet: 'bg-[#2F9E64]',
  },
  {
    key: 'supplies',
    icon: 'package',
    image: programImages.supplies,
    imageSide: 'left',
    panel: 'bg-[#FFF3F0]',
    iconWrap: 'bg-[#FDE3DC] text-[#E36A58]',
    bullet: 'bg-[#E3923A]',
  },
];

export const relatedSubpages = [
  { key: 'courses', to: '/courses', icon: 'cap' },
  { key: 'employment', to: '/employment', icon: 'briefcase' },
  { key: 'requestHelp', to: '/request-help', icon: 'heart' },
];
