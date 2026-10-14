/** Home page structured content — labels resolved via i18n keys in section components. */

export const heroTrustItems = [
  { icon: 'personBust', labelKey: 'home.hero.trust.strongerPeople', iconClass: 'text-accent' },
  { icon: 'familiesBust', labelKey: 'home.hero.trust.healthierFamilies', iconClass: 'text-secondary' },
  { icon: 'leafCommunity', labelKey: 'home.hero.trust.brighterCommunities', iconClass: 'text-secondary' },
];

export const whoWeSupportItems = [
  {
    titleKey: 'home.whoWeSupport.women.title',
    descriptionKey: 'home.whoWeSupport.women.description',
    tint: 'cream',
    illustration: '/extraimages/Gemini_Generated_Image_clk2a5clk2a5clk2.jfif',
    illustrationAltKey: 'home.whoWeSupport.women.illustrationAlt',
    imageClassName: 'h-20 w-20',
    imageRounded: true,
  },
  {
    titleKey: 'home.whoWeSupport.youth.title',
    descriptionKey: 'home.whoWeSupport.youth.description',
    tint: 'sky',
    illustration: '/extraimages/boy.jfif',
    illustrationAltKey: 'home.whoWeSupport.youth.illustrationAlt',
    imageClassName: 'h-20 w-20',
    imageRounded: true,
  },
  {
    titleKey: 'home.whoWeSupport.lgbtq.title',
    descriptionKey: 'home.whoWeSupport.lgbtq.description',
    tint: 'lilac',
    illustration: '/extraimages/lgbtq.jfif',
    illustrationAltKey: 'home.whoWeSupport.lgbtq.illustrationAlt',
    imageClassName: 'h-24 w-24',
    imageRounded: false,
  },
  {
    titleKey: 'home.whoWeSupport.families.title',
    descriptionKey: 'home.whoWeSupport.families.description',
    tint: 'peach',
    illustration: '/extraimages/parents.jfif',
    illustrationAltKey: 'home.whoWeSupport.families.illustrationAlt',
    imageClassName: 'h-24 w-28',
    imageRounded: false,
  },
];

export const howWeHelpItems = [
  {
    key: 'courses',
    titleKey: 'home.howWeHelp.courses.title',
    descriptionKey: 'home.howWeHelp.courses.description',
    icon: 'educationalCap',
    iconWrap: 'bg-[#E8EAF8]',
    bgClass: 'bg-[#F3F4FD]',
    to: '/courses',
  },
  {
    key: 'supplies',
    titleKey: 'home.howWeHelp.supplies.title',
    descriptionKey: 'home.howWeHelp.supplies.description',
    icon: 'suppliesBox',
    iconWrap: 'bg-[#D9F2EB]',
    bgClass: 'bg-[#EBF8F4]',
    to: '/request-help',
  },
  {
    key: 'employment',
    titleKey: 'home.howWeHelp.employment.title',
    descriptionKey: 'home.howWeHelp.employment.description',
    icon: 'employmentBriefcase',
    iconWrap: 'bg-[#D6EEF3]',
    bgClass: 'bg-[#EDF8FA]',
    to: '/employment',
  },
  {
    key: 'mentalHealth',
    titleKey: 'home.howWeHelp.mentalHealth.title',
    descriptionKey: 'home.howWeHelp.mentalHealth.description',
    icon: 'mentalHealthHeart',
    iconWrap: 'bg-[#FFE4DC]',
    bgClass: 'bg-[#FFF4F0]',
    to: '/resources',
  },
  {
    key: 'community',
    titleKey: 'home.howWeHelp.community.title',
    descriptionKey: 'home.howWeHelp.community.description',
    icon: 'communityGroup',
    iconWrap: 'bg-[#D9F2EB]',
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
    icon: 'groceryBag',
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
    to: '/get-involved/donate#donate-supplies',
  },
  {
    titleKey: 'home.getInvolved.partner.title',
    descriptionKey: 'home.getInvolved.partner.description',
    image: '/images/get-involved-community-partner.jpg',
    imageAltKey: 'home.getInvolved.partner.imageAlt',
    to: '/get-involved/partner',
  },
];
