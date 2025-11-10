
import React, { createContext, useState, useEffect, useMemo, ReactNode } from 'react';

type Language = 'en-KE' | 'sw-KE';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Simple translation dictionary
const translations: Record<string, Record<Language, string>> = {
  breakingNews: { 'en-KE': 'Breaking News', 'sw-KE': 'Habari Muhimu' },
  politics: { 'en-KE': 'Politics', 'sw-KE': 'Siasa' },
  business: { 'en-KE': 'Business', 'sw-KE': 'Biashara' },
  technology: { 'en-KE': 'Technology', 'sw-KE': 'Teknolojia' },
  sports: { 'en-KE': 'Sports', 'sw-KE': 'Michezo' },
  entertainment: { 'en-KE': 'Entertainment', 'sw-KE': 'Burudani' },
  lifestyle: { 'en-KE': 'Lifestyle', 'sw-KE': 'Maisha' },
  health: { 'en-KE': 'Health', 'sw-KE': 'Afya' },
  education: { 'en-KE': 'Education', 'sw-KE': 'Elimu' },
  search: { 'en-KE': 'Search...', 'sw-KE': 'Tafuta...' },
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'en-KE';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en-KE' ? 'sw-KE' : 'en-KE'));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };
  
  const value = useMemo(() => ({ language, toggleLanguage, t }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
