import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Iframe from 'react-iframe';
import './scss/_projectExtra.scss';

const images__icons = process.env.REACT_APP_IMAGES_SRC + 'projects/page/';

function ProjectExtra({ images, maps, resources, skills, imgSrc }) {
  function RenderGallery({ list }) {
    const listImages = list.map((item, i) => {
      return (
        <div className="project__galleryimg" key={'gallery-' + i}>
          <img src={imgSrc + 'gallery/' + item} alt={'gallery-' + i} />
        </div>
      );
    });

    return (
      <Carousel autoPlay={false} showStatus={false}>
        {listImages}
      </Carousel>
    );
  }

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center mt-4">
      <Iframe
        className="mb-3"
        width="auto"
        height="400"
        src="https://www.youtube.com/embed/_K1imkQTy7w"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Iframe>
      <h1 className="title is-3 has-text-dark">Gallery</h1>
      <RenderGallery list={images} />
      <h1 className="title is-2 has-text-dark mt-4">Skills &amp; Resources needed</h1>
      <div className="columns is-6 is-multiline m-0">
        <div className="column">
          <div className="is-flex">
            <img className="project__lstIcon" src={images__icons + 'skills.png'} alt="skills" />
            <h2 className="title is-4 has-text-dark mb-2">Skills</h2>
          </div>
          <ul className="project__list">
            {skills.map((skill, i) => (
              <li key={'skill_' + i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="column is-half">
          <div className="is-flex">
            <img
              className="project__lstIcon"
              src={images__icons + 'resources.png'}
              alt="resources"
            />
            <h2 className="title is-4 has-text-dark mb-2">Resources</h2>
          </div>
          <ul className="project__list">
            {resources.map((resource, i) => (
              <li key={'resource' + i}>{resource}</li>
            ))}
            <li className="small-fixed is-size-7 mt-3">
              If you are a supplier of any of these products, please contact us for further details{' '}
            </li>
          </ul>
        </div>
      </div>
      <h1 className="title is-2 has-text-dark mt-4">Project location</h1>
      <Iframe
        className="responsive-iframe"
        src={maps}
        width="auto"
        height="300"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></Iframe>
    </div>
  );
}

export default ProjectExtra;
