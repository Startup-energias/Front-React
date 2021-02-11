import './scss/_about.scss';
import { aboutInfo } from '../helpers/constants/aboutInfo';
import AboutComponent from '../components/about/AboutComponent';
import DoubleComponent from '../components/about/DoubleComponent';
//import TeamComponent from '../components/about/TeamComponent';

function About() {
  return (
    <div className="about is-flex is-flex-direction-column is-aling-items-center mb-5">
      {aboutInfo.items.map((item, i) => (
        <div key={'component_item_' + i}>
          {i === 3 ? <DoubleComponent {...item} /> : <AboutComponent {...item} />}
        </div>
      ))}
      {/*<TeamComponent />*/}
    </div>
  );
}

export default About;
