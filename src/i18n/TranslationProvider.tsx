import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations, { type Language } from './translations';

interface TranslationContextValue {
  locale: Language;
  setLocale: (value: Language) => void;
  t: (key: string) => any;
}

const TranslationContext = createContext<TranslationContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: (key: string) => key,
});

const STORAGE_KEY = 'sunit-agrico-lang';

export const TranslationProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [locale, setLocale] = useState<Language>('en');

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === 'en' || saved === 'hi') {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const t = (key: string) => {
    const parts = key.split('.');
    let result: any = translations[locale];

    for (const part of parts) {
      if (result && typeof result === 'object' && part in result) {
        result = result[part];
      } else {
        return key;
      }
    }

    return result;
  };

  const value = useMemo(() => ({ locale, setLocale, t }), [locale]);

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

export const useTranslation = () => useContext(TranslationContext);
