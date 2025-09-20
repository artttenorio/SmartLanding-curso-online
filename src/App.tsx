import { Header } from './components/Header';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

// Main landing page application component
function App() {
  // Scroll to form section when CTA is clicked
  const scrollToForm = () => {
    const formSection = document.getElementById('form');
    if (formSection) {
      formSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with hero section and main CTA */}
      <Header onCTAClick={scrollToForm} />

      {/* About section with course information */}
      <About />

      {/* Testimonials from students */}
      <Testimonials />

      {/* Lead capture form */}
      <ContactForm />

      {/* Frequently asked questions */}
      <FAQ />

      {/* Footer with links and copyright */}
      <Footer />
    </div>
  );
}

export default App;
