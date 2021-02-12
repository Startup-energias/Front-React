/* eslint-disable no-unused-vars */
import './scss/_about.scss';
import { useState, useEffect } from 'react';
import { aboutInfo } from '../helpers/constants/aboutInfo';
import AboutComponent from '../components/about/AboutComponent';
import DoubleComponent from '../components/about/DoubleComponent';
import TeamComponent from '../components/about/TeamComponent';

function About() {
  let [selectedArr, setSelected] = useState([true, false, false, false, false]);

  function changeSelected(index) {
    let temp = [false, false, false, false, false];
    temp[index] = true;
    setSelected(temp);
  }
  return (
    <div className="about is-flex is-flex-direction-column is-aling-items-center mb-5">
      <div className="about__selector buttons has-addons is-centered">
        {aboutInfo.items.map((item, i) => (
          <button
            className={
              'about__option button is-uppercase has-text-centered has-text-white has-background-' +
              item.color
            }
            onClick={() => changeSelected(i)}
            key={'selector_' + i}
          >
            {item.title}
          </button>
        ))}
      </div>
      {selectedArr[0] && <AboutComponent {...aboutInfo.items[0]} />}
      {selectedArr[1] && <AboutComponent {...aboutInfo.items[1]} />}
      {selectedArr[2] && <AboutComponent {...aboutInfo.items[2]} />}
      {selectedArr[3] && <DoubleComponent {...aboutInfo.items[3]} />}
      {selectedArr[4] && <TeamComponent {...aboutInfo.items[4]} />}
    </div>
  );
}

export default About;
