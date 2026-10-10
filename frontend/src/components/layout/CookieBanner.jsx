import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { PAGE_GUTTER, PAGE_GUTTER_LEFT, containerMarginLeft } from './pageGutter';

export function CookieBanner() {
  const { t } = useTranslation();
  const [consent, setConsent] = useLocalStorage('mad-cookie-consent', null);
  const [visible, setVisible] = useState(consent === null);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface py-4 shadow-lg"
      style={{ paddingLeft: PAGE_GUTTER_LEFT, paddingRight: PAGE_GUTTER }}
    >
      <div
        className="flex w-full max-w-container flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        style={{ marginRight: 'auto', marginLeft: containerMarginLeft() }}
      >
        <p className="text-body text-text">{t('common.cookieMessage')}</p>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="primary"
            onClick={() => {
              setConsent({ necessary: true, analytics: false });
              setVisible(false);
            }}
          >
            {t('common.acceptCookies')}
          </Button>
        </div>
      </div>
    </div>
  );
}
