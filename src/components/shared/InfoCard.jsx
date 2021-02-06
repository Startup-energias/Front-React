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
          className="infoCard__container has-background-dark is-flex is-flex-direction-column is-align-items-center has-text-white px-6"
          onClick={handleClick}
        >
          <img className="infoCard__image" src={section.image} alt="infoCard__icon" />
          <div className="infoCard__title is-flex is-flex-grow-1 is-justify-content-end is-align-items-flex-end">
            <h2 className="monserrat-bold is-size-4 has-text-white has-text-centered my-2">
              {section.title}
            </h2>
          </div>
        </button>
      </div>
      <div>
        <button
          className="infoCard__container has-background-dark is-flex is-flex-direction-column is-justify-content-center has-text-white px-2"
          onClick={handleClick}
        >
          <img className="infoCard__image" src={section.opacity} alt="infoCard__icon" />
          <div className="infoCard__text is-flex is-justify-content-center is-align-items-center">
            <p className=" has-text-centered is-size-6">{section.content}</p>
          </div>
        </button>
      </div>
    </ReactCardFlip>
  );
}

export default InfoCard;
