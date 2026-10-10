/** Inline page inset. Kept out of the stylesheet so a production CSS pass cannot drop it. */
export const PAGE_GUTTER = 'clamp(1.25rem, 3vw, 2.75rem)';

/** Whole site sits 10px closer to the left edge. Right inset stays put. */
export const PAGE_LEFT_SHIFT = '10px';

export const PAGE_GUTTER_LEFT = `max(0px, calc(${PAGE_GUTTER} - ${PAGE_LEFT_SHIFT}))`;

/**
 * A centered max-width shell only travels half as far when the left gutter shrinks.
 * This pulls it the remaining 5px so hero copy and the rest of the page move a full 10px.
 */
export const CONTAINER_CENTER_NUDGE = '5px';

export function containerMarginLeft(maxWidth = 'var(--container-max)') {
  return `max(0px, calc((100% - min(100%, ${maxWidth})) / 2 - ${CONTAINER_CENTER_NUDGE}))`;
}
