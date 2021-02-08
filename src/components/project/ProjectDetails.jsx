import { useState, useEffect } from 'react';
import BulmaModal from '../../utils/bulmaModal';
import './scss/_projectDetails.scss';
import { modalIcons } from '../../helpers/constants/shareContent';

function ProjectDetails({
  goal,
  amount,
  organization,
  supporters,
  university,
  company,
  slogan,
  logo,
  email,
  imgSrc,
}) {
  const percentage = Math.round((amount * 100) / goal);
  const titles = ['Support now', 'Pay now', 'Resources', 'Skills', 'Share'];
  let [title, setTitle] = useState(titles[0]);
  let [show, setShow] = useState([true, false, false, false, false]);

  useEffect(() => {
    var btn = document.querySelector('#supportBtn');
    var mdl = new BulmaModal('#supportModal');

    btn.addEventListener('click', function () {
      mdl.show();
    });
  }, []);

  function ChangeModal(arrayId) {
    if (arrayId != -1 && modalIcons.support[arrayId].link) {
      window.location = modalIcons.support[arrayId].link;
    } else {
      arrayId += 1;
      let temp = [false, false, false, false, false];
      temp[arrayId] = true;

      setTitle(titles[arrayId]);
      setShow(temp);
    }
  }

  return (
    <div className="is-flex is-flex-direction-column has-text-dark">
      <div className="project__percentage mt-6 is-flex is-flex-direction-column is-align-items-center">
        <i className="mb-2">
          <span className="is-size-2 has-text-dark">{percentage}%</span>
        </i>
      </div>
      <p className=" is-size-3 has-text-centered">${goal} Raised</p>
      <p className=" is-size-5 has-text-centered has-text-black">of ${goal}</p>
      <p className=" is-size-2 has-text-centered is-italic">Starting soon!</p>
      <button
        id="supportBtn"
        className="project__button button is-align-self-center is-flex is-justify-content-center is-align-items-center is-size-4 title has-text-dark has-background-light"
      >
        Support now
      </button>

      <div className="modal" id="supportModal">
        <div
          className="modal-background"
          onClick={() => ChangeModal(-1)}
          onKeyDown={() => ChangeModal(-1)}
          aria-hidden="true"
        ></div>
        <div className="modal-card">
          <section className="modal-card-body has-background-light">
            <div className="is-flex mb-6">
              <p className="modal-card-title is-flex-grow-1 mb-0 is-align-items-center title is-2 has-text-dark has-text-centered">
                {title}
              </p>
              <button
                className="modal__close"
                aria-label="close"
                data-bulma-modal="close"
                onClick={() => ChangeModal(-1)}
              ></button>
            </div>
            {show[0] && (
              <div className="is-flex is-justify-content-center">
                {modalIcons.support.map((icon, i) => (
                  <div className="modal__icon modal__pointer mx-2" key={'modal-icon' + i}>
                    <img
                      src={icon.image}
                      alt={'modal-support' + i}
                      onClick={() => ChangeModal(i)}
                      onKeyDown={() => ChangeModal(-1)}
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            )}
            {show[2] && (
              <div className="is-flex is-justify-content-center mx-5">
                <div className="modal__icon mx-3">
                  <img src={modalIcons.support[1].image} alt={'resources-icon'} />
                </div>
                <p className="is-size-6 is-flex is-flex-direction-column is-justify-content-center">
                  Please contact us at {email} to give resources to the project
                </p>
              </div>
            )}
            {show[3] && (
              <div className="is-flex is-justify-content-center mx-5">
                <div className="modal__icon mx-3">
                  <img src={modalIcons.support[2].image} alt={'skills-icon'} />
                </div>
                <p className="is-size-6 is-flex is-flex-direction-column is-justify-content-center">
                  Fill the form and share your skills with the team! Contact us at {email}
                </p>
              </div>
            )}
            {show[4] && (
              <div className="is-flex is-justify-content-center">
                {modalIcons.media.map((icon, i) => (
                  <div className="modal__icon modal__pointer mx-2" key={'modal-icon' + i}>
                    <img
                      src={icon}
                      alt={'modal-share' + i}
                      onClick={() => ChangeModal(i)}
                      onKeyDown={() => ChangeModal(-1)}
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            )}
            {!show[0] && (
              <div className="buttons is-flex mt-4 pl-4">
                <button className="button is-info" onClick={() => ChangeModal(-1)}>
                  Back
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      <hr />
      <div className="project__details is-align-items-self-start m-4 px-2">
        <h1 className="title is-size-4 has-text-dark">Details</h1>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">Organization type</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{organization}</p>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">Supporters</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{supporters}</p>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">University</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{university}</p>
      </div>
      <hr />
      <div className="project__details is-align-items-self-start is-flex is-flex-direction-column m-4 px-2">
        <h1 className="title is-size-4 has-text-dark">Company</h1>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">Name</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{company}</p>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">Slogan</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{slogan}</p>
        <img className="is-align-self-center" src={imgSrc + logo} alt="company_logo" />
      </div>
    </div>
  );
}

export default ProjectDetails;
