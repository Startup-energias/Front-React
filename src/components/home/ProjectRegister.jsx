import './scss/_projectRegister.scss';
import register from '../../assets/images/register/register.png';

function proyectRegister() {
  return (
    <section className="projectRegister is-flex is-justify-content-center has-background-light">
      <img src={register} alt="Logo of Register your project section" />
      <div className="projectRegister__body is-flex is-flex-direction-column">
        <h5 className="monserrat-bold mb-5">Register your project</h5>
        <ul>
          <li>
            - Click at the button and fill the format: We want to know everything about your
            project.
          </li>
          <br />
          <li>- Wait for our evaluation and follow the instructions.</li>
          <br />
          <li>
            - Take Your Project to a New Level, start receiving funding and human talent for your
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
    </section>
  );
}

export default proyectRegister;
