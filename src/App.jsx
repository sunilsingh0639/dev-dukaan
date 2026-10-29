import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TechnologiesSection from './components/TechnologiesSection';
import DevelopmentProcessSection from './components/DevelopmentProcessSection';
import ClientsSection from './components/ClientsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import EnquiryPopup from './components/EnquiryPopup';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const path = window.location.pathname;

  if (path === '/privacy-policy') return <PrivacyPolicy />;
  if (path === '/terms') return <Terms />;

  return (
    <>
      <Header onQuote={() => setModalOpen(true)} />
      <main>
        <HeroSection onQuote={() => setModalOpen(true)} />
        <ServicesSection onQuote={() => setModalOpen(true)} />
        <PortfolioSection />
        <WhyChooseUsSection />
        <TechnologiesSection />
        <DevelopmentProcessSection />
        <ClientsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <EnquiryPopup modalOpen={modalOpen} />
      <FloatingWhatsAppButton />
    </>
  );
}
