/** About page structure. Photos resolve from public when added. */

export const aboutImages = {
  hero: '/01_Our_Story.webp',
  story: '/new/02_About_Our_Story.webp',
  community: '/updated/11_Multigenerational_Community_Group.webp',
};

/** Icons supplied in public/aboutus icons for the About Us page (used as-is; each includes its own circle). */
const ICON_DIR = '/aboutus%20icons';

export const aboutIcons = {
  mission: `${ICON_DIR}/01-our-mission.webp`,
  vision: `${ICON_DIR}/02-our-vision.webp`,
  inclusion: `${ICON_DIR}/03-inclusion.webp`,
  dignity: `${ICON_DIR}/04-dignity.webp`,
  safety: `${ICON_DIR}/05-safety.webp`,
  education: `${ICON_DIR}/06-education.webp`,
  equity: `${ICON_DIR}/07-equity.webp`,
  accountability: `${ICON_DIR}/08-accountability.webp`,
  community: `${ICON_DIR}/09-community.webp`,
  reports: `${ICON_DIR}/10-annual-reports.webp`,
  registration: `${ICON_DIR}/11-registration-information.webp`,
};

export const aboutValues = [
  {
    key: 'inclusion',
    tile: 'bg-tint-mint',
  },
  {
    key: 'dignity',
    tile: 'bg-tint-blush',
  },
  {
    key: 'safety',
    tile: 'bg-tint-lilac',
  },
  {
    key: 'education',
    tile: 'bg-tint-mint',
  },
  {
    key: 'equity',
    tile: 'bg-tint-blush',
  },
  {
    key: 'accountability',
    tile: 'bg-tint-sky',
  },
  {
    key: 'community',
    tile: 'bg-tint-turquoise',
  },
];
