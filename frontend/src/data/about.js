/** About page structure. Photos and partner marks resolve from public when added. */

export const aboutImages = {
  hero: '/aboutushero.jfif',
  story: '/ourhero.jfif',
};

export const aboutValues = [
  { key: 'inclusion', icon: 'users', tile: 'bg-tint-mint', bubble: 'bg-secondary-50 text-secondary' },
  { key: 'dignity', icon: 'heart', tile: 'bg-tint-blush', bubble: 'bg-accent-50 text-accent' },
  { key: 'safety', icon: 'shield', tile: 'bg-tint-lilac', bubble: 'bg-primary-50 text-primary-400' },
  { key: 'education', icon: 'book', tile: 'bg-tint-mint', bubble: 'bg-secondary-50 text-secondary' },
  { key: 'equity', icon: 'scale', tile: 'bg-tint-blush', bubble: 'bg-accent-50 text-accent' },
  { key: 'accountability', icon: 'handshake', tile: 'bg-tint-sky', bubble: 'bg-primary-50 text-primary-500' },
  { key: 'community', icon: 'users', tile: 'bg-tint-turquoise', bubble: 'bg-secondary-50 text-secondary' },
];

/** Illustrated portraits only — names are added when approved bios are provided. */
export const leadershipPlaceholders = [
  { id: 'leader-1', src: '/about/leader-1.jpg', altKey: 'about.leadership.portraits.one' },
  { id: 'leader-2', src: '/about/leader-2.jpg', altKey: 'about.leadership.portraits.two' },
  { id: 'leader-3', src: '/about/leader-3.jpg', altKey: 'about.leadership.portraits.three' },
];

/** Photos of the work partners support. Official logos replace these when approved. */
export const partnerPlaceholders = [
  {
    id: 'partner-1',
    src: '/about/partner-1.jpg',
    altKey: 'about.partners.images.family',
  },
  {
    id: 'partner-2',
    src: '/about/partner-2.jpg',
    altKey: 'about.partners.images.collaboration',
  },
  {
    id: 'partner-3',
    src: '/about/partner-3.jpg',
    altKey: 'about.partners.images.families',
  },
  {
    id: 'partner-4',
    src: '/about/partner-4.jpg',
    altKey: 'about.partners.images.employment',
  },
];
