import InfoSection from '../components/home/InfoSection';
import HowSection from '../components/home/HowSection';
import ProjectsSection from '../components/home/ProjectsSection';
import InoverteInfo from '../components/home/InoverteInfo';
import SupportersSection from '../components/home/SupportersSection';
import ImpactSection from '../components/home/ImpactSection';
import BlogSection from '../components/home/BlogSection';
import './scss/index.scss';

function Index() {
  return (
    <div className="index has-background-white">
      <InfoSection />
      <HowSection />
      <ProjectsSection />
      <InoverteInfo />
      <SupportersSection />
      <ImpactSection />
      <BlogSection />
    </div>
  );
}

export default Index;
