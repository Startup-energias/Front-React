/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import Iframe from 'react-iframe';
import BulmaModal from '../utils/bulmaModal';
import ProjectInfo from '../components/project/ProjectInfoOld';
import ProjectTeam from '../components/project/ProjectTeamOld';
//icons
import peopleIcon from '../assets/images/project/peopleIcon.png';
import waterIcon from '../assets/images/project/waterIcon.png';
import weightIcon from '../assets/images/project/weightIcon.png';
// project images
//scss
import project from '../helpers/constants/projectInfo';
import './scss/_project.scss';

function Project() {
  const icons = [peopleIcon, waterIcon, weightIcon];
  const socialMedia = ['twitter', 'facebook', 'instagram', 'linkedin', 'pinterest', 'whatsapp', 'envelope'];
  const percentage = Math.round((project.amount * 100) / project.goaln);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    var btn = document.querySelector('#openSupport');
    var mdl = new BulmaModal('#supportModal');

    btn.addEventListener('click', function () {
      mdl.show();
    });
  }, []);

  let SocialMedia = ({ icons }) => {
    const list = icons.map((icon) => (
      <div className="column" key={"share-"+icon}>
        <div className="icon-container mx-1 is-flex is-justify-content-center is-align-items-center" >
          <a href="#Somewhere">
            <i className={"fa fa-"+icon+" fa-3x"}></i>
          </a>
        </div>
      </div>
    ));
    return (
      <div className="columns">
        {list}
      </div>
    );
  };

  return (
    <section className="project mt-6 has-background-white p-0">
      <img className="mx-0 mb-0 mt-2" src={project.banner} alt="banner" />
      <div className=" mx-6 mb-6">
        <div className="columns is-multiline is-6 mx-6">
          <div className="column mt-4 is-8-widescreen is-7-desktop is-12-tablet mr-6">
            <ProjectInfo info={project.content} icons={icons}/>
            <div className="content mx-1">
              <h3 className="title is-3 has-text-dark">Project Location</h3>

              <div className="map-container map-wrapper-300 mb-3">
                <Iframe
                  className="responsive-iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31287.59846400292!2d-72.91969962945211!3d11.411189281123761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8b652d09fa863d%3A0x23f73c8eccb1c1a3!2sBuenavista%2C%20Riohacha%2C%20La%20Guajira!5e0!3m2!1ses-419!2sco!4v1611933964698!5m2!1ses-419!2sco"
                  width="auto"
                  height="auto"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></Iframe>
              </div>
            </div>
          </div>
          <div className="goal-col column has-background-dark p-0">
            <div className="content mt-3 mx-1 mb-1 px-5">
              <h1 className="title is-2 mt-5 has-text-info is-size-3-widescreen is-size-5-desktop">
                Goal <span className="">${project.goal} USD</span>
              </h1>
              <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center my-5">
                <h2 className=" is-size-6 my-0 mr-2 has-text-info">Progress</h2>
                <div className="loading-bar">
                  <div className="percentage"
                  style={{
                    width: `${percentage}%`,
                  }}></div>
                </div>
              </div>
              <div className="buttons is-centered">
                <button className="goal-btn button subtitle is-size-6">Donate!</button>
                <button className="goal-btn button subtitle is-size-6">Join the team!</button>
                <button id="openSupport" className="goal-btn button subtitle is-size-6"> Share! </button>
              </div>

              <div className="modal" id="supportModal">
                <div className="modal-background"></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title m-0">Share this proyect!</p>
                    <button className="delete" aria-label="close" data-bulma-modal="close"></button>
                  </header>
                  <section className="modal-card-body">
                    <SocialMedia icons={socialMedia} />
                  </section>
                  <footer className="modal-card-foot">
                  </footer>
                </div>
              </div>
            </div>

            <div className="mt-6 is-flex is-align-items-center is-justify-content-center has-background-info py-3">
              <div className="is-flex is-align-items-center">
                <img className="project-logo" src={project.logo} alt="project_logo" />
              </div>
              <h1 className="title ml-3 is-2 has-text-dark">Team</h1>
            </div>
            <ProjectTeam team={project.team} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
