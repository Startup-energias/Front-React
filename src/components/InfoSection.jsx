import { bannerImages, keywords } from '../helpers/constants/infoSection';
import Typed from 'react-typed';
import { Carousel } from 'react-responsive-carousel';
import '../assets/scss/04_layout/_infoSection.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function InfoSection() {
  return (
    <div className="infoSection">
      <section className="is-relative">
        <Carousel
          autoPlay
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          showArrows={false}
          interval={10000}
          transitionTime={2000}
          className="infoSection__background"
        >
          {bannerImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt="slider" />
            </div>
          ))}
        </Carousel>
        <div className="container px-5" style={{ position: 'absolute' }}>
          <h1 className="title">
            <span className="mr-3">
              PEOPLE <Typed strings={keywords} typeSpeed={200} backSpeed={210} loop></Typed> PEOPLE
            </span>
            <br />
            THROUGH RENEWABLE ENERGIES
          </h1>
        </div>
      </section>
    </div>
  );
}

export default InfoSection;
