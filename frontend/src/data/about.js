/** About page structure. Photos and partner marks resolve from public/images when added. */

import { updatedImages } from '@/data/updatedImages';

export const aboutImages = {
  hero: '/images/about-hero-community.jpg',
  story: updatedImages.ourStory,
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

/** Silhouette cards only — names are added when approved bios are provided. */
export const leadershipPlaceholders = [
  { id: 'leader-1', bubble: 'bg-primary-100 text-primary-400', tile: 'bg-tint-lilac' },
  { id: 'leader-2', bubble: 'bg-secondary-100 text-secondary', tile: 'bg-tint-mint' },
  { id: 'leader-3', bubble: 'bg-accent-100 text-accent-700', tile: 'bg-tint-peach' },
];

/** Logo files can be dropped in later; until then each slot stays a placeholder. */
export const partnerPlaceholders = [
  { id: 'partner-1', src: '/images/about-partner-1.png' },
  { id: 'partner-2', src: '/images/about-partner-2.png' },
  { id: 'partner-3', src: '/images/about-partner-3.png' },
  { id: 'partner-4', src: '/images/about-partner-4.png' },
];
