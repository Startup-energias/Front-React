/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './scss/_notifyModal.scss';
import '../../shared/scss/_standardModal.scss';
import ModalHead from '../../shared/modal/ModalHead';
import ModalFooter from '../../shared/modal/ModalFooter';

function NotifyModal({ idModal }) {
  const api = process.env.INOVERTE_API || 'https://inoverte-api.herokuapp.com/';
  const emailsUrl = api + 'emails/';
  let [submited, setSubmited] = useState(false);
  let [saved, setSaved] = useState(false);
  let [email, setEmail] = useState('');

  function handleSubmit() {
    if (navigator.onLine && email !== '') {
      setSubmited(true);
      console.log('wtf');
      postEmail();
    }
  }

  const postEmail = async () => {
    console.log(emailsUrl);
    const resp = await fetch(emailsUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: email,
      }),
    });
    const data = await resp.json();
    console.log(data);
    setSaved(true);
  };

  return (
    <div className="modal notify" id={idModal}>
      <div className="modals">
        <div className="modal-background"></div>
        <div className="modal-content is-flex is-justify-content-center has-background-white">
          <div className="modals__container is-flex is-flex-direction-column is-align-items-center">
            <ModalHead />
            <div className="modals__content is-flex is-justify-content-center">
              <div className="modals__img is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <img src={process.env.REACT_APP_IMAGES_SRC + 'home/notify.png'} alt="notify" />
              </div>
              <div className="modals__form is-flex is-flex-direction-column is-align-items-center">
                <h1 className="title has-text-dark has-text-centered is-capitalized">Notice me</h1>
                <p className="has-text-dark">
                  Add your email and we will notify you on our launch day. Don&apos;t worry we
                  won&apos;t contact you after that.
                </p>
                {submited ? (
                  saved ? (
                    <div className="has-text-dark">Submited</div>
                  ) : (
                    <div className="has-text-dark">Loading...</div>
                  )
                ) : (
                  <div>
                    <input
                      className="input is-info"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="test@correo.com"
                    />
                    <button className="button modals__button" onClick={() => handleSubmit()}>
                      Send
                    </button>
                  </div>
                )}
              </div>
            </div>
            <ModalFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotifyModal;
