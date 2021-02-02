import './scss/_projectCard.scss';
import userLogo from '../../assets/images/projects/user.png';
import { Link } from 'react-router-dom';

function ProjectCard({
  image,
  categories,
  team_name,
  description,
  ubication,
  university,
  raised,
  supporters,
  status,
}) {
  return (
    <div className="projectCard">
      <Link to="/projects" title={`Ver más detalles del proyecto ${team_name}`}>
        <div
          className="projectCard__image"
          style={{
            backgroundImage: `url(${image})`,
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
          {!status && (
            <div className="projectCard__body--unavailable">
              <p className="monserrat-bold"> Coming soon </p>
            </div>
          )}
          <div className="projectCard__content pt-4">
            <p className="ubication mb-2">{ubication}</p>
            <div>
              <p className="title mb-2">{team_name}</p>
              <p>{description}</p>
            </div>
          </div>
          <div className="projectCard__badges my-5">
            <div className="badge">
              <img className="mb-2" src={university.img} alt="university logo" />
              <p>{university.name}</p>
            </div>
            <div className="divisor" />
            <div className="badge">
              <i className="badge__circle mb-2">{raised.percentage}</i>
              <p>Raised </p>
              <p className="badge__text--little">of {`${raised.goal}`}</p>
            </div>
            <div className="divisor" />
            <div className="badge">
              <img className="mb-2" src={userLogo} alt="user logo" />
              <p>Supports</p>
              <p className="badge__text--little">{supporters}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
