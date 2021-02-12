/* eslint-disable no-unused-vars */
import './scss/_aboutTeam.scss';
function TeamComponent({ title, color, team, advisors }) {
  return (
    <div className={'team'}>
      <div className={'team__text is-flex is-flex-direction-column'}>
        <p className={'team__title is-flex-grow-0 is-uppercase has-text-' + color}>Our</p>
        <div className={'is-flex-grow-1 has-background-' + color}>
          <p className="team__title has-text-white is-uppercase">{title}</p>
        </div>
      </div>
      <div className="team__members is-flex is-flex-wrap-wrap is-justify-content-center is-multiline mx-3">
        {team.map((member, i) => (
          <div
            className="team__member is-flex is-flex-direction-column has-background-dark"
            key={'member-' + i}
          >
            <img
              className="team__image"
              src={
                member.image ? member.image : process.env.REACT_APP_IMAGES_SRC + 'team/default.png'
              }
              alt={member.name + '-image'}
            />
            <h2 className="has-text-centered has-text-primary is-size-2">{member.name}</h2>
            <h3 className="has-text-centered has-text-primary is-size-4">{member.role}</h3>
            <h4 className="has-text-centered has-text-primary is-size-6">{member.email}</h4>
          </div>
        ))}
      </div>

      <div className="team__members is-flex is-flex-wrap-wrap is-justify-content-center is-multiline mx-3">
        {advisors.map((member, i) => (
          <div
            className="team__member is-flex is-flex-direction-column has-background-info"
            key={'member-' + i}
          >
            <img
              className="team__image"
              src={
                member.image ? member.image : process.env.REACT_APP_IMAGES_SRC + 'team/default.png'
              }
              alt={member.name + '-image'}
            />
            <h2 className="has-text-centered has-text-white is-size-2">{member.name}</h2>
            <h3 className="has-text-centered has-text-white is-size-4">{member.role}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamComponent;
