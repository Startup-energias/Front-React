/* eslint-disable no-unused-vars */
import React from 'react';
import Iframe from 'react-iframe';
import './scss/_projectExtra.scss';

import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Thumbs]);

const images__icons = process.env.REACT_APP_IMAGES_SRC + 'projects/page/';

function ProjectExtra({ images, maps, resources, skills, video, imgSrc }) {
  function RenderGallery({ list }) {
    const listImages = list.map((item, i) => {
      return (
        <SwiperSlide key={'gallery-' + i}>
          <img src={imgSrc + 'gallery/' + item} alt={'gallery-' + i} />
        </SwiperSlide>
      );
    });

    return (
      <div className="project__gallery">
        <Swiper spaceBetween={0} slidesPerView={3} navigation pagination>
          {listImages}
        </Swiper>
      </div>
    );
  }

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center mt-4">
      {video && (
        <Iframe
          className="mb-3"
          width="auto"
          height="400"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
      )}
      {images.length >= 3 ? (
        <React.Fragment>
          <h1 className="title is-3 has-text-dark">Gallery</h1>
          <RenderGallery list={images} />
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      {skills.length > 0 && resources.length > 0 && (
        <h1 className="title is-2 has-text-dark mt-4">Skills &amp; Resources needed</h1>
      )}
      <div className="columns is-6 is-multiline m-0">
        {skills.length > 0 && (
          <div className="column">
            <div className="is-flex">
              <img className="project__lstIcon" src={images__icons + 'skills.png'} alt="skills" />
              <h2 className="title is-4 has-text-primary mb-2">Skills</h2>
            </div>
            <ul className="project__list">
              {skills.map((skill, i) => (
                <li key={'skill_' + i}>
                  <span className="has-text-primary">
                    <i className="fa fa-check"></i>
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
        {resources.length > 0 && (
          <div className="column is-half">
            <div className="is-flex">
              <img
                className="project__lstIcon"
                src={images__icons + 'resources.png'}
                alt="resources"
              />
              <h2 className="title is-4 has-text-primary mb-2">Resources</h2>
            </div>
            <ul className="project__list">
              {resources.map((resource, i) => (
                <li key={'resource' + i}>
                  <span className="has-text-primary">
                    <i className="fa fa-check"></i>
                  </span>
                  {resource}
                </li>
              ))}
              <li className="small-fixed is-size-7 mt-3">
                If you are a supplier of any of these products, please contact us for further
                details{' '}
              </li>
            </ul>
          </div>
        )}
      </div>
      {maps && (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </div>
  );
}

export default ProjectExtra;
