/** Photography supplied in public/programsandservices for the Programs & Services page. */

export const programImages = {
  hero: '/programsandservices/heroprogramsandservices.jfif',
  women: '/programsandservices/womenssupport.jfif',
  children: '/programsandservices/childrenandyouth.jfif',
  lgbtq: '/programsandservices/lgbtq.jfif',
  family: '/programsandservices/familyandparenting.jfif',
  supplies: '/programsandservices/essentialsupplies.jfif',
};

/** Icons supplied in public/programsandservices icons (used as-is; each includes its own circle). */
const ICON_DIR = '/programsandservices%20icons';

export const programIcons = {
  women: `${ICON_DIR}/womens-support-icon.webp`,
  children: `${ICON_DIR}/children-and-youth-icon.webp`,
  lgbtq: `${ICON_DIR}/lgbtq2s-support-icon.webp`,
  family: `${ICON_DIR}/family-and-parenting-support-icon.webp`,
  supplies: `${ICON_DIR}/essential-supplies-icon.webp`,
  courses: `${ICON_DIR}/courses-icon.webp`,
  employment: `${ICON_DIR}/employment-support-icon.webp`,
  requestHelp: `${ICON_DIR}/request-help-icon.webp`,
};

export const programCategories = [
  {
    key: 'women',
    image: programImages.women,
    imageSide: 'left',
    panel: 'bg-[#FFF3F0]',
    bullet: 'bg-[#E3923A]',
  },
  {
    key: 'children',
    image: programImages.children,
    imageSide: 'right',
    panel: 'bg-[#F3FBF6]',
    bullet: 'bg-[#2F9E64]',
  },
  {
    key: 'lgbtq',
    image: programImages.lgbtq,
    imageSide: 'left',
    panel: 'bg-[#FFF4F6]',
    bullet: 'bg-[#7B62B3]',
  },
  {
    key: 'family',
    image: programImages.family,
    imageSide: 'right',
    panel: 'bg-[#F3FBF6]',
    bullet: 'bg-[#2F9E64]',
  },
  {
    key: 'supplies',
    image: programImages.supplies,
    imageSide: 'left',
    panel: 'bg-[#FFF3F0]',
    bullet: 'bg-[#E3923A]',
  },
];
