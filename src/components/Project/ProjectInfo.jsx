/* eslint-disable no-unused-vars */
import './scss/_projectInfo.scss';
import location_icon from '../../assets/images/icons/location.png';
import water_icon from '../../assets/images/icons/water.png';
import people_icon from '../../assets/images/icons/people.png';
import contamination_icon from '../../assets/images/icons/contamination.png';

function ProjectInfo({ title, categories, location, description, characteristics }) {
  const icons=[water_icon, people_icon, contamination_icon];

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center">
      <div className="is-flex is-align-items-center is-flex-wrap-wrap">
        <div className="project__categories mr-5">
          {categories?.map((category, i) => (
            <div className="project__category is-flex is-align-items-flex-end" key={category + i}>
              <div className={category} title={`Proyecto pertenece a la categoria ${category}`} />
              <p className="ml-1 mr-2 my-4 is-size-7">
                <span className="is-capitalized">{category}</span> energy
              </p>
            </div>
          ))}
        </div>
        <div className="project__location is-align-self-flex-end is-flex is-align-items-center mb-2">
          <img src={location_icon} alt="location_icon" />
          <p className="is-size-7 is-align-self-center">{location}</p>
        </div>
      </div>
      <h1 className="title is-4 has-text-dark mt-4">{title}</h1>
      <div className="project__characteristics">
        {characteristics?.map((characteristic, i) => (
          <div className="project__characteristic is-flex is-align-items-flex-center" key={characteristics + i}>
            <img src={icons[i]} alt={"icon_"+i} />
            <p className="ml-1 mr-2 is-size-7 pt-1">
              {characteristic}
            </p>
          </div>
        ))}
      </div>
      <div className="project__description mt-4">
        {description.map((paragraph, i) => (
          <p className="has-text-grey" key={"p_number_"+i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default ProjectInfo;
