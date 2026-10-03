import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const next = i18n.language?.startsWith('fr') ? 'en' : 'fr';

  return (
    <Button
      variant="ghost"
      size="sm"
      type="button"
      aria-label={t('common.language')}
      onClick={() => i18n.changeLanguage(next)}
    >
      {next.toUpperCase()}
    </Button>
  );
}
