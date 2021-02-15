import BannerSection from '../components/home/BannerSection';
import HowSection from '../components/home/HowSection';
import ProjectsSection from '../components/home/ProjectsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import SupportersSection from '../components/home/SupportersSection';
import BlogSection from '../components/home/BlogSection';
import TouchSection from '../components/home/TouchSection.jsx';
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
      <TouchSection />
    </div>
  );
}

export default Index;
