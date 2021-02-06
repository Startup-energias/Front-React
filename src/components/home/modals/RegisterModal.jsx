import './scss/_registerModal.scss';

function RegisterModal({ idModal }) {
  return (
    <div className="modal register" id={idModal}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="register__container is-flex is-justify-content-center is-align-items-center has-background-light">
          <img
            src={process.env.REACT_APP_IMAGES_SRC + 'home/register.png'}
            alt="Logo of Register your project section"
          />
          <div className="register__body is-flex is-flex-direction-column">
            <h5 className="monserrat-bold has-text-dark mb-5">Register your project</h5>
            <ul>
              <li>
                Click at the button and fill the format: We want to know everything about your
                project.
              </li>
              <br />
              <li>Wait for our evaluation and follow the instructions.</li>
              <br />
              <li>
                Take Your Project to a New Level, start receiving funding and human talent for your
                project as an official inverter member.
              </li>
            </ul>
            <a
              className="button is-align-self-center mt-5"
              target="blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScH8Zwvd6nRKG0FcvQ38yfe9DHk3IKBnUwt_ZBAwOOtANkm5g/formrestricted"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
