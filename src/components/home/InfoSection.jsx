import { keywords } from '../../helpers/constants/infoSection';
import Typed from 'react-typed';
import './scss/_infoSection.scss';

function InfoSection() {
  return (
    <div className="infoSection" id="Home">
      <div className="container">
        <h1 className="title has-text-light">
          <div>
            <span className="mr-3">PEOPLE</span>
            <Typed strings={keywords} typeSpeed={160} backSpeed={150} loop></Typed>
            <span className="ml-3">PEOPLE</span>
          </div>
          <p>THROUGH RENEWABLE ENERGIES</p>
        </h1>
      </div>
    </div>
  );
}

export default InfoSection;
