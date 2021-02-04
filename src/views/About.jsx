import './scss/_about.scss';
import { aboutInfo } from '../helpers/constants/aboutInfo';
import AboutComponent from '../components/about/AboutComponent';

function About() {
  return (
    <div className="about is-flex is-flex-direction-column is-aling-items-center mb-5">
      <div className="about__banner">
        <img src={aboutInfo.banner} alt="banner img" />
      </div>
      {aboutInfo.items.map((item) => (
        <AboutComponent {...item} key={item.title + 'component'} />
      ))}
    </div>
  );
}

export default About;
