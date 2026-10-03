import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/context/AuthContext';
import { AccessibilityProvider } from '@/context/AccessibilityContext';
import { ToastProvider, ToastViewport } from '@/components/ui/Toast';
import { AppRoutes } from '@/routes/AppRoutes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
  },
});

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AccessibilityProvider>
          <AuthProvider>
            <ToastProvider>
              <AppRoutes />
              <ToastViewport />
            </ToastProvider>
          </AuthProvider>
        </AccessibilityProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
