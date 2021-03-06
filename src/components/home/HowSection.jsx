import './scss/_howSection.scss';
import { steps } from '../../helpers/constants/howSteps.js';

function HowSection() {
  let renderSteps = () => {
    return steps.map((item) => (
      <div className="column is-one-third-widescreen" key={item.title}>
        <div className="icon-container is-flex is-justify-content-center">
          <div className="icon-image is-flex is-align-items-center is-justify-content-center">
            <img src={item.image} alt={item.title} />
          </div>
        </div>

        <h2 className="text-title is-size-4 has-text-white mt-4 mb-2">{item.title}</h2>
        <div className="container text-content">
          <p className="is-size-6 has-text-white">{item.content}</p>
        </div>
      </div>
    ));
  };

  return (
    <section className="section how has-background-dark" id="How it works">
      <div className="container">
        <h1 className=" mb-6 has-text-white">How it works</h1>
        <div className="columns has-text-centered is-multiline is-8">{renderSteps()}</div>
      </div>
    </section>
  );
}

export default HowSection;
