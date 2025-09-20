import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface HeaderProps {
  onCTAClick: () => void;
}

// Header component with course title, description and main CTA
export const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  const { t, currentLanguage, toggleLanguage } = useLanguage();

  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Language toggle button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200 backdrop-blur-sm"
            aria-label={`Switch to ${currentLanguage.code === 'pt-BR' ? 'English' : 'Portuguese'}`}
          >
            <span className="text-sm font-medium">
              {currentLanguage.code === 'pt-BR' ? '🇧🇷' : '🇺🇸'}
            </span>
            <span className="text-sm font-medium">
              {currentLanguage.name}
            </span>
          </button>
        </div>

        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Course title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t.header.title}
          </h1>

          {/* Course description */}
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/90 max-w-2xl mx-auto">
            {t.header.description}
          </p>

          {/* Main CTA button */}
          <button
            onClick={onCTAClick}
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            {t.header.cta}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};