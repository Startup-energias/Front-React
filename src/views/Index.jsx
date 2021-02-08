import InfoSection from '../components/home/InfoSection';
import HowSection from '../components/home/HowSection';
import ProjectsSection from '../components/home/ProjectsSection';
import InoverteInfo from '../components/home/InoverteInfo';
import SupportersSection from '../components/home/SupportersSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';
import './scss/index.scss';

function Index() {
  return (
    <div className="index has-background-white">
      <InfoSection />
      <HowSection />
      <ProjectsSection />
      <InoverteInfo />
      <SupportersSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

export default Index;
