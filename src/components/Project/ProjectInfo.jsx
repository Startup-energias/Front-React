import './scss/_projectInfo.scss';

const images__icons = process.env.REACT_APP_IMAGES_SRC + 'icons/';

function ProjectInfo({ title, categories, location, description, characteristics }) {
  const icons = [
    images__icons + 'water.png',
    images__icons + 'people.png',
    images__icons + 'contamination.png',
  ];

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center">
      <div className="is-flex is-align-items-center is-flex-wrap-wrap is-justify-content-space-between">
        <div className="project__categories">
          {categories?.map((category, i) => (
            <div className="project__category is-flex is-align-items-flex-end" key={category + i}>
              <div className={category} />
              <p className="ml-1 mr-2 my-4 is-size-7">
                <span className="is-capitalized">{category}</span> energy
              </p>
            </div>
          ))}
        </div>
        <div className="project__location is-align-self-flex-end is-flex is-align-items-center mb-2 mr-5">
          <img src={images__icons + 'location.png'} alt="location_icon" />
          <p className="is-size-7 is-align-self-center">{location}</p>
        </div>
      </div>
      <h1 className="title is-4 has-text-dark mt-4">{title}</h1>
      <div className="project__characteristics is-flex is-flex-wrap-wrap">
        {characteristics?.map((characteristic, i) => (
          <div
            className="project__characteristic is-flex is-align-items-flex-center is-flex-wrap-wrap"
            key={characteristics + i}
          >
            <img src={icons[i]} alt={'icon_' + i} />
            <p className="ml-1 mr-2 is-size-7 pt-1">{characteristic}</p>
          </div>
        ))}
      </div>
      <div className="project__description mt-4">
        {description.map((paragraph, i) => (
          <p className="has-text-grey" key={'p_number_' + i}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProjectInfo;
