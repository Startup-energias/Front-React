import BannerSection from '../components/home/BannerSection';
import HowSection from '../components/home/HowSection';
import ProjectsSection from '../components/home/ProjectsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import SupportersSection from '../components/home/SupportersSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';
import './scss/index.scss';

function Index() {
  return (
    <div className="index has-background-white">
      <BannerSection />
      <HowSection />
      <ProjectsSection />
      <FeaturesSection />
      <SupportersSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

export default Index;
