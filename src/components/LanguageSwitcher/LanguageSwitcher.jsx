import { useLanguage } from '@/hooks/useLanguage';

import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { language, toggleLanguage, t } = useLanguage();

  const nextLanguage = language === 'pt' ? 'EN' : 'PT';

  return (
    <button
      type="button"
      className={styles.switcher}
      onClick={toggleLanguage}
      aria-label={t.language.switchTo}
      title={t.language.switchTo}
    >
      {nextLanguage}
    </button>
  );
}
