import LaunchModal from './LaunchModal';
import './scss/_infoSection.scss';

const images = process.env.REACT_APP_IMAGES_SRC + 'home/';

function InfoSection() {
  return (
    <div className="infoSection is-flex is-flex-wrap-wrap is-align-items-center" id="Home">
      <div className="infoSection__container">
        <div className="infoSection__title mb-5">
          <div className="infoSection__title__text">
            <p className="title is-size-1 mb-1">Are you passionate about renewable energy?</p>
            <p className="is-size-4 infoSection__title__sub">We too! Join Inoverte community</p>
          </div>
        </div>
        <p className="infoSection__subtext">
          We connect renewable energy projects and financing to benefit off-grid communities
        </p>
        <div className="buttons mt-3">
          <button
            className="infoSection__button has-text-centered"
            style={{
              color: '#247dff',
              borderColor: '#247dff',
            }}
          >
            Boost your renewable project
          </button>
          <button
            className="infoSection__button has-text-centered"
            style={{
              color: '#23cee0',
              borderColor: '#23cee0',
            }}
          >
            Finance a renawable project
          </button>
        </div>
      </div>
      <img
        className="infoSection__img mt-4"
        src={images + 'people.png'}
        alt="people collaborating to get clean energies"
      />
      <LaunchModal />
    </div>
  );
}

export default InfoSection;
