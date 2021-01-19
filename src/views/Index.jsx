import InfoSection from '../components/InfoSection';
import HowWorks from '../components/HowWorks';
import ProjectsList from '../components/ProjectsList';
import HomeFooter from '../components/HomeFooter';
import '../assets/scss/06_pages/index.scss';

function Index() {
  return (
    <div className="index has-background-white">
      <InfoSection />
      <HowWorks />
      <ProjectsList />
      <HomeFooter />
    </div>
  );
}

export default Index;
