import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const AccessibilityContext = createContext(null);

export function AccessibilityProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('mad-theme', 'default');
  const [fontScale, setFontScale] = useLocalStorage('mad-font-scale', 1);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.fontSize = `${fontScale * 16}px`;
  }, [theme, fontScale]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggleHighContrast = useCallback(() => {
    setTheme((t) => (t === 'high-contrast' ? 'default' : 'high-contrast'));
  }, [setTheme]);

  const value = useMemo(
    () => ({
      theme,
      fontScale,
      reduceMotion,
      setFontScale,
      toggleHighContrast,
      setTheme,
    }),
    [theme, fontScale, reduceMotion, setFontScale, toggleHighContrast, setTheme],
  );

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
}

export function useAccessibilityContext() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error('useAccessibilityContext must be used within AccessibilityProvider');
  return ctx;
}
