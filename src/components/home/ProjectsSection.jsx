import { useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import image1 from '../../assets/images/projects/Img1.jpg';

function ProjectsSection() {
  const soon = ['1','2','3'];
  let [projects] = useState([
    {
      id: 1,
      category: 'Solar',
      name: 'Solar energy for generate drinkable water.',
      description: 'Sea for Change is a humanitarian project aiming to tackle potable water shortage in vulnerable communities through an innovative water desalination unit.',
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
                <h2 className="title is-4 has-text-info">{item.team_name}</h2>
                <h3 className="subtitle has-text-dark is-5"><a className="darken-link" href='/projects'>{item.name}</a></h3>
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
              <button className="button is-info is-light mt-2">Support Now</button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="section has-background-white projectsListSection py-6" id="Projects">
      <div className="container">
        <h1 className="title bigger has-text-success">
          Projects
        </h1>
        <div className="columns is-multiline">
          {renderProjects()}
          {
            soon.map((n) => (
              <div key={"filler_card1"} className="column is-full-tablet-mobile is-full-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
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
