/** Resources page photography served from public/. */
export const resourceImages = {
  hero: '/new/05_Resources_Hero.webp',
};

/** Icons supplied in public/resource spage icons (used as-is; each includes its own circle). */
const ICON_DIR = '/resource%20spage%20icons';

export const resourceIcons = {
  mentalHealth: `${ICON_DIR}/01_mental_health.png`,
  parenting: `${ICON_DIR}/02_parenting.png`,
  nutrition: `${ICON_DIR}/03_nutrition.png`,
  employment: `${ICON_DIR}/04_employment.png`,
  lgbtq: `${ICON_DIR}/05_lgbtq2s_inclusion.png`,
  women: `${ICON_DIR}/06_womens_support.png`,
  children: `${ICON_DIR}/07_children_and_youth.png`,
  financial: `${ICON_DIR}/08_financial_literacy.png`,
  housing: `${ICON_DIR}/09_housing_community_services.png`,
  requestHelp: `${ICON_DIR}/10_request_help.png`,
  programs: `${ICON_DIR}/11_programs_services.png`,
  contact: `${ICON_DIR}/12_contact_us.png`,
  facebook: `${ICON_DIR}/13_facebook.png`,
  instagram: `${ICON_DIR}/14_instagram.png`,
  linkedin: `${ICON_DIR}/15_linkedin.png`,
  youtube: `${ICON_DIR}/16_youtube.png`,
};

export const resourceTopics = [
  {
    key: 'mentalHealth',
    cardBg: 'bg-[#E8F6F3]',
  },
  {
    key: 'parenting',
    cardBg: 'bg-[#FDECEE]',
  },
  {
    key: 'nutrition',
    cardBg: 'bg-[#E8F7F4]',
  },
  {
    key: 'employment',
    cardBg: 'bg-[#EEEAF8]',
  },
  {
    key: 'lgbtq',
    cardBg: 'bg-[#F3EEF8]',
  },
  {
    key: 'women',
    cardBg: 'bg-[#FDECEE]',
  },
  {
    key: 'children',
    cardBg: 'bg-[#E8F1FB]',
  },
  {
    key: 'financial',
    cardBg: 'bg-[#FDEEDC]',
  },
  {
    key: 'housing',
    cardBg: 'bg-[#EEEAF8]',
  },
];

export const resourceSupportLinks = [
  {
    key: 'requestHelp',
    to: '/request-help',
    buttonClass: 'bg-[#E7F0FE] text-[#2563EB] hover:bg-[#D6E6FD]',
  },
  {
    key: 'programs',
    to: '/programs',
    buttonClass: 'bg-[#E4F6F2] text-[#0F766E] hover:bg-[#D2EEE8]',
  },
  {
    key: 'contact',
    to: '/contact',
    buttonClass: 'bg-accent text-accent-contrast hover:bg-accent-700',
  },
];
