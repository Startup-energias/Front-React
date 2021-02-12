/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { modalIcons } from '../../helpers/constants/shareContent';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import ModalHead from '../shared/modal/ModalHead';
import ModalFooter from '../shared/modal/ModalFooter';
import '../shared/scss/_standardModal.scss';
import './scss/_supportModal.scss';

function SupportModal({ modalId, email, name, resources }) {
  const titles = ['Support Now', 'Pay now', 'Skills', 'Resources', 'Share'];

  let [title, setTitle] = useState(titles[0]);
  let [show, setShow] = useState([true, false, false, false, false]);

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
    <div className="modal support" id={modalId}>
      <div className="modals">
        <div className="modal-background" aria-hidden="true"></div>
        <div className="modal-content is-flex is-justify-content-center">
          <div className="modals__container is-flex is-flex-direction-column is-align-items-center">
            <ModalHead />
            <div className="modals__content is-flex is-flex-direction-column is-align-items-center">
              <p className="modals__supertitle title has-text-dark has-text-centered">{title}</p>
              {show[0] && (
                <div className="modals__icons is-flex is-justify-content">
                  {modalIcons.support.map((icon, i) => (
                    <div
                      className="is-flex is-flex-direction-column is-align-items-center"
                      onClick={() => ChangeModal(i)}
                      onKeyDown={() => ChangeModal(i)}
                      aria-hidden="true"
                      key={'supp-icon' + i}
                    >
                      <img
                        className="modals__pointer"
                        src={icon.image}
                        alt={'supp-img-' + i}
                        width={'30px'}
                      />
                      <p className="is-size-4">{icon.title}</p>
                    </div>
                  ))}
                </div>
              )}
              {show[2] && (
                <div className="is-flex is-justify-content-center mx-5">
                  <div className="modals__bigicon mx-3">
                    <img src={modalIcons.support[1].image} alt={'skills-icon'} />
                  </div>
                  <p className="is-size-6 is-flex is-flex-direction-column is-justify-content-center">
                    Fill the form and share your skills with the team! Contact us at {email}
                  </p>
                </div>
              )}
              {show[3] && (
                <div className="is-flex is-justify-content-center mx-5">
                  <div className="modals__bigicon mx-3">
                    <img src={modalIcons.support[2].image} alt={'resources-icon'} />
                  </div>
                  <div className="is-flex is-flex-direction-column is-justify-content-center">
                    <p className="is-size-6 mb-2">What resources can you donate to the project?</p>
                    <div className="is-flex is-flex-wrap-wrap">
                      {resources.map((resource, i) => (
                        <label className="checkbox mx-2" key={'resource_' + i}>
                          <input type="checkbox" />
                          {resource}
                        </label>
                      ))}
                      <label className="checkbox mx-2">
                        <input type="checkbox" />
                        Other
                      </label>
                    </div>

                    <p className="is-size-6 mt-5">Click and send your request to the team!</p>
                    <button className="button btn-primary">Send email</button>
                  </div>
                </div>
              )}
              {show[4] && (
                <div className="modals__media is-flex is-justify-content">
                  <div className="modal__pointer">
                    <LinkedinShareButton title={name} url={'www.inoverte.com/projects'}>
                      <img
                        className="modal__pointer"
                        src={modalIcons.media.linkedin}
                        alt={'modal-share-linkedin'}
                        aria-hidden="true"
                      />
                    </LinkedinShareButton>
                  </div>
                  <div>
                    <TwitterShareButton title={name} url={'www.inoverte.com/projects'}>
                      <img
                        className="modal__pointer"
                        src={modalIcons.media.twitter}
                        alt={'modal-share-twitter'}
                        aria-hidden="true"
                      />
                    </TwitterShareButton>
                  </div>
                  <div>
                    <FacebookShareButton title={name} url={'www.inoverte.com/projects'}>
                      <img
                        className="modal__pointer"
                        src={modalIcons.media.facebook}
                        alt={'modal-share-facebook'}
                        aria-hidden="true"
                      />
                    </FacebookShareButton>
                  </div>
                </div>
              )}
              {!show[0] && (
                <div className="buttons is-flex mt-4 pl-4">
                  <button className="button modals__button" onClick={() => ChangeModal(-1)}>
                    Back
                  </button>
                </div>
              )}
            </div>
            <ModalFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportModal;
