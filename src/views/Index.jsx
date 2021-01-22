import InfoSection from '../components/InfoSection';
import HowWorks from '../components/Index/HowWorks';
import ProjectsList from '../components/Index/ProjectsList';
import Footer from '../components/Footer';
import '../assets/scss/06_pages/index.scss';

function Index() {
  return (
    <div className="index has-background-white">
      <InfoSection />
      <HowWorks />
      <ProjectsList />
      <Footer />
    </div>
  );
}

export default Index;
