import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faHandHoldingUsd, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faHandHoldingUsd, faHeart);

function HowWorks() {
  let [steps] = useState([
    {
      title: 'Find the project(s) you want to support.',
      content: 'Chose the projects you want to help',
      icon: 'search',
    },
    {
      title: 'Choose the way you want to help: either money or knowledge.',
      content:
        'The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit',
      icon: 'hand-holding-usd',
    },
    {
      title: 'Track and share the impact you created!',
      content:
        'His room, a proper human room although a little too small, lay peacefully between its four familiar',
      icon: 'heart',
    }
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
        <div className="has-text-grey">{item.content}</div>
      </div>
    ));
  };

  return (
    <section className="section has-background-light mb-5">
      <div className="container has-text-centered">
        <h2 className="title is-2 mb-6">HOW IT WORKS</h2>
        <div className="columns is-multiline is-8 mx-6">{renderSteps()}</div>
      </div>
    </section>
  );
}

export default HowWorks;
