/* eslint-disable no-unused-vars */
import './scss/_infoCard.scss';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

function InfoCard({ section, id }) {
  const [isFlipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div>
        <button
          className="section__container has-background-dark is-flex is-flex-direction-column is-justify-content-center is-align-items-center has-text-white px-6"
          onClick={handleClick}
        >
          <img className="section__image" src={section.image} alt="section__icon" />
          <div className="section__title is-flex is-justify-content-center is-align-items-center">
            <h2 className="monserrat-bold is-size-4 has-text-white has-text-centered my-2">
              {section.title}
            </h2>
          </div>
        </button>
      </div>
      <div>
        <button
          className="section__container has-background-dark is-flex is-flex-direction-column is-justify-content-center is-align-items-center has-text-white px-6"
          onClick={handleClick}
        >
          <img className="section__image" src={section.image} alt="section__icon" />
          <div className="section__title is-flex is-justify-content-center is-align-items-center">
            <h2 className="monserrat-bold is-size-4 has-text-white has-text-centered my-2">
              {section.title}
            </h2>
          </div>
          <div className="section__text is-flex is-justify-content-center is-align-items-center">
            <p className=" has-text-centered is-size-7">{section.content}</p>
          </div>
        </button>
      </div>
    </ReactCardFlip>
  );
}

export default InfoCard;
