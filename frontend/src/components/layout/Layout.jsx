import { Outlet } from 'react-router-dom';
import { SkipLink } from './SkipLink';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { ScrollToTop } from './ScrollToTop';
import { PAGE_GUTTER } from './pageGutter';

export function Layout() {
  return (
    <div className="min-h-screen" style={{ paddingInline: PAGE_GUTTER }}>
      <SkipLink />
      <ScrollToTop />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
