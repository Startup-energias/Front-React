import { keywords } from '../../helpers/constants/infoSection';
import mainImage from '../../assets/images/back2.jpg';
import Typed from 'react-typed';
import '../../assets/scss/04_layout/_infoSection.scss';

function InfoSection() {
  return (
    <div className="infoSection" style={{ backgroundImage: `url(${mainImage})` }}>
      <div className="container px-5">
        <h1 className="title">
          <span className="mr-3">
            PEOPLE <Typed strings={keywords} typeSpeed={160} backSpeed={150} loop></Typed>
          </span>
          <span className=" rightText">PEOPLE</span>
          <br />
          THROUGH RENEWABLE ENERGIES
        </h1>
      </div>
    </div>
  );
}

export default InfoSection;
