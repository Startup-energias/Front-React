/* eslint-disable no-unused-vars */
import './scss/_projectCard.scss';
import { Link } from 'react-router-dom';
function ProjectCard({
  _id,
  card,
  name,
  categories,
  ubication,
  smallDescription,
  features,
  goal,
  amount,
  finished,
}) {
  const projects__img =
    process.env.REACT_APP_IMAGES_SRC + 'projects/projects__images/project__' + _id + '/';
  const percentage = parseInt(Math.random() * 100);
  const projects__card = card
    ? projects__img + card
    : process.env.REACT_APP_IMAGES_SRC + 'util/placeholder.png';

  return (
    <div className="projectCard enabled">
      <div
        className="projectCard__image"
        style={{
          backgroundImage: `url(${projects__card})`,
        }}
      >
        <div className="projectCard__categories">
          {categories?.map((category, index) => (
            <div
              className={category}
              key={category + index}
              title={`Proyecto pertenece a la categoria ${category}`}
            />
          ))}
        </div>
      </div>

      <div className="projectCard__body">
        <div className="projectCard__content pt-4">
          <p className="ubication mb-2">{ubication}</p>
          <div>
            <p className="title mb-2">{name}</p>
            <p>{smallDescription}</p>
          </div>
        </div>
        <div className="projectCard__features is-flex is-flex-direction-column my-2">
          <div className="is-flex">
            <p>
              <span className="fa fa-users" aria-hidden="true" />
              Directly affects {features.people} people
            </p>
          </div>
          <div className="is-flex">
            <p>
              <span className="fa fa-cloud" aria-hidden="true" />
              Reduces {features.emissions}kg CO2 emission p.a.
            </p>
          </div>
          <div className="is-flex">
            <p>
              <span className="fa fa-line-chart" aria-hidden="true" />
              {features.return}% expected annual return
            </p>
          </div>
          <div className="is-flex">
            <p>
              <span className="fa fa-clock-o" aria-hidden="true" />
              {features.year} completition year
            </p>
          </div>
          <div className="projectCard__progress">
            <p>{percentage}% funded</p>
            <progress className="progress is-dark" value={percentage} max="100">
              {percentage}
            </progress>
          </div>
        </div>

        <div className="buttons is-centered">
          <Link to={'/projects/' + _id} title={`Ver más detalles del proyecto ${name}`}>
            <button className="button projectCard__button">Invest</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
