import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { Heart, Menu, X } from 'lucide-react';

import { cn } from '@/utils/cn';

import { Container } from '@/components/ui/Container';

import { Button, buttonVariants } from '@/components/ui/Button';

import { LanguageSwitcher } from './LanguageSwitcher';

import { AccessibilityToolbar } from './AccessibilityToolbar';

import { QuickExit } from './QuickExit';

import { MobileMenu } from './MobileMenu';

import { Logo } from './Logo';

import { NavDropdown, NavLinkItem } from './NavDropdown';

import { DONATE_PATH, PRIMARY_NAV } from './navConfig';

export function Header() {
  const { t } = useTranslation();

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface shadow-header">
      <div className="border-b border-border bg-bg py-2">
        <Container className="flex flex-wrap items-center justify-between gap-2">
          <AccessibilityToolbar />

          <div className="flex items-center gap-2">
            <QuickExit />

            <LanguageSwitcher />
          </div>
        </Container>
      </div>

      <Container className="flex min-h-[var(--header-height)] items-center justify-between gap-6 py-3">
        <Logo />

        <nav className="hidden flex-1 justify-center xl:flex" aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-0.5">
            {PRIMARY_NAV.map((item) => (
              <li key={item.labelKey}>
                {item.children ? <NavDropdown item={item} /> : <NavLinkItem item={item} />}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to={DONATE_PATH}
            className={cn(buttonVariants({ variant: 'cta', size: 'md' }), 'hidden sm:inline-flex')}
          >
            <Heart className="h-4 w-4 fill-current" aria-hidden />
            {t('nav.donate')}
          </Link>

          <Button
            type="button"

            variant="outline"

            size="sm"

            className="xl:hidden"

            aria-expanded={mobileOpen}

            aria-controls="mobile-nav"

            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X aria-hidden /> : <Menu aria-hidden />}

            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
