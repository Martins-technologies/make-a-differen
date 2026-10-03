import { Link, NavLink, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { ChevronDown } from 'lucide-react';

import { cn } from '@/utils/cn';

function isNavItemActive(pathname, to, children = []) {
  if (pathname === to || pathname.startsWith(`${to}/`)) return true;

  return children.some((child) => pathname === child.to || pathname.startsWith(`${child.to}/`));
}

export function NavDropdown({ item, onNavigate }) {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const { to, labelKey, children } = item;

  const isActive = isNavItemActive(pathname, to, children);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={cn(
          'text-nav group inline-flex min-h-11 items-center gap-1 rounded-sm px-3 text-primary outline-none transition-colors hover:text-primary-700 focus-visible:ring-2 focus-visible:ring-focus-ring',

          isActive && 'underline decoration-accent decoration-2 underline-offset-8',
        )}
      >
        {t(labelKey)}

        <ChevronDown
          className="h-4 w-4 text-muted transition-transform group-data-[state=open]:rotate-180"

          aria-hidden
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[14rem] rounded-lg border border-border bg-surface p-2 shadow-md"

          sideOffset={8}

          align="start"
        >
          <DropdownMenu.Item asChild>
            <Link
              to={to}

              className="text-body flex min-h-11 cursor-pointer select-none items-center rounded-md px-3 font-medium text-primary outline-none hover:bg-surface-alt focus:bg-surface-alt"

              onClick={onNavigate}
            >
              {t(labelKey)}
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="my-1 h-px bg-border" />

          {children.map((child) => (
            <DropdownMenu.Item key={child.to} asChild>
              <Link
                to={child.to}

                className="text-body flex min-h-11 cursor-pointer select-none items-center rounded-md px-3 text-text outline-none hover:bg-surface-alt focus:bg-surface-alt"

                onClick={onNavigate}
              >
                {t(child.labelKey)}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function NavLinkItem({ item }) {
  const { t } = useTranslation();

  const { to, labelKey, end } = item;

  return (
    <NavLink
      to={to}

      end={end}

      className={({ isActive }) =>
        cn(
          'text-nav inline-flex min-h-11 items-center rounded-sm px-3 text-primary transition-colors hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',

          isActive && 'underline decoration-accent decoration-2 underline-offset-8',
        )
      }
    >
      {t(labelKey)}
    </NavLink>
  );
}
