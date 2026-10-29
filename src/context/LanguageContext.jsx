import { useCallback, useEffect, useMemo, useState } from 'react';

import { LanguageContext } from './languageContextValue';
import { DEFAULT_LANGUAGE, STORAGE_KEY, translations } from '@/i18n';

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch {
    // localStorage indisponível: usa o idioma padrão
  }
  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;

    const setMeta = (selector, value) =>
      document.querySelector(selector)?.setAttribute('content', value);

    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', t.meta.title);
    setMeta('meta[property="og:description"]', t.meta.description);
    setMeta('meta[property="og:locale"]', t.meta.ogLocale);
    setMeta('meta[name="twitter:title"]', t.meta.title);
    setMeta('meta[name="twitter:description"]', t.meta.description);

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignora falha ao salvar a preferência
    }
  }, [language, t]);

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => (current === 'pt' ? 'en' : 'pt'));
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, toggleLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
