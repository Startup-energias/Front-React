import InfoSection from '../components/home/InfoSection';
import PhraseSection from '../components/home/PhraseSection';
import HowSection from '../components/home/HowSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ProjectRegister from '../components/home/ProjectRegister';
import InoverteInfo from '../components/home/InoverteInfo';
import ImpactSection from '../components/home/ImpactSection';
import BlogSection from '../components/home/BlogSection';
import SupportersSection from '../components/home/SupportersSection';
import './scss/index.scss';

function Index() {
  return (
    <div className="index has-background-white">
      <InfoSection />
      <PhraseSection />
      <HowSection />
      <ProjectsSection />
      <InoverteInfo />
      <ProjectRegister />
      <SupportersSection />
      <ImpactSection />
      <BlogSection />
    </div>
  );
}

export default Index;
