import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ProtectedRoute } from './ProtectedRoute';

import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';
import ProgramsPage from '@/pages/programs';
import CoursesPage from '@/pages/courses';
import EmploymentPage from '@/pages/employment';
import RequestHelpPage from '@/pages/request-help';
import GetInvolvedPage from '@/pages/get-involved';
import VolunteerPage from '@/pages/get-involved/volunteer';
import DonatePage from '@/pages/get-involved/donate';
import DonateThankYouPage from '@/pages/get-involved/donate/thank-you';
import DonateSuppliesPage from '@/pages/get-involved/donate-supplies';
import PartnerPage from '@/pages/get-involved/partner';
import ResourcesPage from '@/pages/resources';
import ResourceDetailPage from '@/pages/resources/detail';
import EventsPage from '@/pages/events';
import EventDetailPage from '@/pages/events/detail';
import ContactPage from '@/pages/contact';
import PrivacyPage from '@/pages/privacy';
import TermsPage from '@/pages/terms';
import AccessibilityPage from '@/pages/accessibility';
import SafeguardingPage from '@/pages/safeguarding';
import InclusionPolicyPage from '@/pages/inclusion-policy';
import DonationPolicyPage from '@/pages/donation-policy';
import ComplaintsPage from '@/pages/complaints';
import AdminLoginPage from '@/pages/admin/login';
import AdminDashboardPage from '@/pages/admin/dashboard';
import DesignPreviewPage from '@/pages/design-preview';
import NotFoundPage from '@/pages/not-found';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:slug" element={<Navigate to="/courses" replace />} />
          <Route path="employment" element={<EmploymentPage />} />
          <Route path="request-help" element={<RequestHelpPage />} />
          <Route path="get-involved" element={<GetInvolvedPage />} />
          <Route path="get-involved/volunteer" element={<VolunteerPage />} />
          <Route path="get-involved/donate" element={<DonatePage />} />
          <Route path="get-involved/donate/thank-you" element={<DonateThankYouPage />} />
          <Route path="get-involved/donate-supplies" element={<DonateSuppliesPage />} />
          <Route path="get-involved/partner" element={<PartnerPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="resources/:slug" element={<ResourceDetailPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="events/:slug" element={<EventDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="accessibility" element={<AccessibilityPage />} />
          <Route path="safeguarding" element={<SafeguardingPage />} />
          <Route path="inclusion-policy" element={<InclusionPolicyPage />} />
          <Route path="donation-policy" element={<DonationPolicyPage />} />
          <Route path="complaints" element={<ComplaintsPage />} />
          {import.meta.env.DEV ? (
            <Route path="design-preview" element={<DesignPreviewPage />} />
          ) : null}
          <Route path="admin/login" element={<AdminLoginPage />} />
          <Route path="admin" element={<ProtectedRoute />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="*" element={<AdminDashboardPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
