
import money from '../../assets/images/impact/money.png';
import weight from '../../assets/images/impact/weight.png';
import people from '../../assets/images/impact/people.png';


function ImpactSection() {
  const steps = [
    {
      title: 'Tons of CO',
      sub: '2',
      content: 'Chose the projects you want to help',
      icon: weight,
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
        
        <div className="iconContainer is-flex is-justify-content-center">
          <div className="iconImage has-text-white is-align-items-center is-justify-content-center is-flex ">
            <img src={item.icon} alt={item.title} />
          </div>
        </div>
        
        <h2 className="title is-2 has-text-white mt-4">{item.title} 
        {item.sub && <sub>{item.sub}</sub> }
        </h2>
        <p className="is-size-5 has-text-white">{item.content}</p>
      </div>
    ));
  };

  return (
    <section className="section has-background-primary" id="Our impact">
      <div className="container has-text-centered">
        <h1 className="title is-1 mb-6 is-uppercase has-text-white">
          Our impact
        </h1>
        <div className="columns is-multiline is-8 mx-6 mb-2">{renderSteps()}</div>
      </div>
    </section>
  );
}

export default ImpactSection;
