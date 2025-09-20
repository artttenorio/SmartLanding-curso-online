// Type definitions for the landing page

export interface Language {
  code: 'pt-BR' | 'en-US';
  name: string;
}

export interface FormData {
  name: string;
  email: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Translations {
  header: {
    title: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    benefits: string[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  form: {
    title: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitButton: string;
    successMessage: string;
    validation: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
    };
  };
  faq: {
    title: string;
    items: FAQ[];
  };
  footer: {
    copyright: string;
  };
}