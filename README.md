# Online Course Landing Page

A modern, responsive landing page for an online web development course built with React, TypeScript, and TailwindCSS.

## 🚀 Features

- **Multi-language Support**: Portuguese (pt-BR) and English (en-US) with toggle functionality
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI/UX**: Clean design with TailwindCSS styling
- **Lead Capture**: Contact form with validation
- **Interactive Components**: FAQ accordion, testimonials carousel
- **Smooth Animations**: Hover effects and transitions

## 🛠 Tech Stack

- **React 19.1.1** - UI library
- **TypeScript** - Type safety
- **Vite 7.1.6** - Build tool and dev server
- **TailwindCSS 4.1.13** - Utility-first CSS framework
- **ESLint** - Code linting

## 📱 Sections

1. **Header** - Hero section with course title, description, and main CTA
2. **About** - Course description and benefits list
3. **Testimonials** - Student testimonials with ratings
4. **Contact Form** - Lead capture form with validation
5. **FAQ** - Accordion with common questions
6. **Footer** - Links and copyright information

## 🌍 Multi-language Support

The application supports two languages:
- Portuguese (pt-BR) - Default
- English (en-US)

Language toggle is available in the header. All content including form validation messages are translated.

## 🎨 Design Features

- Gradient backgrounds
- Rounded corners and shadows
- Hover animations
- Smooth scrolling
- Modern typography
- Professional color scheme (blues, purples, grays)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

### Linting

```bash
npm run lint
```

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Hero section with CTA
│   ├── About.tsx       # Course information
│   ├── Testimonials.tsx # Student testimonials
│   ├── ContactForm.tsx # Lead capture form
│   ├── FAQ.tsx         # Accordion FAQ section
│   ├── Footer.tsx      # Footer with links
│   └── index.ts        # Component exports
├── hooks/              # Custom React hooks
│   └── useLanguage.ts  # Language management
├── locales/            # Translation files
│   └── translations.ts # PT/EN translations
├── types/              # TypeScript definitions
│   └── index.ts        # Type definitions
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎯 Customization

### Changing Content

1. **Course Information**: Edit translations in `src/locales/translations.ts`
2. **Testimonials**: Update testimonial data in the translations file
3. **FAQ**: Modify questions and answers in the translations
4. **Styling**: Customize colors and design in component files using TailwindCSS classes

### Adding New Languages

1. Add new language to `availableLanguages` in `src/hooks/useLanguage.ts`
2. Create translation object in `src/locales/translations.ts`
3. Add to the translations mapping in the useLanguage hook

### Form Integration

The contact form currently simulates submission. To integrate with a real backend:

1. Replace the simulation in `src/components/ContactForm.tsx`
2. Add your API endpoint URL
3. Handle real form submission and error states

---

Built with ❤️ using React + TypeScript + TailwindCSS
