import { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
import ModalHead from '../../shared/modal/ModalHead';
import ModalFooter from '../../shared/modal/ModalFooter';
import './scss/_notifyModal.scss';
import '../../shared/scss/_standardModal.scss';

function NotifyModal({ idModal }) {
  const api = process.env.REACT_APP_INOVERTE_API;
  const emailsUrl = api + 'emails/';
  let [submited, setSubmited] = useState(false);
  let [saved, setSaved] = useState(false);
  let [email, setEmail] = useState('');

  init(process.env.REACT_APP_EMAILJS_USER);

  function handleSubmit() {
    if (navigator.onLine && email !== '') {
      setSubmited(true);
      postEmail();
    }
  }

  const postEmail = async () => {
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
    await resp.json();
    sendEmail();
    setSaved(true);
  };

  function sendEmail() {
    emailjs
      .send(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_NOTIFY_TEMPLATE, {
        mail: email,
      })
      .then((res) => {
        console.log('Email successfully sent!');
        console.log(res);
      })
      .catch((err) =>
        console.error('Oh well, you failed. Here some thoughts on the error that occured:', err),
      );
  }

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
                      type="email"
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
