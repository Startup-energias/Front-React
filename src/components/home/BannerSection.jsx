import { useEffect } from 'react';
import BulmaModal from '../../utils/bulmaModal';
import LaunchModal from './modals/LaunchModal';
import NotifyModal from './modals/NotifyModal';
import RegisterModal from './modals/RegisterModal';
import './scss/_bannerSection.scss';

const images = process.env.REACT_APP_IMAGES_SRC + 'home/';
const launchId = 'launchModal';
const registerId = 'registerModal';
const registerBtn = 'registerBtn';
const notifyId = 'notifyModal';
const notifyBtn = 'notifyBtn';

function InfoSection() {
  useEffect(() => {
    new BulmaModal('#' + launchId);

    var btnRegister = document.querySelector('#' + registerBtn);
    var mdlRegister = new BulmaModal('#' + registerId);

    btnRegister.addEventListener('click', function () {
      mdlRegister.show();
    });

    var btn = document.querySelector('#' + notifyBtn);
    var mdl = new BulmaModal('#' + notifyId);

    btn.addEventListener('click', function () {
      mdl.show();
    });
  }, []);

  return (
    <div
      className="infoSection is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center"
      id="Home"
    >
      <div className="infoSection__container">
        <div className="infoSection__title mb-6">
          <div className="infoSection__title__text">
            <p className="title mb-1">Are you passionate about renewable energy?</p>
            <p className="infoSection__title__sub">We too! Join Inoverte community</p>
          </div>
        </div>
        <p className="infoSection__subtext">
          We connect renewable energy projects and financing to benefit off-grid communities
        </p>
        <div className="buttons mt-3">
          <button id={registerBtn} className="infoSection__button has-text-centered">
            Boost your renewable project
          </button>
          <a href="#Projects">
            <button id="financeBtn" className="infoSection__button has-text-centered">
              Finance a renawable project
            </button>
          </a>
        </div>
      </div>
      <img
        className="infoSection__img mt-4"
        src={images + 'banner.png'}
        alt="people collaborating to get clean energies"
      />
      <LaunchModal idModal={launchId} notifyBtn={notifyBtn} />
      <RegisterModal idModal={registerId} />
      <NotifyModal idModal={notifyId} />
    </div>
  );
}

export default InfoSection;
