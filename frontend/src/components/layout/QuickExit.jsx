import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';

export function QuickExit() {
  const { t } = useTranslation();

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => {
        window.location.replace('https://www.google.com');
      }}
    >
      {t('common.quickExit')}
    </Button>
  );
}
