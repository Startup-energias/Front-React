import './scss/_projectCard.scss';
import { Link } from 'react-router-dom';
import { universities } from '../../helpers/constants/universitiesInfo';
function ProjectCard({
  _id,
  card,
  name,
  categories,
  ubication,
  smallDescription,
  goal,
  amount,
  supporters,
  university,
  finished,
}) {
  const projects__img =
    process.env.REACT_APP_IMAGES_SRC + 'projects/projects__images/project__' + _id + '/';
  const projects__un = process.env.REACT_APP_IMAGES_SRC + 'projects/universities/';
  const percentage = parseInt(amount / goal);
  const projects__card = card
    ? projects__img + card
    : process.env.REACT_APP_IMAGES_SRC + 'util/placeholder.png';

  const cardImg = (
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
  );

  const cardBody = (
    <div className="projectCard__body">
      {!finished && (
        <div className="projectCard__body--unavailable">
          <p className="monserrat-bold"> Coming soon </p>
        </div>
      )}
      <div className="projectCard__content pt-4">
        <p className="ubication mb-2">{ubication}</p>
        <div>
          <p className="title mb-2">{name}</p>
          <p>{smallDescription}</p>
        </div>
      </div>
      <div className="projectCard__badges my-5">
        <div className="badge">
          <img
            className="mb-2"
            src={projects__un + universities[university].img}
            alt="university logo"
          />
          <p className="has-text-centered">{universities[university].abrv}</p>
        </div>
        <div className="divisor" />
        <div className="badge">
          <i className="badge__circle mb-2">{percentage}</i>
          <p>Raised </p>
          <p className="badge__text--little">of {`${goal}`}</p>
        </div>
        <div className="divisor" />
        <div className="badge">
          <img
            className="mb-2"
            src={process.env.REACT_APP_IMAGES_SRC + 'projects/user.png'}
            alt="user logo"
          />
          <p>Supports</p>
          <p className="badge__text--little">{supporters}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={'projectCard ' + (finished && 'enabled')}>
      {finished ? (
        <Link to={'/projects/' + _id} title={`Ver más detalles del proyecto ${name}`}>
          {cardImg}
          {cardBody}
        </Link>
      ) : (
        <div>
          {cardImg}
          {cardBody}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
