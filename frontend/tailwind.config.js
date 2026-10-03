/** @type {import('tailwindcss').Config} */
const withOpacity = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: withOpacity('--color-bg'),
        surface: withOpacity('--color-surface'),
        'surface-alt': withOpacity('--color-surface-alt'),
        'surface-impact': withOpacity('--color-surface-impact'),
        text: withOpacity('--color-text'),
        muted: withOpacity('--color-text-muted'),
        'primary-contrast': withOpacity('--color-primary-contrast'),
        'secondary-contrast': withOpacity('--color-secondary-contrast'),
        'accent-contrast': withOpacity('--color-accent-contrast'),
        success: withOpacity('--color-success'),
        warning: withOpacity('--color-warning'),
        danger: withOpacity('--color-danger'),
        border: withOpacity('--color-border'),
        'focus-ring': withOpacity('--color-focus-ring'),
        primary: {
          DEFAULT: withOpacity('--color-primary'),
          contrast: withOpacity('--color-primary-contrast'),
          50: withOpacity('--color-primary-50'),
          100: withOpacity('--color-primary-100'),
          200: withOpacity('--color-primary-200'),
          300: withOpacity('--color-primary-300'),
          400: withOpacity('--color-primary-400'),
          500: withOpacity('--color-primary-500'),
          600: withOpacity('--color-primary-600'),
          700: withOpacity('--color-primary-700'),
          800: withOpacity('--color-primary-800'),
          900: withOpacity('--color-primary-900'),
        },
        secondary: {
          DEFAULT: withOpacity('--color-secondary'),
          contrast: withOpacity('--color-secondary-contrast'),
          50: withOpacity('--color-secondary-50'),
          100: withOpacity('--color-secondary-100'),
          200: withOpacity('--color-secondary-200'),
          300: withOpacity('--color-secondary-300'),
          400: withOpacity('--color-secondary-400'),
          500: withOpacity('--color-secondary-500'),
          600: withOpacity('--color-secondary-600'),
          700: withOpacity('--color-secondary-700'),
          800: withOpacity('--color-secondary-800'),
          900: withOpacity('--color-secondary-900'),
        },
        accent: {
          DEFAULT: withOpacity('--color-accent'),
          contrast: withOpacity('--color-accent-contrast'),
          50: withOpacity('--color-accent-50'),
          100: withOpacity('--color-accent-100'),
          200: withOpacity('--color-accent-200'),
          300: withOpacity('--color-accent-300'),
          400: withOpacity('--color-accent-400'),
          500: withOpacity('--color-accent-500'),
          600: withOpacity('--color-accent-600'),
          700: withOpacity('--color-accent-700'),
          800: withOpacity('--color-accent-800'),
          900: withOpacity('--color-accent-900'),
        },
        tint: {
          lilac: withOpacity('--color-tint-lilac'),
          mint: withOpacity('--color-tint-mint'),
          sky: withOpacity('--color-tint-sky'),
          peach: withOpacity('--color-tint-peach'),
          turquoise: withOpacity('--color-tint-turquoise'),
          teal: withOpacity('--color-tint-teal'),
          cream: withOpacity('--color-tint-cream'),
          blush: withOpacity('--color-tint-blush'),
          slate: withOpacity('--color-tint-slate'),
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      fontWeight: {
        nav: 'var(--text-nav-weight)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        header: 'var(--shadow-header)',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
      spacing: {
        section: 'var(--section-padding-y)',
        'section-lg': 'var(--section-padding-y-lg)',
      },
      transitionDuration: {
        DEFAULT: 'var(--motion-duration)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--motion-ease)',
      },
    },
  },
  plugins: [],
};
