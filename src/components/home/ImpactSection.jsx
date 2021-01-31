import steps from '../../helpers/constants/impactSection';
import './scss/_impactSection.scss';

function ImpactSection() {
  let renderSteps = () => {
    return steps.map((item) => (
      <div className="impactCard column is-one-third-widescreen" key={item.title}>
        <img src={item.icon} alt={item.title} />
        <p className="title is-size-5 has-text-white mt-4">
          {item.title}
          {item.sub && <sub>{item.sub}</sub>}
        </p>
        <p className="is-size-7 has-text-white">{item.content}</p>
      </div>
    ));
  };

  return (
    <section className="section impact has-background-primary" id="Our impact">
      <div className="container has-text-centered">
        <h6 className="title is-1 mb-6 is-uppercase has-text-white">Our impact</h6>
        <div className="columns is-multiline is-8 mx-6 mb-2">{renderSteps()}</div>
      </div>
    </section>
  );
}

export default ImpactSection;
