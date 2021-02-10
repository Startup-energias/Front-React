/* eslint-disable no-unused-vars */
import './scss/_infoCard.scss';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

function InfoCard({ section }) {
  const [isFlipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="infoCard my-2">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
          <button
            className="infoCard__container has-background-dark is-flex is-flex-direction-column is-align-items-center is-justify-content-center has-text-white px-2"
            onClick={handleClick}
          >
            <img className="infoCard__image" src={section.image} alt="infoCard__icon" />
            <div className="infoCard__title ">
              <h2 className="monserrat-bold is-size-4 has-text-white has-text-centered my-2">
                {section.title}
              </h2>
            </div>
          </button>
        </div>
        <div>
          <button
            className="infoCard__container has-background-dark is-flex is-flex-direction-column has-text-white px-5"
            onClick={handleClick}
          >
            <img className="infoCard__background" src={section.opacity} alt="infoCard__icon" />
            <div className="infoCard__text is-flex px-4">
              <p className="has-text-left pt-5 is-size-6">{section.content}</p>
            </div>
          </button>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default InfoCard;
