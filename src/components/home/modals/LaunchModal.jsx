/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import BulmaModal from '../../../utils/bulmaModal';
import Countdown from '../../shared/Countdown';
import ReactCardFlip from 'react-card-flip';

import './scss/_launchModal.scss';

function LaunchModal() {
  const [isFlipped, setFlipped] = useState(false);

  useEffect(() => {
    new BulmaModal('#launchModal');
  }, []);

  return (
    <div className="modal launch is-active" id="launchModal">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="launch__head is-flex is-justify-content-space-between ">
          <img
            className="launch__logo"
            src={process.env.REACT_APP_IMAGES_SRC + 'logo.jpg'}
            alt="logo"
          />
          <button className="launch__close" aria-label="close" data-bulma-modal="close"></button>
        </div>
        <div className="launch__container is-flex is-flex-direction-column is-align-items-center">
          <img
            className="launch__icon"
            src={process.env.REACT_APP_IMAGES_SRC + 'logo-icon.png'}
            alt="minicon"
          />
          <p className="launch__title has-text-centered is-uppercase has-text-white">
            Be ready, we are launching soon
          </p>
          <img
            className="launch__name mt-6"
            src={process.env.REACT_APP_IMAGES_SRC + 'logo-backless.png'}
            alt="logoname"
          />
          <hr className="launch__line" />
          <p className="launch__text is-size-7 has-text-centered has-text-white">
            You will be available soon to support the most innovative renewable projects that will
            bring <strong className="has-text-white"> electricity &amp; water </strong> to
            communities that need it
          </p>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div>
              <div className="is-flex is-justify-content-center">
                <button
                  className="launch__button is-uppercase is-size-7"
                  onClick={() => setFlipped(true)}
                >
                  Notify me
                </button>
              </div>
            </div>
            <div>
              <div className="is-flex is-justify-content-space-evenly">
                <input
                  className="input launch__input"
                  type="text"
                  placeholder="Write your email!"
                />
                <button className="launch__button is-uppercase is-size-7">Submit</button>
              </div>
            </div>
          </ReactCardFlip>

          <div className="launch__countdown">
            <Countdown date={'March 30, 2021 03:24:00'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchModal;
