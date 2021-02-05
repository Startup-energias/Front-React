const images__logos = process.env.REACT_APP_IMAGES_SRC + 'supporters/';
import './scss/_supportersSection.scss';

const logos = [
  images__logos + 'startglobal.png',
  images__logos + 'udelosandes.png',
  images__logos + 'extigon.png',
  images__logos + 'ustgallen.png',
  images__logos + 'startfield.png',
  images__logos + 'startup.png',
];

function SupportersSection() {
  return (
    <section className="supporters has-background-white py-6">
      <div className="container mb-6">
        <h1 className="title is-1 has-text-centered has-text-dark"> Supporters</h1>
        <div className="columns is-multiline is-centered">
          {logos.map((logo, i) => (
            <div
              className="column is-2-widescreen is-flex is-justify-content-center is-align-items-center"
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
