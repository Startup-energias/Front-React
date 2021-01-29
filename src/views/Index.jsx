import InfoSection from '../components/home/InfoSection';
import InoverteSection from '../components/home/InoverteSection';
import ProjectsSection from '../components/home/ProjectsSection';
import HowSection from '../components/home/HowSection';
import './scss/index.scss';

function Index() {  
  return (
    <div className="index has-background-white">
      <InfoSection />
      <InoverteSection />
      <HowSection />
      <ProjectsSection />
      
    </div>
  );
}

export default Index;
