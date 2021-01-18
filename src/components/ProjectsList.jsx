import { useState } from 'react';

function ProjectsList() {
  new Date(2011, 11, 30);
  let [projects] = useState([
    {
      key: 1,
      category: 'Solar',
      name: 'Access to drink water: seawater desalination unit powered with solar energy.',
      description:
        'Still in XXI century, the department of La Guajira in Colombia is the most affected by the shortage of drinking water. Why? It is a desert area with deforestation, mining exploitation, and disappearance of rivers. However, its geographical conditions (high solar radiation, proximity to the sea, and presence of groundwater) make it possible to develop an environmental friendly solution: a seawater desalination unit powered with solar energy. This portable unit would transform 150 L of salt water into drinking water on a daily basis, supplying a community of 20 people. Help us raise the money to make this project come true! #DrinkingWaterForAll.',
      date: new Date(2016, 1, 16),
    },
    {
      key: 2,
      category: 'Solar',
      name: 'Access to drink water: seawater desalination unit powered with solar energy.',
      description:
        'Still in XXI century, the department of La Guajira in Colombia is the most affected by the shortage of drinking water. Why? It is a desert area with deforestation, mining exploitation, and disappearance of rivers. However, its geographical conditions (high solar radiation, proximity to the sea, and presence of groundwater) make it possible to develop an environmental friendly solution: a seawater desalination unit powered with solar energy. This portable unit would transform 150 L of salt water into drinking water on a daily basis, supplying a community of 20 people. Help us raise the money to make this project come true! #DrinkingWaterForAll.',
      date: new Date(2016, 1, 16),
    },
    {
      key: 3,
      category: 'Solar',
      name: 'Access to drink water: seawater desalination unit powered with solar energy.',
      description:
        'Still in XXI century, the department of La Guajira in Colombia is the most affected by the shortage of drinking water. Why? It is a desert area with deforestation, mining exploitation, and disappearance of rivers. However, its geographical conditions (high solar radiation, proximity to the sea, and presence of groundwater) make it possible to develop an environmental friendly solution: a seawater desalination unit powered with solar energy. This portable unit would transform 150 L of salt water into drinking water on a daily basis, supplying a community of 20 people. Help us raise the money to make this project come true! #DrinkingWaterForAll.',
      date: new Date(2016, 1, 16),
    },
  ]);

  let renderProjects = () => {
    return projects.map((item) => (
      <div className="column" key={item.title}>
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={'../assets/images/Projects/Img' + item.key + '.jpg'} alt="Placeholder" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <p className="subtitle is-5">{item.category}</p>
              <p className="title is-6">{item.name}</p>
              <p className="subtitle is-4">{item.date}</p>
            </div>
            <div className="content">
              <p>{item.description}</p>
              <button className="button is-primary">Donate Now</button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="section my-5">
      <div className="container">
        <h2 className="title is-2">Let&apos;s make social good</h2>
        &nbsp;
        <div className="columns mx-3">{renderProjects()}</div>
      </div>
    </section>
  );
}

export default ProjectsList;
