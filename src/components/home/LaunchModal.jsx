/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import BulmaModal from '../../utils/bulmaModal';
import Countdown from '../shared/Countdown';
import './scss/_launchModal.scss';

function LaunchModal() {
  useEffect(() => {
    var mdl = new BulmaModal('#countdownModal');
  }, []);

  return (
    <div className="modal is-active" id="countdownModal">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="modal__head is-flex is-justify-content-space-between ">
          <img
            className="modal__logo"
            src={process.env.REACT_APP_IMAGES_SRC + 'logo.jpg'}
            alt="logo"
          />
          <button className="modal__close" aria-label="close" data-bulma-modal="close"></button>
        </div>
        <div className="modal__container is-flex is-flex-direction-column is-align-items-center">
          <img
            className="modal__icon"
            src={process.env.REACT_APP_IMAGES_SRC + 'logo-icon.png'}
            alt="minicon"
          />
          <p className="is-size-3 has-text-centered is-uppercase has-text-white">
            Be ready, we are launching soon
          </p>
          <img
            className="modal__name mt-6"
            src={process.env.REACT_APP_IMAGES_SRC + 'logo-backless.png'}
            alt="logoname"
          />
          <hr className="modal__line" />
          <p className="modal__text is-size-7 has-text-centered has-text-white">
            You will be available soon to support the most innovative renewable projects that will
            bring <strong className="has-text-white"> electricity &amp; water </strong> to
            communities that need it
          </p>
          <button className="modal__button is-uppercase is-size-7">Notify me</button>
          <div className="modal__countdown">
            <Countdown date={new Date('March 30, 2021 03:24:00')} />
          </div>
        </div>

        <div className="container"></div>
      </div>
    </div>
  );
}

export default LaunchModal;
