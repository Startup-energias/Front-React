import { useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import image1 from '../../assets/images/Projects/Img1.jpg';

function ProjectsSection() {
  const soon = ['1','2','3'];
  let [projects] = useState([
    {
      id: 1,
      category: 'Solar',
      name: 'Access to drink water: seawater desalination unit powered with solar energy.',
      description:
        'Sea for Change is a humanitarian project thought and designed by a team of interdisciplinary young minds who seek to bring water to the communities that need it most. Even in the XXI century, the department of La Guajira in Colombia is the most affected by the shortage of drinking water. Why? It is a desert area that suffers from deforestation, mining exploitation and the disappearance of rivers. However, its geographical conditions (high solar radiation, proximity to the sea and the presence of groundwater) allow the development of an environmentally friendly solution using solar energy. We want to provide drinking water as soon as possible to the Wayuus, an indigenous community in the area that has suffered from a shortage of drinking water for more than 40 years. We created an innovative portable machine that uses solar energy to desalinate and treat sea, groundwater or surface reservoir water. It\'s attractive in terms of cost, design, versatility, and of course portability. The unit has the capacity to provide drinking water to more than 30 people, equivalent to a minimum of 150 liters per day. We have designed the machine’s first version and it is ready to be built, tested and optimized. We will use the funds raised to finance the construction and testing of our prototype. Join Sea for Change as an investor or team member. After building our prototype and doing field tests this year (2021), we hope to scale our business in 2022. Our goal is to mass produce our desalinators in an economically, socially and environmentally sustainable manner. We believe in the power of solidarity, technology and collaboration as engines of progress in societies. Help us and be an active entity of change! #PotableWaterForAll. ',
      team_name: 'Sea for Change',
      image: image1,
    }
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
                <p className="subtitle is-5 has-text-grey-light mt-1 is-5 is-spaced">{item.category}</p>
                <h2 className="title is-4 has-text-primary-dark">{item.team_name}</h2>
                <h3 className="subtitle is-5"><a className="darken-link" href='/projects'>{item.name}</a></h3>
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
              <button className="button is-info is-light mt-2">Donate Now</button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="section has-background-white projectsListSection py-6" id="Projects">
      <div className="container">
        <h1 className="title bigger has-text-info-dark">
          Inverte Proyects
        </h1>
        <div className="columns is-multiline">
          {renderProjects()}
          {
            soon.map((n) => (
              <div key={"filler_card"+n} className="column is-full-tablet-mobile is-full-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                <div className={"card filler_card"+n+" has-background-info"}>
                  <h2 className="title big has-text-info-dark">
                    SOON
                  </h2>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
