/** Primary navigation structure (matches approved mockup). */

export const PRIMARY_NAV = [
  { to: '/', labelKey: 'nav.home', end: true },
  { to: '/about', labelKey: 'nav.about' },
  {
    to: '/programs',
    labelKey: 'nav.programs',
    children: [
      { to: '/courses', labelKey: 'nav.courses' },
      { to: '/employment', labelKey: 'nav.employment' },
      { to: '/request-help', labelKey: 'nav.requestHelp' },
    ],
  },
  {
    to: '/get-involved',
    labelKey: 'nav.getInvolved',
    children: [
      { to: '/get-involved/volunteer', labelKey: 'footer.getInvolvedVolunteer' },
      { to: '/get-involved/donate', labelKey: 'footer.getInvolvedDonateFunds' },
      { to: '/get-involved/donate-supplies', labelKey: 'footer.getInvolvedDonateSupplies' },
      { to: '/get-involved/partner', labelKey: 'footer.getInvolvedPartner' },
    ],
  },
  { to: '/resources', labelKey: 'nav.resources' },
  { to: '/contact', labelKey: 'nav.contact' },
];

export const FOOTER_NAV_COLUMNS = [
  {
    titleKey: 'nav.about',
    links: [
      { to: '/about#mission', labelKey: 'footer.aboutMission' },
      { to: '/about#values', labelKey: 'footer.aboutApproach' },
      { to: '/about#leadership', labelKey: 'footer.aboutTeam' },
    ],
  },
  {
    titleKey: 'footer.programsServices',
    links: [
      { to: '/courses', labelKey: 'footer.programCourses' },
      { to: '/request-help', labelKey: 'footer.programSupplies' },
      { to: '/employment', labelKey: 'footer.programEmployment' },
      { to: '/resources', labelKey: 'footer.programMentalHealth' },
      { to: '/contact', labelKey: 'footer.programCommunity' },
    ],
  },
  {
    titleKey: 'nav.getInvolved',
    links: [
      { to: '/get-involved/volunteer', labelKey: 'footer.getInvolvedVolunteer' },
      { to: '/get-involved/donate', labelKey: 'footer.getInvolvedDonateFunds' },
      { to: '/get-involved/donate-supplies', labelKey: 'footer.getInvolvedDonateSupplies' },
      { to: '/get-involved/partner', labelKey: 'footer.getInvolvedPartner' },
    ],
  },
  {
    titleKey: 'nav.resources',
    links: [
      { to: '/resources', labelKey: 'footer.resourcesHelpfulLinks' },
      { to: '/about#partners', labelKey: 'footer.resourcesPartners' },
      { to: '/events', labelKey: 'footer.resourcesNews' },
    ],
  },
  {
    titleKey: 'nav.contact',
    links: [
      { to: '/contact', labelKey: 'footer.contactGetInTouch' },
      { to: '/contact', labelKey: 'footer.contactLocations' },
    ],
  },
];

export const DONATE_PATH = '/get-involved/donate';
