import InfoSection from '../components/home/InfoSection';
import InoverteSection from '../components/home/InoverteSection';
import HowSection from '../components/home/HowSection';
import ProjectsSection from '../components/home/ProjectsSection';
import AboutSection from '../components/home/AboutSection';
import SupportersSection from '../components/home/SupportersSection';
import ImpactSection from '../components/home/ImpactSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';
import './scss/index.scss';

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
