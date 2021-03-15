/* eslint-disable no-unused-vars */
import './scss/_infoCard.scss';

function InfoCard({ section }) {
  return (
    <div className="infoCard is-flex is-flex-direction-column is-justify-content-center  my-2">
      <div className="is-flex is-align-items-center">
        <div className="infoCard__image is-flex is-align-items-center is-justify-content-center">
          <img src={section.image} alt={section.title} />
        </div>
        <div className="infoCard__content is-flex is-flex-direction-column is-justify-content-center">
          <h1>{section.title}</h1>
          <p>{section.content}</p>
        </div>
      </div>
      <a className="buttons is-centered" href="/#">
        <button className="ml-3 button">{section.link}</button>
      </a>
    </div>
  );
}

export default InfoCard;
