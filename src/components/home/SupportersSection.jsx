import logo1 from '../../assets/images/supporters/logo1.png';
import logo3 from '../../assets/images/supporters/logo3.png';
import logo4 from '../../assets/images/supporters/logo4.png';
import logo5 from '../../assets/images/supporters/logo5.png';
import logo6 from '../../assets/images/supporters/logo6.png';
import logo8 from '../../assets/images/supporters/logo8.png';

const logos = [logo1, logo3, logo4, logo5, logo6, logo8];

function SupportersSection() {
  return (
    <section className="has-background-white py-6">
      <div className="container mb-6">
        <h1 className="title is-1 has-text-centered has-text-dark"> Supporters</h1>
        <div className="columns is-multiline is-centered">
          {logos.map((logo, i) => (
            <div
              className="column is-one-third is-flex is-justify-content-center is-align-items-center"
              key={'logo_' + i}
            >
              <img className="supporter_logo m-4" src={logo} alt={'logo_' + i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportersSection;
