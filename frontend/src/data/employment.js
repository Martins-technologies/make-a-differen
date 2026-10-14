import { employmentSupportImages } from '@/data/employmentImages';



export const employmentImages = {

  hero: employmentSupportImages.hero,

  appointment: employmentSupportImages.appointment,

  opportunities: employmentSupportImages.opportunities,

};



/** Icons supplied in public/employment (used as-is). */
const ICON_DIR = '/employment';

export const employmentIcons = {
  resume: `${ICON_DIR}/01_resume_and_cover_letter_assistance.webp`,
  interview: `${ICON_DIR}/02_interview_preparation.webp`,
  workshops: `${ICON_DIR}/03_job_search_workshops.webp`,
  communication: `${ICON_DIR}/04_workplace_communication.webp`,
  skills: `${ICON_DIR}/05_skills_and_certification_resources.webp`,
  directory: `${ICON_DIR}/06_inclusive_employer_directory.webp`,
  calendar: `${ICON_DIR}/07_book_appointment_calendar.webp`,
  arrow: `${ICON_DIR}/08_job_opportunities_arrow.webp`,
  laptop: `${ICON_DIR}/09_future_job_board_laptop.webp`,
  rays: `${ICON_DIR}/10_future_board_accent_rays.webp`,
  mapleLeaf: `${ICON_DIR}/11_canadian_maple_leaf.webp`,
};

export const employmentServices = [

  { key: 'resume', image: employmentSupportImages.resume },

  { key: 'interview', image: employmentSupportImages.interview },

  { key: 'workshops', image: employmentSupportImages.workshops },

  { key: 'communication', image: employmentSupportImages.communication },

  { key: 'skills', image: employmentSupportImages.skills },

  { key: 'directory', image: employmentSupportImages.directory },

];


