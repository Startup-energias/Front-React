import { FormattedMessage } from 'react-intl';
const intlPrefix = 'launchModal.';
import Countdown from '../../shared/Countdown';
import './scss/_launchModal.scss';

function LaunchModal({ idModal, notifyBtn }) {
  return (
    <div className="modal launch is-active" id={idModal}>
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
            <FormattedMessage id={intlPrefix + 'ready'} />
          </p>
          <img
            className="launch__name mt-6"
            src={process.env.REACT_APP_IMAGES_SRC + 'logo-backless.png'}
            alt="logoname"
          />
          <hr className="launch__line" />
          <p className="launch__text is-size-6 has-text-centered has-text-white">
            <FormattedMessage id={intlPrefix + 'info1'} />
            <strong className="has-text-white">
              <FormattedMessage id={intlPrefix + 'infoStrong'} />
            </strong>
            <FormattedMessage id={intlPrefix + 'info2'} />
          </p>
          <div className="is-flex is-justify-content-center">
            <button
              id={notifyBtn}
              aria-label="close"
              data-bulma-modal="close"
              className="launch__button is-uppercase is-size-7"
            >
              <FormattedMessage id={intlPrefix + 'button'} />
            </button>
          </div>

          <div className="launch__countdown">
            <Countdown date={'March 30, 2021 03:24:00'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchModal;
