import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

// About section with course description and benefits list
export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Course description */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t.about.description}
              </p>

              {/* Benefits list */}
              <div className="space-y-4">
                {t.about.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {/* Check icon */}
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {/* Benefit text */}
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual element */}
            <div className="lg:order-first">
              <div className="relative">
                {/* Main image placeholder */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Code blocks representation */}
                    <div className="space-y-3">
                      <div className="h-4 bg-blue-300 rounded"></div>
                      <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                      <div className="h-4 bg-blue-300 rounded w-1/2"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-purple-300 rounded w-2/3"></div>
                      <div className="h-4 bg-purple-200 rounded"></div>
                      <div className="h-4 bg-purple-300 rounded w-3/4"></div>
                    </div>
                  </div>

                  {/* Tech icons representation */}
                  <div className="flex justify-center gap-4 mt-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                      R
                    </div>
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                      TS
                    </div>
                    <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
                      TW
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};