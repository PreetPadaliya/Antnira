import { useScrollReveal } from '../hooks/useScrollReveal';
import HeroSection from '../components/HeroSection';
import GroupCompanies from '../components/GroupCompanies';
import WhyChooseUs from '../components/WhyChooseUs';
import Workshops from '../components/Workshops';
import CSRSection from '../components/CSRSection';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <GroupCompanies />
      <WhyChooseUs />
      <Workshops />
      <CSRSection />
      <StatsSection />
      <Testimonials />
      <ContactForm />
    </>
  );
}
