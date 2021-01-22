import { useState } from 'react';
import Footer from '../components/Footer';
import ProjectInfo from '../components/Project/ProjectInfo';
import ProjectTeam from '../components/Project/ProjectTeam';

import image1 from '../assets/images/Project1/img.jpg';
import image2 from '../assets/images/Project1/img2.jpg';

import avatar1 from '../assets/images/Project1/Team/avatar-10-1.jpg';
import avatar2 from '../assets/images/Project1/Team/avatar-10.jpg';
import avatar3 from '../assets/images/Project1/Team/avatar-default.jpg';

import '../assets/scss/06_pages/project.scss';


function Project() {
  let [project] = useState({
    id: 1,
    content: {
      category: 'Solar',
      name: 'Access to drink water: seawater desalination unit powered with solar energy.',
      description:
        'Still in XXI century, the department of La Guajira in Colombia is the most affected by the shortage of drinking water. Why? It is a desert area with deforestation, mining exploitation, and disappearance of rivers. However, its geographical conditions (high solar radiation, proximity to the sea, and presence of groundwater) make it possible to develop an environmental friendly solution: a seawater desalination unit powered with solar energy. This portable unit would transform 150 L of salt water into drinking water on a daily basis, supplying a community of 20 people. Help us raise the money to make this project come true! #DrinkingWaterForAll.',
      date: new Date(2016, 1, 16).toLocaleString(),
      location: 'La Guajira, Colombia',
      images: [
        {
          name: 'image1',
          content: image1,
        },
        {
          name: 'image2',
          content: image2,
        },
      ],
      caracteristics: [
        {
          icon: 'faucet',
          info: 'Helps 20 people/day',
        },
        {
          icon: 'users',
          info: 'Indigenous ethnic group Wayuu',
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

  return (
    <div className="has-background-white">
      <div className="container">
        <div className="columns is-desktop is-8 mt-6 mx-6">
          <div className="column is-8">

            <ProjectInfo info={project.content} />
            <ProjectTeam team={project.team} />

          </div>
          <div className="column">
            <div className="box sticky-top px-5">
              <p>
                <span className="is-size-3 has-text-primary-dark has-text-weight-bold">$5 </span>
                or more per month, or help with expertise
              </p>
              <hr />

              <p className="is-size-6 mb-2">TYPE OF SUPPORT *</p>
              <div className="control">
                <div className="select is-fullwidth">
                  <select>
                    <option>Support with cash</option>
                    <option>Support with knowledge</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Project;
