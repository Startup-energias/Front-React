/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import Iframe from 'react-iframe';
import BulmaModal from '../utils/bulmaModal';
import ProjectInfo from '../components/project/ProjectInfo';
import ProjectTeam from '../components/project/ProjectTeam';
//icons
import peopleIcon from '../assets/images/project/peopleIcon.png';
import waterIcon from '../assets/images/project/waterIcon.png';
import weightIcon from '../assets/images/project/weightIcon.png';
// project images
import banner from '../assets/images/project1/banner.jpg';
import logo from '../assets/images/project1/logo.png';
import image1 from '../assets/images/project1/gallery/img.jpg';
import image2 from '../assets/images/project1/gallery/img2.jpg';
import image3 from '../assets/images/project1/gallery/img3.jpg';
import image4 from '../assets/images/project1/gallery/img4.jpg';
import image5 from '../assets/images/project1/gallery/img5.jpg';
import avatar1 from '../assets/images/project1/team/avatar-10-1.jpg';
import avatar2 from '../assets/images/project1/team/avatar-10.jpg';
import avatar3 from '../assets/images/project1/team/avatar-default.jpg';
//scss
import './scss/project.scss';

function Project() {
  let [project] = useState({
    id: 1,
    goal: '5.800',
    goaln: 5800,
    amount: 2700,
    content: {
      category: 'Solar',
      name: 'Solar energy for generate drinkable water.',
      description: [
        'Sea for Change is a humanitarian project thought and designed by a team of interdisciplinary young minds who seek to bring water to the communities that need it most.',
        'Even in the XXI century, the department of La Guajira in Colombia is the most affected by the shortage of drinking water. Why? It is a desert area that suffers from deforestation, mining exploitation and the disappearance of rivers. However, its geographical conditions (high solar radiation, proximity to the sea and the presence of groundwater) allow the development of an environmentally friendly solution using solar energy.',
        'We want to provide drinking water as soon as possible to the Wayuus, an indigenous community in the area that has suffered from a shortage of drinking water for more than 40 years.',
        "We created an innovative portable machine that uses solar energy to desalinate and treat sea, groundwater or surface reservoir water. It's attractive in terms of cost, design, versatility, and of course portability. The unit has the capacity to provide drinking water to more than 30 people, equivalent to a minimum of 150 liters per day.",
        'We have designed the machine’s first version and it is ready to be built, tested and optimized. We will use the funds raised to finance the construction and testing of our prototype.',
        'Join Sea for Change as an investor or team member. After building our prototype and doing field tests this year (2021), we hope to scale our business in 2022. Our goal is to mass produce our desalinators in an economically, socially and environmentally sustainable manner.',
        'We believe in the power of solidarity, technology and collaboration as engines of progress in societies. Help us and be an active entity of change! #PotableWaterForAll.',
      ],
      date: new Date(2016, 1, 16).toLocaleString(),
      location: 'Buenavista, Riohacha, La Guajira, Colombia',
      images: [image1, image2, image3, image4, image5 ],
      banner: banner,
      caracteristics: [
        {
          icon: waterIcon,
          info: 'Helps 30 people/day',
        },
        {
          icon: peopleIcon,
          info: 'Indigenous ethnic group Wayuu',
        },
        {
          icon: weightIcon,
          info: '# of tons of Co2 equivalent to X whales ',
        },
      ],
    },
    team: [
      {
        name: 'Paula Andrea Leon Tabares',
        comment:
          'I believe that engineering should be a source to solve many of the problems that arise today, so I have joined this project in order to help the communities of the Guajira through my career. It is necessary to generate conscience in many aspects, not only in helping the communities that suffer a state oblivion, but also through the renewable energies. With this project I hope to reduce my carbon footprint and help others do the same, while also making a basic need such as potable water accessible to many people',
        image: avatar1,
      },
      {
        name: 'Pedro Felipe Rubiano Perez',
        comment:
          'The main motivation in doing this project relies in the desire to propose an effective solution for a problem that has prevailed over 15 years in La Guajira, despite of all the efforts made by the government and other entities. During this process I want to show and prove that engineering applied for social purposes needs sensible and human study dimensions to really work and generate positive social impact. Moreover, I believe that engineering projects should be conceived deeming an artistic approach to be more successful and well-received. And that is what I want for this project, a collective construction between engineers and communities, of a device powered by the sun capable of supplying drinkable water from the sea and conceived as an artwork',
        image: avatar2,
      },
      {
        name: 'Simón David García',
        comment:
          'The biggest challenge for development is the access to basic needs like water, energy or food. This project is a substantial aid for people from La Guajira to access drinking water through an innovative solution. The main goal is to give this community all the essential tools they need to provide real social impact. Engineering should always be an ally in the pursuit of better life quality. Therefore, my objective is to build, iterate and produce a long term system that could use available resources to change their lives dramatically while working together with the community',
        image: avatar3,
      },
    ],
  });

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    var btn = document.querySelector('#openSupport');
    var mdl = new BulmaModal('#supportModal');

    btn.addEventListener('click', function () {
      mdl.show();
    });
  }, []);

  function showSharing() {
    document.getElementById('sharing-content').style.display = 'block';
  }

  return (
    <section className="project mt-3 has-background-white p-0">
      <img className="m-0" src={banner} alt="banner" />
      <div className=" mx-6 mb-6">
        <div className="columns is-desktop is-6 mx-6">
          <div className="column is-8 mr-6">
            <ProjectInfo info={project.content} />
            <div className="content mx-1">
              <h3 className="title is-3 has-text-dark">Project Location</h3>

              <div className="map-container map-wrapper-300 mb-3">
                <Iframe
                  className="responsive-iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2002303.1909407254!2d-73.51029478988822!3d11.425797455703325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8b8914627238ff%3A0x22e6d8831a7d9716!2sLa%20Guajira%2C%20Colombia!5e0!3m2!1sen!2sch!4v1603451522243!5m2!1sen!2sch"
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
              <h1 className="title is-2 has-text-info is-size-3-widescreen is-size-5-desktop">
                Goal <span className="">${project.goal} USD</span>
              </h1>

              <div className="container is-flex is-align-items-center is-justify-content-center mt-5">
                <button className="button is-size-6 is-info has-text-dark">SUPPORT NOW</button>
              </div>

              <div className="is-flex is-align-items-center is-justify-content-center my-5">
                <h2 className=" is-size-6 mr-2 has-text-info">Progress</h2>
                <progress
                  className="progress is-info is-small"
                  value={Math.round((project.amount * 100) / project.goaln)}
                  max="100"
                >
                  15%
                </progress>
              </div>
              <div className="container is-flex is-align-items-center is-justify-content-center mt-5">
                <button id="openSupport" className="button is-size-6 is-info has-text-dark">
                  Other type of support
                </button>
              </div>

              <div className="modal" id="supportModal">
                <div className="modal-background"></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title m-0">Choose another type of support</p>
                    <button className="delete" aria-label="close" data-bulma-modal="close"></button>
                  </header>
                  <section className="modal-card-body">
                    <div id="sharing-content"></div>
                    <div className="buttons has-addons">
                      <div className="button is-info">Support with knowledge</div>
                      <div className="button is-link" onClick={showSharing}>
                        Support sharing!
                      </div>
                    </div>
                  </section>
                  <footer className="modal-card-foot">
                    <button className="button" data-bulma-modal="close">
                      Cancel
                    </button>
                  </footer>
                </div>
              </div>
            </div>

            <div className="mt-6 is-flex is-align-items-center is-justify-content-center has-background-info py-3">
              <div className="is-flex is-align-items-center">
                <img className="project-logo" src={logo} alt="project_logo" />
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
