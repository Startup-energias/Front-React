import contamination from '../../assets/images/icons/contamination.png';
import money from '../../assets/images/icons/money.png';
import people from '../../assets/images/icons/people.png';
import './scss/_impactSection.scss';

function ImpactSection() {
  const steps = [
    {
      title: 'Tons of CO',
      sub: '2',
      content: 'Chose the projects you want to help',
      icon: contamination,
    },
    {
      title: 'Collected money',
      content:
        'The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit',
      icon: money,
    },
    {
      title: 'Inverters',
      content:
        'His room, a proper human room although a little too small, lay peacefully between its four familiar',
      icon: people,
    },
  ];

  let renderSteps = () => {
    return steps.map((item) => (
      <div className="column is-one-third-widescreen" key={item.title}>
        <div className="icon-container is-flex is-justify-content-center">
          <div className="icon-image has-text-dark is-align-items-center is-justify-content-center is-flex ">
            <img src={item.icon} alt={item.title} />
          </div>
        </div>
        
        <h2 className="is-size-4 has-text-dark mb-5 mt-4">
          {item.title}
          {item.sub && <sub>{item.sub}</sub>}
        </h2>
        <p className="impact-content is-size-6 has-text-dark">{item.content}</p>
      </div>
    ));
  };

  return (
    <section className="section impact has-background-primary" id="Our impact">
      <div className="container has-text-centered">
        <h1 className="title is-1 mb-6 mt-2 has-text-dark">Our impact</h1>
        <div className="columns is-multiline is-8 mx-6 mb-2">{renderSteps()}</div>
      </div>
    </section>
  );
}

export default ImpactSection;