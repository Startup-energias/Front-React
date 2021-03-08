import './scss/_projectTeam.scss';

function ProjectTeam({ team, imgSrc }) {
  return (
    <div className="project__team is-flex is-flex-direction-column">
      <h1 className="member is-size-4 title has-text-dark m-4">Know our team!</h1>
      {team?.map((member, i) => (
        <div
          className="member__container is-flex is-flex-direction-column is-align-items-flex-center"
          key={'team_member' + i}
        >
          <div className="member__main is-flex is-align-items-center">
            <img
              src={
                member.image
                  ? imgSrc + 'team/' + member.image
                  : process.env.REACT_APP_IMAGES_SRC + 'projects/avatar-default.jpg'
              }
              alt={'avatar_' + i}
            />
            <div className="member__name is-flex is-flex-grow-1 is-flex-direction-column is-justify-content-center">
              <h2 className="has-text-dark subtitle m-0">{member.name}</h2>
              <h3 className="has-text-dark title m-0">{member.role}</h3>
            </div>
          </div>
          <div className="member__content">
            {member.comment && <p>{'"' + member.comment + '"'}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectTeam;
