import { Link, NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { Heart } from 'lucide-react';

import { cn } from '@/utils/cn';

import { buttonVariants } from '@/components/ui/Button';

import { DONATE_PATH, PRIMARY_NAV } from './navConfig';

export function MobileMenu({ open, onClose }) {
  const { t } = useTranslation();

  if (!open) return null;

  return (
    <div className="border-t border-border bg-surface xl:hidden" id="mobile-nav">
      <nav aria-label="Mobile">
        <ul className="flex flex-col py-2">
          {PRIMARY_NAV.map((item) => (
            <li key={item.labelKey}>
              <NavLink
                to={item.to}

                end={item.end}

                onClick={onClose}

                className={({ isActive }) =>
                  cn(
                    'text-nav flex min-h-11 items-center px-4 text-primary hover:bg-surface-alt',

                    isActive && 'bg-surface-alt font-semibold',
                  )
                }
              >
                {t(item.labelKey)}
              </NavLink>

              {item.children ? (
                <ul className="border-l border-border pb-2 pl-4">
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <NavLink
                        to={child.to}

                        onClick={onClose}

                        className={({ isActive }) =>
                          cn(
                            'text-body flex min-h-11 items-center px-4 text-text hover:bg-surface-alt',

                            isActive && 'font-medium text-primary',
                          )
                        }
                      >
                        {t(child.labelKey)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}

          <li className="px-4 py-3">
            <Link
              to={DONATE_PATH}

              onClick={onClose}

              className={cn(buttonVariants({ variant: 'cta', size: 'md' }), 'w-full')}
            >
              <Heart className="h-4 w-4 fill-current" aria-hidden />

              {t('nav.donate')}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
