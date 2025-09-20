import { useState, useCallback } from 'react';
import type { Language, Translations } from '../types';
import { ptBR, enUS } from '../locales/translations';

// Available languages
export const availableLanguages: Language[] = [
  { code: 'pt-BR', name: 'Português' },
  { code: 'en-US', name: 'English' }
];

// Translation mapping
const translations: Record<string, Translations> = {
  'pt-BR': ptBR,
  'en-US': enUS
};

// Custom hook for language management
export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(availableLanguages[0]);

  // Get current translations
  const t = translations[currentLanguage.code];

  // Toggle between languages
  const toggleLanguage = useCallback(() => {
    setCurrentLanguage(prev =>
      prev.code === 'pt-BR'
        ? availableLanguages[1] // Switch to English
        : availableLanguages[0] // Switch to Portuguese
    );
  }, []);

  // Set specific language
  const setLanguage = useCallback((languageCode: 'pt-BR' | 'en-US') => {
    const language = availableLanguages.find(lang => lang.code === languageCode);
    if (language) {
      setCurrentLanguage(language);
    }
  }, []);

  return {
    currentLanguage,
    t,
    toggleLanguage,
    setLanguage,
    availableLanguages
  };
};