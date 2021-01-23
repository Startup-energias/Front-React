import { bannerImages, keywords } from '../helpers/constants/infoSection';
import Typed from 'react-typed';
import '../assets/scss/04_layout/_infoSection.scss';

function App() {
  return (
    <div className="infoSection">
      <section className="is-relative">
        {bannerImages.map((img, index) => (
          <div
            key={index}
            className="infoSection__background"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
        ))}
        <div className="container">
          <h1 className="title">
            <span className="mr-3">
              PEOPLE <Typed strings={keywords} typeSpeed={140} backSpeed={150} loop></Typed> PEOPLE
            </span>
            <br />
            THROUGH RENEWABLE ENERGIES
          </h1>
        </div>
      </section>
    </div>
  );
}

export default App;
