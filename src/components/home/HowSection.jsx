import './scss/_howSection.scss';
import {steps} from '../../helpers/constants/howSteps.js';

function HowSection() {

  let renderSteps = () => {
    return steps.map((item) => (
      <div className="column is-one-third-widescreen" key={item.title} id={"how-"+item.id}>
        <div className="icon-container is-flex is-justify-content-center">
          <div className="icon-image is-flex is-align-items-center is-justify-content-center">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
        
        <h2 className="text-title is-size-4 has-text-dark mt-4 mb-2">
          {item.title}
        </h2>
        <div className="container text-content">
          <p className="is-size-6 has-text-dark">{item.content}</p>
        </div>
      </div>
    ));
  };

  return (
    <section className="section how has-background-light" id="How it works">
      <div className="container has-text-centered">
        <h1 className=" mb-1 has-text-dark">How it works</h1>
        <div className="columns is-multiline is-8 mx-6 mb-2">{renderSteps()}</div>
      </div>
    </section>
  );
}

export default HowSection;
