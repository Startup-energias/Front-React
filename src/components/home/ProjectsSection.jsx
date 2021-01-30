import { useState } from 'react';
import image1 from '../../assets/images/projects/Img1.jpg';
import './scss/_projectsSection.scss';

function ProjectsSection() {

  let [projects] = useState([
    {
      id: 1,
      category: 'Solar',
      name: 'Solar energy for generate drinkable water.',
      description:
        'Sea for Change is a humanitarian project aiming to tackle potable water shortage in vulnerable communities through an innovative water desalination unit.',
      team_name: 'Sea for Change',
      image: image1,
    },
    {
      id: 2,
      category: 'Solar',
      name: 'Solar energy for generate drinkable water.',
      description:
        'Sea for Change is a humanitarian project aiming to tackle potable water shortage in vulnerable communities through an innovative water desalination unit.',
      team_name: 'Sea for Change',
      image: image1,
    },
    {
      id: 3,
      category: 'Solar',
      name: 'Solar energy for generate drinkable water.',
      description:
        'Sea for Change is a humanitarian project aiming to tackle potable water shortage in vulnerable communities through an innovative water desalination unit.',
      team_name: 'Sea for Change',
      image: image1,
    }
  ]);

  let renderProjects = () => {
    return projects.map((item) => (
      <div
        className="column is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd"
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
                <p className="subtitle is-5 has-text-grey-light mt-1 is-5 is-spaced">
                  {item.category}
                </p>
                <h2 className="title is-4">{item.team_name}</h2>
                <h3 className="subtitle is-5">
                  <a href="/projects">{item.name}</a>
                </h3>
              </div>
            </div>
            <div className="content">
              <p>
                {item.description}
              </p>
              <button className="button is-info is-light mt-2">Support Now</button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section
      className="section projects has-background-white projectsListSection pt-6 pb-0"
      id="Projects"
    >
      <div className="container is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <h1 className="title is-1 has-text-centered has-text-dark">Hot Projects</h1>
        <div className="columns is-multiline is-variable is-1-mobile is-1-tablet is-5-desktop is-8-widescreen is-8-fullhd is-centered projects-container mt-2">
          {renderProjects()}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
