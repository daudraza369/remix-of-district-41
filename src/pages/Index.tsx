import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ClientLogosSection } from '@/components/sections/ClientLogosSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TreeConsultationPreview } from '@/components/sections/TreeConsultationPreview';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <HeroSection />
        <ClientLogosSection />
        <WhyChooseUsSection />
        <TreeConsultationPreview />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
