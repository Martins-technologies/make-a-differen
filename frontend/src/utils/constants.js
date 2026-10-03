export const NAV_ITEMS = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/programs', labelKey: 'nav.programs' },
  { to: '/courses', labelKey: 'nav.courses' },
  { to: '/employment', labelKey: 'nav.employment' },
  { to: '/request-help', labelKey: 'nav.requestHelp' },
  { to: '/get-involved', labelKey: 'nav.getInvolved' },
  { to: '/resources', labelKey: 'nav.resources' },
  { to: '/contact', labelKey: 'nav.contact' },
];

export const FOOTER_LEGAL_LINKS = [
  { to: '/accessibility', labelKey: 'footer.accessibility' },
  { to: '/privacy', labelKey: 'footer.privacy' },
  { to: '/safeguarding', labelKey: 'footer.communityCare' },
];

export const POLICY_LINKS = [
  { to: '/privacy', labelKey: 'footer.privacy' },
  { to: '/terms', labelKey: 'footer.terms' },
  { to: '/accessibility', labelKey: 'footer.accessibility' },
  { to: '/safeguarding', labelKey: 'footer.safeguarding' },
  { to: '/inclusion-policy', labelKey: 'footer.inclusion' },
  { to: '/donation-policy', labelKey: 'footer.donation' },
  { to: '/complaints', labelKey: 'footer.complaints' },
];

export const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';
