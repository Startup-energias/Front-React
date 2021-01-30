/* eslint-disable no-unused-vars */
import './scss/_inoverteInfo.scss';
import { useState, useEffect } from 'react';
import image1 from '../../assets/images/info/1.png';
import image2 from '../../assets/images/info/2.png';
import image3 from '../../assets/images/info/3.png';
import image4 from '../../assets/images/info/4.png';
import image5 from '../../assets/images/info/5.png';
import image6 from '../../assets/images/info/6.png';

function InoverteInfo() {
  const tags = [
    {
      value: 'All',
      selected: true,
    },
    {
      value: 'Features',
      selected: false,
    },
    {
      value: 'Benefits',
      selected: false,
    },
    {
      value: 'Support',
      selected: false,
    },
  ];

  const sections = [
    {
      image: image1,
      title: 'Crowd-talent',
      content:
        'Help with your knowledge! In Inoverte we are convinced that anyone can be part of a renewable energy project. Do you want to return to the ecosystem what it offer you? You can be a mentor or join as a member of the team.',
    },
    {
      image: image2,
      title: 'Sourcing',
      content:
        'You company is valuable! In Inoverte our projects can share their specific needs such as products, services and spaces. Do you want to be one of our partner suppliers and create positive impact? contact us! ',
    },
    {
      image: image3,
      title: 'Share',
      content:
        'You can be part of the renewable change! Even if you do not have the money, the knowledge or the resource, you can still make the idea viral. Support innovation dedicated for the ones who need it the most with Inoverte!',
    },
    {
      image: image4,
      title: 'Follow up',
      content:
        'In Inoverte we go further than only finding funds. Follow the evolution of the project, its implementation and the impact generated through our platform. Receive monthly updates on the status of your investment and the project.',
    },
    {
      image: image5,
      title: 'Inoverte community',
      content:
        'The perfect community for people passionate about renewable energy. Connect with people from all over the world who want to rock innovative projects! Anyone, everywhere, anytime.',
    },
    {
      image: image6,
      title: 'Inoverte community',
      content:
        'The perfect community for people passionate about renewable energy. Connect with people from all over the world who want to rock innovative projects! Anyone, everywhere, anytime.',
    },
  ];

  let [tagSelected, setSelected] = useState('All');

  useEffect(() => {
    const btnSel = document.getElementById('btn-All');
    btnSel.classList.add('btn-selected');
    console.log(tagSelected);
  }, []);

  let RenderSection = ({ image, content }) => {
    return (
      <div className="column is-4 ">
        <div className="container section-image">
          <img src={image} alt="section-icon" />
        </div>
        <div className="container section-content">
          <div className="block">{content}</div>
        </div>
      </div>
    );
  };

  return (
    <section className="section info pt-0">
      <h1 className="has-text-centered is-1 title has-text-dark">
        In Inoverte we help not only with money
      </h1>
      <div className="blocks-container is-flex is-justify-content-center">
        {tags.map((tag) => (
          <button
            id={'btn-' + tag.value}
            className="content-tag is-flex is-justify-content-center is-size-4 has-text-dark"
            key={'btn-' + tag.value}
          >
            {tag.value}
          </button>
        ))}
      </div>
      <div className="container mx-6">
        <div className="columns is-multiline">
          <RenderSection
            image={sections[0].image}
            title={sections[0].title}
            content={sections[0].content}
          />
        </div>
      </div>
    </section>
  );
}

export default InoverteInfo;
