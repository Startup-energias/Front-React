import './scss/_registerModal.scss';
import '../../shared/scss/_standardModal.scss';
import ModalHead from '../../shared/modal/ModalHead';
import ModalFooter from '../../shared/modal/ModalFooter';

function RegisterModal({ idModal }) {
  return (
    <div className="modal register" id={idModal}>
      <div className="modals">
        <div className="modal-background"></div>
        <div className="modal-content is-flex is-justify-content-center has-background-white">
          <div className="modals__container is-flex is-flex-direction-column is-align-items-center">
            <ModalHead />
            <div className="modals__content is-flex is-justify-content-center">
              <div className="modals__img is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <img src={process.env.REACT_APP_IMAGES_SRC + 'home/register.png'} alt="register" />
              </div>
              <div className="modals__form is-flex is-flex-direction-column is-align-items-center">
                <h1 className="title has-text-dark has-text-centered is-capitalized">
                  Register a project
                </h1>
                <ul className="has-text-dark">
                  <li>
                    Click at the button and fill the format: We want to know everything about your
                    project.
                  </li>
                  <br />
                  <li>Wait for our evaluation and follow the instructions.</li>
                  <br />
                  <li>
                    Take Your Project to a New Level, start receiving funding and human talent for
                    your project as an official inverter member.
                  </li>
                </ul>
                <button className="button modals__button">Register</button>
              </div>
            </div>
            <ModalFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
