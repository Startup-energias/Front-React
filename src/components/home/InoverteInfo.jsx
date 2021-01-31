/* eslint-disable no-unused-vars */
import './scss/_inoverteInfo.scss';
import { useState } from 'react';
import { tags as tag, sections } from '../../helpers/constants/inoverteInfo';

function InoverteInfo() {
  let [tags] = useState(tag);

  let RenderSection = ({ section }) => {
    return (
      <div
        className="section-container is-flex is-flex-direction-column is-justify-content-center is-align-items-center has-text-white px-6"
        style={{
          backgroundColor: `${section.color}`,
        }}
      >
        <img className="section-image" src={section.image} alt="section-icon" />
        <div className="section-title is-flex is-justify-content-center is-align-items-center">
          <h2 className="title is-size-4 has-text-white my-2">{section.title}</h2>
        </div>
        <div className="section-text is-flex is-justify-content-center is-align-items-center">
          <p className=" has-text-centered is-size-6">{section.content}</p>
        </div>
      </div>
    );
  };

  let RenderLgSection = ({ section }) => {
    return (
      <div
        className="sectionLg-container is-flex is-flex-direction-column is-justify-content-center is-align-items-center has-text-white px-6"
        style={{
          backgroundColor: `${section.color}`,
        }}
      >
        <div className="cont-lg">
          <img className="section-image" src={section.image} alt="section-icon" />
          <div className="section-title is-flex is-justify-content-center">
            <h2 className="title is-size-4 has-text-white my-2">{section.title}</h2>
          </div>
          <div className="section-text is-flex is-justify-content-center is-align-items-center">
            <p className=" has-text-centered is-size-6">{section.content}</p>
          </div>
        </div>

        <div className="cont-lg">
          <img className="section-image" src={section.image} alt="section-icon" />
          <div className="section-title is-flex is-justify-content-center">
            <h2 className="title is-size-4 has-text-white my-2">{section.title}</h2>
          </div>
          <div className="section-text is-flex is-justify-content-center is-align-items-center">
            <p className=" has-text-centered is-size-6">{section.content}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section info pt-0 mt-6">
      <h1 className="has-text-centered is-1 title has-text-dark">Benefits of being an inoverter</h1>
      <div className="blocks-container is-flex is-justify-content-center is-flex-wrap-wrap">
        {tags.map((tag) => (
          <button
            id={'btn-' + tag.value}
            className={`${
              tag.selected && 'btn-selected'
            } content-tag is-flex is-justify-content-center is-align-items-center is-size-4 title has-text-dark`}
            key={'btn-' + tag.value}
          >
            {tag.value}
          </button>
        ))}
      </div>
      <div className="sections-container is-flex is-justify-content-center is-flex-wrap-wrap mt-6">
        <RenderSection section={sections[0]} />
        <RenderSection section={sections[1]} />
        <RenderSection section={sections[2]} />
        <RenderSection section={sections[3]} />
        <RenderLgSection section={sections[4]} />
        <RenderSection section={sections[5]} />
      </div>
    </section>
  );
}

export default InoverteInfo;
