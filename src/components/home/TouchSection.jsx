import emailjs from 'emailjs-com';
import './scss/_touchSection.scss';

function TouchSection() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_t2mpj2n', 'template_u4bte1v', e.target, 'user_phttUDRbWn6AWK2qIVkWB')
      .then((res) => {
        console.log('Email successfully sent!');
        console.log(res);
      })
      .catch((err) =>
        console.error('Oh well, you failed. Here some thoughts on the error that occured:', err),
      );
    e.target.reset();
  }

  return (
    <section className="touch is-flex is-flex-direction-column is-align-items-center">
      <h1 className="title is-1">Get in touch</h1>
      <div className="is-flex is-flex-wrap is-justify-content-center">
        <div className="touch__content is-flex is-flex-direction-column pt-2">
          <p className="is-size-6 mb-6">
            We would love to hear from you! Please leave us your message and we will get back to you
            soon
          </p>
          <ul>
            <li className="has-text-primary is-flex">
              <span className="touch__icon touch__bigger">
                <i className=" fa fa-whatsapp"></i>
              </span>
              <span className="text has-text-dark">3144773523</span>
            </li>
            <li className="has-text-primary is-flex">
              <span className="touch__icon touch__circle">
                <i className=" fa fa-envelope "></i>
              </span>
              <span className="text has-text-dark">valentina.ballen@inoverte.com</span>
            </li>
            <li className="has-text-primary is-flex">
              <span className="touch__icon touch__circle">
                <i className=" fa fa-map-marker "></i>
              </span>
              <span className="text has-text-dark">Bogotá, Colombia</span>
            </li>
          </ul>
        </div>
        <div className="touch__input box is-flex is-flex-direction-column">
          <h2 className="title is-2 my-5 is-capitalized">Say something</h2>
          <form onSubmit={sendEmail}>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-warning"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
              <span className="icon is-small is-left">
                <i className="fa fa-user-o"></i>
              </span>
            </div>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-warning"
                type="email"
                name="email"
                placeholder="Your mail"
                required
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope-o"></i>
              </span>
            </div>
            <textarea
              className="textarea is-warning"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <div className="touch__button is-flex is-justify-content-center">
              <input type="submit" className="button" value="Send"></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default TouchSection;
