import InfoSection from '../components/InfoSection';
import InverteDesc from '../components/Index/InverteDesc';
import HowWorks from '../components/Index/HowWorks';
import ProjectsList from '../components/Index/ProjectsList';
import '../assets/scss/06_pages/index.scss';

function Index() {
  return (
    <div className="index has-background-white">
      <InfoSection />
      <InverteDesc />
      <HowWorks />
      <ProjectsList />
    </div>
  );
}

export default Index;
