import { volunteerContent } from '../helpers/constants/shareContent';
import './scss/_volunteer.scss';

function Volunteer() {
  return (
    <div className="volunteer is-flex is-flex-direction-column is-align-items-center">
      <div className="info is-flex is-flex-direction-column is-align-items-center">
        {volunteerContent.info.map((infoSec, i) => (
          <div
            className={
              'row is-flex is-flex-direction-column is-justify-content-center' +
              (i % 2 == 1 ? ' right' : ' left')
            }
            key={'infoSec__' + i}
          >
            <h2 className="has-text-dark">{infoSec.title}</h2>
            <p className=" has-text-dark">{infoSec.content}</p>
          </div>
        ))}
      </div>
      <div className="buttons is-centered mb-4">
        <a
          className="button volunteer__button"
          href="https://docs.google.com/forms/d/e/1FAIpQLScQuzf28KkhRwfQHYmsjAzDoeUp0C4NMy0wPfXTw4vcnJVibg/viewform"
        >
          Continue
        </a>
      </div>
    </div>
  );
}

export default Volunteer;
