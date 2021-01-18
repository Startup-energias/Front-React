import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMap, faHandHoldingUsd, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faMap, faHandHoldingUsd, faHeart);

function HowWorks() {
  let [steps] = useState([
    {
      title: 'Find the project(s) you want to support.',
      content: 'Chose the projects you want to help',
      icon: 'map',
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
    },
  ]);

  let renderSteps = () => {
    return steps.map((item) => (
      <div className="column" key={item.title}>
        <div className="card">
          <div className="column container is-one-quarter">
            <div className="box has-background-primary">
              <FontAwesomeIcon icon={item.icon} size="2x" color="white" />
            </div>
          </div>
          <div className="card-content">
            <div className="media">
              <p className="title is-4">{item.title}</p>
            </div>

            <div className="content">{item.content}</div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container my-5 has-text-centered">
      <h2 className="title is-2">HOW IT WORKS</h2>
      &nbsp;
      <div className="columns mx-3">{renderSteps()}</div>
    </div>
  );
}

export default HowWorks;
