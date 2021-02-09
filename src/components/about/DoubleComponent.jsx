import './scss/_doubleComponent.scss';

function DoubleComponent({ title, color, text, image }) {
  return (
    <div className={`double is-flex`}>
      <div
        className={`double__content is-flex is-flex-direction-column ${image && 'double__reduced'}`}
      >
        <p
          className="double__title is-flex-grow-0"
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
          <p className="double__title has-text-white">{title}</p>
          <p className="double__subtext is-size-6 has-text-white">{text}</p>
        </div>
      </div>

      {image && <img className="double__image" src={image} alt={title + '__image'} />}
    </div>
  );
}

export default DoubleComponent;
