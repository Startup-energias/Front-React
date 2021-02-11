import './scss/_aboutTeam.scss';
import { aboutInfo } from '../../helpers/constants/aboutInfo';

function TeamComponent() {
  return (
    <div className="team  is-flex is-flex-direction-column">
      <div className="team__image">
        <img src={aboutInfo.team} alt="team img" />
        <h1 className="team__title title is-uppercase has-text-white">Team</h1>
      </div>
    </div>
  );
}

export default TeamComponent;
