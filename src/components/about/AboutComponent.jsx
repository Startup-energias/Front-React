import './scss/_aboutComponent.scss';

function AboutComponent({ right, title, color, text, image }) {
  return (
    <div className={`item ${right ? 'about__right' : 'about__left'} is-flex`}>
      {image && <img className="item__image" src={image} alt={title + '__image'} />}

      <div className={`item__content is-flex is-flex-direction-column ${image && 'item__reduced'}`}>
        <p
          className="item__title is-flex-grow-0 is-uppercase"
          style={{
            color: `${color}`,
          }}
        >
          Our
        </p>
        <div
          className="item__text is-flex-grow-1"
          style={{
            backgroundColor: `${color}`,
          }}
        >
          <p className="item__title has-text-white is-uppercase">{title}</p>
          <div className="item__subtext is-flex is-flex-direction-column is-justify-content-center">
            <p className="is-size-4 has-text-white">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
