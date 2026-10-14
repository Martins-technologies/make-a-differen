import { heroTrustItems, homeIcons } from '@/data/home';

/** Photography supplied in public/donatesupplies for the Donate page. */

export const donateImages = {
  hero: '/babygirl.webp',
  supplies: '/donatesupplies/babygirl.webp',
  educationalCourses: '/donatesupplies/02_Your_Support_Educational_Courses.webp',
  essentialSupplies: '/donatesupplies/03_Your_Support_Essential_Supplies.webp',
  employmentSupport: '/donatesupplies/employmentsupport.jfif',
  familyCommunity: '/donatesupplies/familyandcommunitysupport.jfif',
  corporateMatching: '/donatesupplies/corporatemeeting.jfif',
};

/** Icons supplied in public/Donate Page Icons for the Donate page (used as-is). */
const ICON_DIR = '/Donate%20Page%20Icons';

export const donateIcons = {
  strongerPeople: `${ICON_DIR}/01_stronger_people.svg`,
  healthierFamilies: `${ICON_DIR}/02_healthier_families_home.svg`,
  brighterCommunities: `${ICON_DIR}/03_brighter_communities_leaf.svg`,
  oneTime: `${ICON_DIR}/04_one_time_donation_heart.svg`,
  monthly: `${ICON_DIR}/05_monthly_donation_calendar.svg`,
  course: `${ICON_DIR}/06_sponsor_course_graduation_cap.svg`,
  family: `${ICON_DIR}/07_sponsor_family.svg`,
  supplies: `${ICON_DIR}/08_donate_supplies_box.svg`,
  corporate: `${ICON_DIR}/09_corporate_matching_briefcase.svg`,
  food: `${ICON_DIR}/10_food.svg`,
  clothing: `${ICON_DIR}/11_clothing.svg`,
  hygiene: `${ICON_DIR}/12_hygiene_products.svg`,
  school: `${ICON_DIR}/13_school_supplies_backpack.svg`,
  baby: `${ICON_DIR}/14_baby_parenting_bottle.svg`,
  corporateGift: `${ICON_DIR}/15_corporate_matching_gift.svg`,
};

/** Hero trust bar items using the supplied Donate page icons 01–03. */
const TRUST_ICONS = [donateIcons.strongerPeople, donateIcons.healthierFamilies, donateIcons.brighterCommunities];

export const trustBarItems = heroTrustItems.map((item, index) => ({ ...item, iconSrc: TRUST_ICONS[index] }));

/** Home hero trust bar: supplied home icons 02–03 where they exist (no healthier-families icon was supplied). */
export const homeTrustBarItems = trustBarItems.map((item) => {
  if (item.labelKey.endsWith('strongerPeople')) return { ...item, iconSrc: homeIcons.strongerPeople, iconZoom: 'scale-[2.6]' };
  if (item.labelKey.endsWith('brighterCommunities')) {
    return { ...item, iconSrc: homeIcons.brighterCommunities, iconZoom: 'scale-[2.6]' };
  }
  return item;
});
