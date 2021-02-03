import steps from '../../helpers/constants/impactSection';
import './scss/_impactSection.scss';

function ImpactSection() {
  let renderSteps = () => {
    return steps.map((item) => (
      <div className="impactCard column is-one-third-widescreen" key={item.title}>
        <img src={item.icon} alt={item.title} />
        <p className="title is-size-5 has-text-dark mt-4">
          {item.title}
          {item.sub && <sub>{item.sub}</sub>}
        </p>
        <p className="impactCard__content is-size-7 has-text-dark">
          {item.num + ' ' + item.content}
        </p>
      </div>
    ));
  };

  return (
    <section className="section impact has-background-primary" id="Our impact">
      <div className="container has-text-centered mt-6">
        <h1 className="title is-1 mb-6 mt-2 has-text-dark">Our impact</h1>
        <div className="columns is-multiline is-8 mx-6 mb-2">{renderSteps()}</div>
      </div>
    </section>
  );
}

export default ImpactSection;
