import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { useAccessibility } from '@/hooks/useAccessibility';

export function AccessibilityToolbar() {
  const { t } = useTranslation();
  const { toggleHighContrast, fontScale, setFontScale } = useAccessibility();

  return (
    <div
      className="flex flex-wrap items-center gap-2"
      role="group"
      aria-label="Accessibility options"
    >
      <Button type="button" variant="ghost" size="sm" onClick={toggleHighContrast}>
        High contrast
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setFontScale(Math.min(1.25, fontScale + 0.05))}
      >
        A+
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setFontScale(Math.max(0.9, fontScale - 0.05))}
      >
        A−
      </Button>
      <span className="sr-only">{t('common.language')}</span>
    </div>
  );
}
