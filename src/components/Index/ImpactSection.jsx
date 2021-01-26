

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faHandHoldingUsd, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faHandHoldingUsd, faHeart);

function ImpactSection() {
  let [steps] = useState([
    {
      title: 'Contamination',
      content: 'Chose the projects you want to help',
      icon: 'search',
    },
    {
      title: 'Collected money',
      content:
        'The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit',
      icon: 'hand-holding-usd',
    },
    {
      title: 'Inverters',
      content:
        'His room, a proper human room although a little too small, lay peacefully between its four familiar',
      icon: 'heart',
    },
  ]);

  let renderSteps = () => {
    return steps.map((item) => (
      <div className="column is-one-third-widescreen" key={item.title}>
        
        <div className="circleContainer is-flex is-justify-content-center">
          <div className="circle has-background-primary-light has-text-primary-dark is-align-items-center is-justify-content-center is-flex ">
            <FontAwesomeIcon icon={item.icon} size="2x" />
          </div>
        </div>
        
        <p className="title is-4 has-text-primary-dark mt-4">{item.title}</p>
        <div className="has-text-info">{item.content}</div>
      </div>
    ));
  };

  return (
    <section className="section has-background-primary" id="Our impact">
      <div className="container has-text-centered">
        <h1 className="title is-2 mb-6 is-uppercase has-text-white">
          Our impact
        </h1>
        <div className="columns is-multiline is-8 mx-6 mb-2">{renderSteps()}</div>
      </div>
    </section>
  );
}

export default ImpactSection;
