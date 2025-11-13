import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import NightExperience from '@/components/sections/NightExperience';
import RaceInfo from '@/components/sections/RaceInfo';
import ComingSoonSection from '@/components/sections/ComingSoonSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <NightExperience />
        <RaceInfo />
        <ComingSoonSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
