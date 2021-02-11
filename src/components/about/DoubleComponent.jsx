import './scss/_doubleComponent.scss';

function DoubleComponent({ title, color, text, image }) {
  return (
    <div className={`double is-flex`}>
      {image && <img className="double__image mb-6" src={image} alt={title + '__image'} />}
      <div
        className={`double__content is-flex is-flex-direction-column ${image && 'double__reduced'}`}
      >
        <p
          className="double__title is-flex-grow-0 is-uppercase"
          style={{
            color: `${color}`,
          }}
        >
          Our
        </p>
        <div
          className="is-flex-grow-1"
          style={{
            backgroundColor: `${color}`,
          }}
        >
          <p className="double__title has-text-white is-uppercase">{title}</p>
          <p className="double__subtext is-size-4 has-text-white">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default DoubleComponent;
