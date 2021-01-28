import { keywords } from '../../helpers/constants/infoSection';
import mainImage from '../../assets/images/banner.jpg';
import Typed from 'react-typed';
import '../../assets/scss/04_layout/_infoSection.scss';

function InfoSection() {
  return (
    <div
      className="infoSection py-6"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${mainImage})`,
      }}
      id ="Home"
    >
      <div className="container my-6 px-5">
        <h1 className="title is-1 mr-2">
          <span className=" leftText">
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
