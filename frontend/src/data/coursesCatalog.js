/** Course catalog for the Programs & Services courses page. Labels resolve through i18n. */

import { updatedImages } from '@/data/updatedImages';

/** Icons supplied in public/courses icons (used as-is; each includes its own circle). */
const ICON_DIR = '/courses%20icons';

export const courseIcons = {
  cooking: `${ICON_DIR}/01-cooking-and-nutrition.webp`,
  mentalHealth: `${ICON_DIR}/02-mental-health-and-self-care.webp`,
  parenting: `${ICON_DIR}/03-parenting-and-child-development.webp`,
  budgeting: `${ICON_DIR}/04-budgeting-and-financial-literacy.webp`,
  resume: `${ICON_DIR}/05-resume-and-interview-preparation.webp`,
  workplace: `${ICON_DIR}/06-workplace-skills.webp`,
  digital: `${ICON_DIR}/07-digital-literacy.webp`,
  english: `${ICON_DIR}/08-english-language-support.webp`,
  safety: `${ICON_DIR}/09-personal-safety.webp`,
  relationships: `${ICON_DIR}/10-healthy-relationships.webp`,
  description: `${ICON_DIR}/11-course-description.webp`,
  audience: `${ICON_DIR}/12-who-it-is-for.webp`,
  outcomes: `${ICON_DIR}/13-learning-outcomes.webp`,
  instructor: `${ICON_DIR}/14-instructor.webp`,
  schedule: `${ICON_DIR}/15-date-and-duration.webp`,
  format: `${ICON_DIR}/16-format.webp`,
  accessibility: `${ICON_DIR}/17-accessibility-information.webp`,
  viewDetails: `${ICON_DIR}/18-view-details-arrow.webp`,
};

export const courseCatalog = [
  {
    slug: 'cooking-nutrition',
    key: 'cooking',
    icon: courseIcons.cooking,
    image: updatedImages.courses.cooking,
    imageFit: 'contain',
  },
  {
    slug: 'mental-health-self-care',
    key: 'mentalHealth',
    icon: courseIcons.mentalHealth,
    image: updatedImages.courses.mentalHealth,
  },
  {
    slug: 'parenting-child-development',
    key: 'parenting',
    icon: courseIcons.parenting,
    image: updatedImages.courses.parenting,
  },
  {
    slug: 'budgeting-financial-literacy',
    key: 'budgeting',
    icon: courseIcons.budgeting,
    image: updatedImages.courses.budgeting,
  },
  {
    slug: 'resume-interview-preparation',
    key: 'resume',
    icon: courseIcons.resume,
    image: updatedImages.courses.resume,
  },
  {
    slug: 'workplace-skills',
    key: 'workplace',
    icon: courseIcons.workplace,
    image: updatedImages.courses.workplace,
  },
  {
    slug: 'digital-literacy',
    key: 'digital',
    icon: courseIcons.digital,
    image: updatedImages.courses.digital,
    imageFit: 'contain',
  },
  {
    slug: 'english-language-support',
    key: 'english',
    icon: courseIcons.english,
    image: updatedImages.courses.english,
  },
  {
    slug: 'personal-safety',
    key: 'safety',
    icon: courseIcons.safety,
    image: updatedImages.courses.safety,
  },
  {
    slug: 'healthy-relationships',
    key: 'relationships',
    icon: courseIcons.relationships,
    image: updatedImages.courses.relationships,
  },
];
