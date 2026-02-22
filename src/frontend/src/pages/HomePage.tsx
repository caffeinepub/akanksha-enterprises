import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
