import './scss/_aboutComponent.scss';

function AboutComponent({ right, title, color, text, image }) {
  return (
    <div className={`item ${right && 'about__right'} ${!right && 'about__left'} is-flex`}>
      <div className={`item__content is-flex is-flex-direction-column ${image && 'item__reduced'}`}>
        <p
          className="item__title is-flex-grow-0"
          style={{
            color: `${color}`,
          }}
        >
          OUR
        </p>
        <div
          className="is-flex-grow-1"
          style={{
            backgroundColor: `${color}`,
          }}
        >
          <p className="item__title has-text-white">{title}</p>
          <p className="item__subtext is-size-6 has-text-white">{text}</p>
        </div>
      </div>

      {image && <img className="item__image" src={image} alt={title + '__image'} />}
    </div>
  );
}

export default AboutComponent;
