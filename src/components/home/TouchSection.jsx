import emailjs from 'emailjs-com';
import './scss/_touchSection.scss';

function TouchSection() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_TOUCH_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAILJS_USER,
      )
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
      <div className="touch__container is-flex is-flex-wrap">
        <div className="touch__content is-flex is-flex-direction-column">
          <p className="is-size-6 mb-6">
            We would love to hear from you! Please leave us your message and we will get back to you
            soon
          </p>
          <ul>
            <li>
              <a className="is-flex" href="tel:+573144773523">
                <span className="touch__icon touch__bigger">
                  <i className=" fa fa-whatsapp"></i>
                </span>
                <span className="text">+57 314 4773523</span>
              </a>
            </li>
            <li>
              <a className="is-flex" href="mailto:support@inoverte.com">
                <span className="touch__icon touch__circle">
                  <i className=" fa fa-envelope "></i>
                </span>
                <span className="text">support@inoverte.com</span>
              </a>
            </li>
            <li className="is-flex">
              <span className="touch__icon touch__circle">
                <i className=" fa fa-map-marker "></i>
              </span>
              <span className="text">Bogotá, Colombia</span>
            </li>
          </ul>
        </div>
        <div className="touch__input is-flex is-flex-direction-column">
          <div className="box">
            <h2 className="title is-3 my-5 is-capitalized">Say something</h2>
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
      </div>
      <div className="bottom"></div>
    </section>
  );
}

export default TouchSection;
