/** Home page structured content — labels resolved via i18n keys in section components. */

export const heroTrustItems = [
  { icon: 'mapleLeaf', labelKey: 'home.hero.trust.strongerPeople' },
  { icon: 'users', labelKey: 'home.hero.trust.healthierFamilies' },
  { icon: 'leaf', labelKey: 'home.hero.trust.brighterCommunities' },
];

export const whoWeSupportItems = [
  {
    titleKey: 'home.whoWeSupport.women.title',
    descriptionKey: 'home.whoWeSupport.women.description',
    tint: 'cream',
    illustration: '/images/who-we-support-women.svg',
    illustrationAltKey: 'home.whoWeSupport.women.illustrationAlt',
  },
  {
    titleKey: 'home.whoWeSupport.youth.title',
    descriptionKey: 'home.whoWeSupport.youth.description',
    tint: 'sky',
    illustration: '/images/who-we-support-youth.svg',
    illustrationAltKey: 'home.whoWeSupport.youth.illustrationAlt',
  },
  {
    titleKey: 'home.whoWeSupport.lgbtq.title',
    descriptionKey: 'home.whoWeSupport.lgbtq.description',
    tint: 'lilac',
    illustration: '/images/who-we-support-pride.svg',
    illustrationAltKey: 'home.whoWeSupport.lgbtq.illustrationAlt',
  },
  {
    titleKey: 'home.whoWeSupport.families.title',
    descriptionKey: 'home.whoWeSupport.families.description',
    tint: 'peach',
    illustration: '/images/who-we-support-families.svg',
    illustrationAltKey: 'home.whoWeSupport.families.illustrationAlt',
  },
];

export const howWeHelpItems = [
  {
    key: 'courses',
    titleKey: 'home.howWeHelp.courses.title',
    descriptionKey: 'home.howWeHelp.courses.description',
    icon: 'educationalCap',
    bgClass: 'bg-[#F3F4FD]',
    to: '/courses',
  },
  {
    key: 'supplies',
    titleKey: 'home.howWeHelp.supplies.title',
    descriptionKey: 'home.howWeHelp.supplies.description',
    icon: 'suppliesBox',
    bgClass: 'bg-[#EBF8F4]',
    to: '/request-help',
  },
  {
    key: 'employment',
    titleKey: 'home.howWeHelp.employment.title',
    descriptionKey: 'home.howWeHelp.employment.description',
    icon: 'employmentBriefcase',
    bgClass: 'bg-[#EDF8FA]',
    to: '/employment',
  },
  {
    key: 'mentalHealth',
    titleKey: 'home.howWeHelp.mentalHealth.title',
    descriptionKey: 'home.howWeHelp.mentalHealth.description',
    icon: 'mentalHealthHeart',
    bgClass: 'bg-[#FFF4F0]',
    to: '/resources',
  },
  {
    key: 'community',
    titleKey: 'home.howWeHelp.community.title',
    descriptionKey: 'home.howWeHelp.community.description',
    icon: 'communityGroup',
    bgClass: 'bg-[#EFF9F6]',
    to: '/contact',
  },
];

export const featuredCourses = [
  {
    slug: 'cooking-nutrition',
    titleKey: 'home.featuredCourses.cooking.title',
    descriptionKey: 'home.featuredCourses.cooking.description',
    image: '/images/course-cooking-nutrition.jpg',
    imageAltKey: 'home.featuredCourses.cooking.imageAlt',
  },
  {
    slug: 'mental-health-self-care',
    titleKey: 'home.featuredCourses.mentalHealth.title',
    descriptionKey: 'home.featuredCourses.mentalHealth.description',
    image: '/images/course-mental-health-wellness.jpg',
    imageAltKey: 'home.featuredCourses.mentalHealth.imageAlt',
  },
  {
    slug: 'parenting-child-development',
    titleKey: 'home.featuredCourses.parenting.title',
    descriptionKey: 'home.featuredCourses.parenting.description',
    image: '/images/course-parenting-skills.jpg',
    imageAltKey: 'home.featuredCourses.parenting.imageAlt',
  },
  {
    slug: 'resume-interview-preparation',
    titleKey: 'home.featuredCourses.employment.title',
    descriptionKey: 'home.featuredCourses.employment.description',
    image: '/images/course-employment-readiness.jpg',
    imageAltKey: 'home.featuredCourses.employment.imageAlt',
  },
];

export const requestSupportPreview = [
  {
    titleKey: 'home.requestSupport.food.title',
    descriptionKey: 'home.requestSupport.food.description',
    icon: 'foodSupplies',
    bgClass: 'bg-[#FFF8F6]',
    to: '/request-help',
  },
  {
    titleKey: 'home.requestSupport.referrals.title',
    descriptionKey: 'home.requestSupport.referrals.description',
    icon: 'referrals',
    bgClass: 'bg-[#FFF8F6]',
    to: '/request-help',
  },
];

export const employmentSupportPreview = [
  {
    titleKey: 'home.employmentSupport.resume.title',
    descriptionKey: 'home.employmentSupport.resume.description',
    icon: 'resumeDoc',
    bgClass: 'bg-[#F2FAF7]',
    to: '/employment',
  },
  {
    titleKey: 'home.employmentSupport.interview.title',
    descriptionKey: 'home.employmentSupport.interview.description',
    icon: 'interviewPrep',
    bgClass: 'bg-[#F2FAF7]',
    to: '/employment',
  },
];

export const impactStats = [
  { icon: 'users', labelKey: 'home.impact.peopleSupported' },
  { icon: 'graduationCap', labelKey: 'home.impact.coursesCompleted' },
  { icon: 'package', labelKey: 'home.impact.suppliesDistributed' },
  { icon: 'barChart', labelKey: 'home.impact.employmentOutcomes' },
];

export const getInvolvedCards = [
  {
    titleKey: 'home.getInvolved.volunteer.title',
    descriptionKey: 'home.getInvolved.volunteer.description',
    image: '/images/get-involved-volunteer.jpg',
    imageAltKey: 'home.getInvolved.volunteer.imageAlt',
    to: '/get-involved/volunteer',
  },
  {
    titleKey: 'home.getInvolved.donateFunds.title',
    descriptionKey: 'home.getInvolved.donateFunds.description',
    image: '/images/get-involved-donate-funds.jpg',
    imageAltKey: 'home.getInvolved.donateFunds.imageAlt',
    to: '/get-involved/donate',
  },
  {
    titleKey: 'home.getInvolved.donateSupplies.title',
    descriptionKey: 'home.getInvolved.donateSupplies.description',
    image: '/images/get-involved-donate-supplies.jpg',
    imageAltKey: 'home.getInvolved.donateSupplies.imageAlt',
    to: '/get-involved/donate-supplies',
  },
  {
    titleKey: 'home.getInvolved.partner.title',
    descriptionKey: 'home.getInvolved.partner.description',
    image: '/images/get-involved-community-partner.jpg',
    imageAltKey: 'home.getInvolved.partner.imageAlt',
    to: '/get-involved/partner',
  },
];
