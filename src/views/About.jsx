import './scss/_about.scss';
import { aboutInfo } from '../helpers/constants/aboutInfo';
import AboutComponent from '../components/about/AboutComponent';
import DoubleComponent from '../components/about/DoubleComponent';

function About() {
  return (
    <div className="about is-flex is-flex-direction-column is-aling-items-center mb-5">
      {aboutInfo.items.map((item, i) => (
        <div key={'component_item_' + i}>
          {i === 3 ? <DoubleComponent {...item} /> : <AboutComponent {...item} />}
        </div>
      ))}
      {/*<div className="team is-flex is-flex-direction-column">
        <div className="team__image">
          <img src={aboutInfo.team} alt="team img" />
        </div>
      </div>*/}
    </div>
  );
}

export default About;
