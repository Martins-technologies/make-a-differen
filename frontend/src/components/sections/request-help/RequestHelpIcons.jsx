import React from 'react';

/** Custom icons matching approved mockup for Request Help categories */
export function SupportCategoryIcon({ name, className = 'w-6 h-6' }) {
  switch (name) {
    case 'food':
      // Fork and Knife
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 2v8a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2" />
          <path d="M9 12v10" />
          <path d="M17 2v20" />
          <path d="M17 2a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3" />
        </svg>
      );

    case 'clothing':
      // T-Shirt
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
      );

    case 'hygiene':
      // Soap / Lotion Pump Dispenser Bottle
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 2h4" />
          <path d="M12 2v4" />
          <path d="M8 6h8" />
          <path d="M9 6v2" />
          <path d="M15 6v2" />
          <rect x="6" y="8" width="12" height="13" rx="3" />
          <path d="M12 12v4" />
          <path d="M10 14h4" />
        </svg>
      );

    case 'children':
      // Teddy Bear Head / Baby Icon
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8a3.5 3.5 0 1 1 3.5-3.5" />
          <path d="M18 8a3.5 3.5 0 1 0-3.5-3.5" />
          <circle cx="12" cy="13" r="7" />
          <circle cx="9.5" cy="11.5" r="1" fill="currentColor" />
          <circle cx="14.5" cy="11.5" r="1" fill="currentColor" />
          <ellipse cx="12" cy="14.5" rx="2" ry="1.5" />
        </svg>
      );

    case 'employment':
      // Briefcase
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <line x1="12" y1="12" x2="12" y2="12.01" strokeWidth="3" />
        </svg>
      );

    case 'courses':
      // Open Book
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );

    case 'community':
      // 3 People / Group
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="10" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );

    case 'other':
    default:
      // Three Dots (...)
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="12" r="1.75" fill="currentColor" />
          <circle cx="12" cy="12" r="1.75" fill="currentColor" />
          <circle cx="18" cy="12" r="1.75" fill="currentColor" />
        </svg>
      );
  }
}
