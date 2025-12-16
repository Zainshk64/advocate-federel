import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import TeamPreview from '../components/home/TeamPreview';
import NewsSection from '../components/home/NewsSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <TeamPreview />
      <NewsSection />
    </>
  );
};

export default Home;