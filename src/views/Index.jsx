import InfoSection from '../components/Index/InfoSection';
import InverteSection from '../components/Index/InverteSection';
import HowSection from '../components/Index/HowSection';
import ProjectsSection from '../components/Index/ProjectsSection';
import ImpactSection from '../components/Index/ImpactSection';
import ContactSection from '../components/Index/ContactSection';
import '../assets/scss/06_pages/index.scss';

function Index() {
  return (
    <div className="index has-background-white">
      <InfoSection />
      <InverteSection />
      <HowSection />
      <ProjectsSection />
      <ImpactSection />
      <ContactSection />
    </div>
  );
}

export default Index;
