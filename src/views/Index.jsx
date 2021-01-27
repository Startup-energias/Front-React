import InfoSection from '../components/Index/InfoSection';
import InoverteSection from '../components/Index/InoverteSection';
import HowSection from '../components/Index/HowSection';
import ProjectsSection from '../components/Index/ProjectsSection';
import AboutSection from '../components/Index/AboutSection';
import SupportersSection from '../components/Index/SupportersSection';
import ImpactSection from '../components/Index/ImpactSection';
import BlogSection from '../components/Index/BlogSection';
import ContactSection from '../components/Index/ContactSection';
import '../assets/scss/06_pages/index.scss';

function Index() {  
  return (
    <div className="index has-background-white">
      <InfoSection />
      <InoverteSection />
      <HowSection />
      <ProjectsSection />
      <AboutSection />
      <SupportersSection />
      <ImpactSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

export default Index;
