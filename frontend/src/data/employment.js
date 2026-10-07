import { updatedImages } from '@/data/updatedImages';

/** Employment support page. Approved photos live in public/updated. */

export const employmentImages = {
  hero: updatedImages.employment.hero,
  appointment: updatedImages.employment.appointment,
  opportunities: updatedImages.employment.opportunities,
};

export const employmentServices = [
  { key: 'resume', icon: 'resume', tone: 'coral', image: '/images/employment-resume.jpg' },
  { key: 'interview', icon: 'interview', tone: 'teal', image: '/images/employment-interview.jpg' },
  { key: 'workshops', icon: 'workshops', tone: 'coral', image: updatedImages.employment.workshops },
  { key: 'communication', icon: 'communication', tone: 'teal', image: '/images/employment-communication.jpg' },
  { key: 'skills', icon: 'skills', tone: 'coral', image: '/images/employment-skills.jpg' },
  { key: 'directory', icon: 'directory', tone: 'teal', image: '/images/employment-directory.jpg' },
];
