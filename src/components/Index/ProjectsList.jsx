import { useState } from 'react';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import image1 from '../../assets/images/Projects/Img1.jpg';

function ProjectsList() {
  let [projects] = useState([
    {
      id: 1,
      category: 'Solar',
      name: 'Access to drink water: seawater desalination unit powered with solar energy.',
      description:
        'Still in XXI century, the department of La Guajira in Colombia is the most affected by the shortage of drinking water. Why? It is a desert area with deforestation, mining exploitation, and disappearance of rivers. However, its geographical conditions (high solar radiation, proximity to the sea, and presence of groundwater) make it possible to develop an environmental friendly solution: a seawater desalination unit powered with solar energy. This portable unit would transform 150 L of salt water into drinking water on a daily basis, supplying a community of 20 people. Help us raise the money to make this project come true! #DrinkingWaterForAll.',
      date: new Date(2016, 1, 16).toLocaleString(),
      image: image1,
    },
    {
      id: 2,
      category: 'Solar',
      name: 'Access to drink water: seawater desalination unit powered with solar energy.',
      description:
        'Still in XXI century, the department of La Guajira in Colombia is the most affected by the shortage of drinking water. Why? It is a desert area with deforestation, mining exploitation, and disappearance of rivers. However, its geographical conditions (high solar radiation, proximity to the sea, and presence of groundwater) make it possible to develop an environmental friendly solution: a seawater desalination unit powered with solar energy. This portable unit would transform 150 L of salt water into drinking water on a daily basis, supplying a community of 20 people. Help us raise the money to make this project come true! #DrinkingWaterForAll.',
      date: new Date(2016, 1, 16).toLocaleString(),
      image: image1,
    },
    {
      id: 3,
      category: 'Solar',
      name: 'Access to drink water: seawater desalination unit powered with solar energy.',
      description:
        'Still in XXI century, the department of La Guajira in Colombia is the most affected by the shortage of drinking water. Why? It is a desert area with deforestation, mining exploitation, and disappearance of rivers. However, its geographical conditions (high solar radiation, proximity to the sea, and presence of groundwater) make it possible to develop an environmental friendly solution: a seawater desalination unit powered with solar energy. This portable unit would transform 150 L of salt water into drinking water on a daily basis, supplying a community of 20 people. Help us raise the money to make this project come true! #DrinkingWaterForAll.',
      date: new Date(2016, 1, 16).toLocaleString(),
      image: image1,
    },
    {
      id: 4,
      category: 'Solar',
      name: 'Access to drink water: seawater desalination unit powered with solar energy.',
      description:
        'Still in XXI century, the department of La Guajira in Colombia is the most affected by the shortage of drinking water. Why? It is a desert area with deforestation, mining exploitation, and disappearance of rivers. However, its geographical conditions (high solar radiation, proximity to the sea, and presence of groundwater) make it possible to develop an environmental friendly solution: a seawater desalination unit powered with solar energy. This portable unit would transform 150 L of salt water into drinking water on a daily basis, supplying a community of 20 people. Help us raise the money to make this project come true! #DrinkingWaterForAll.',
      date: new Date(2016, 1, 16).toLocaleString(),
      image: image1,
    },
  ]);

  let renderProjects = () => {
    return projects.map((item) => (
      <div
        className="column is-full-tablet-mobile is-full-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
        key={item.id}
      >
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={item.image} alt="Placeholder" />
            </figure>
          </div>
          <div className="card-content ">
            <div className="media">
              <div className="media-content">
                <p className="subtitle has-text-grey-light mt-1 is-5">{item.category}</p>
                <p className="title is-5"><Link to='/projects'>{item.name}</Link></p>
              </div>
            </div>
            <div className="content">
              <LinesEllipsis
                text={item.description}
                maxLine="5"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
              <p className="title is-6 mt-2">{item.date}</p>
              <button className="button is-primary is-light mt-2">Donate Now</button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="section my-5">
      <div className="container">
        <p className="subtitle is-4 has-text-primary-dark">
          PROJECTS AND INICIATIVES FROM COLOMBIA
        </p>
        <p className="title is-2">Let&apos;s make social good</p>
        &nbsp;
        <div className="columns is-multiline">{renderProjects()}</div>
      </div>
    </section>
  );
}

export default ProjectsList;
