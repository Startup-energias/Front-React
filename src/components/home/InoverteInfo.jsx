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
          <h2 className="monserrat-bold is-size-4 has-text-white my-2">{section.title}</h2>
        </div>
        <div className="section-text is-flex is-justify-content-center is-align-items-center">
          <p className=" has-text-centered is-size-7">{section.content}</p>
        </div>
      </div>
    );
  };

  let RenderLgSection = ({ section: { multiples, color } }) => {
    return (
      <div
        className="sectionLg-container is-flex is-flex-direction-column is-justify-content-center is-align-items-center has-text-white px-6"
        style={{
          backgroundColor: `${color}`,
        }}
      >
        <div className="cont-lg">
          <img className="section-image" src={multiples[0].image} alt="section-icon" />
          <div className="section-title is-flex is-justify-content-center">
            <h2 className="monserrat-bold is-size-4 has-text-white my-2">{multiples[0].title}</h2>
          </div>
          <div className="section-text is-flex is-justify-content-center is-align-items-center">
            <p className=" has-text-centered is-size-7">{multiples[0].content}</p>
          </div>
        </div>
        <div className="cont-lg">
          <img className="section-image mr-2" src={multiples[1].image} alt="section-icon" />
          <div className="section-title is-flex is-justify-content-center">
            <h2 className="monserrat-bold is-size-4 has-text-white my-2">{multiples[1].title}</h2>
          </div>
          <div className="section-text is-flex is-justify-content-center is-align-items-center">
            <p className=" has-text-centered is-size-7">{multiples[1].content}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section info pt-0 mt-6" id="About us">
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
        <RenderSection section={sections[6]} />
        <RenderSection section={sections[7]} />
      </div>
    </section>
  );
}

export default InoverteInfo;
