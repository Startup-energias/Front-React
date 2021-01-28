
import { useState } from 'react';
import logo from '../../assets/images/logo-black.png';
import '../../assets/scss/_footer.scss';

function Footer() {
  const inoverte = ['Home','Projects', 'About us', 'Our impact'];
  let [socialMedia] = useState(['twitter', 'facebook', 'instagram', 'linkedin', 'pinterest']);
  
  function RenderSocialMedia() {
    return socialMedia.map((item) => (
      <span className="icon-text" key={item}>
        <span className="icon">
          <i className={'fa fa-' + item}></i>
        </span>
      </span>
    ));
  }

  function RenderLinkList({ list }) {
    const listObjects = list.map((item) => {
      return <li key={item}><a href={"#"+item}>{item}</a></li>;
    });

    return (
      <div className="content">
        <img className="logo" src={logo} alt="inoverte_logo" />
        <ul className="link_list">{listObjects}</ul>
      </div>
    );
  }

  return (
    <footer className="footer has-background-grey-lighter p-0">
      <div className="py-5">
        <div className="container">
          <div className="columns is-multiline mx-6 mt-4">
            <div className="column is-5-desktop is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
              <RenderLinkList list={inoverte} />
            </div>

            <div className="column is-7-desktop is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
              <h5 className="title is-5 is-family-monospace">Contact Us!</h5>
              <address className="has-text-centered">
		              Bogotá, Colombia<br/>
		              <i className="fa fa-whatsapp fa-lg"></i>: +852 1234 5678<br/>
                  <i className="fa fa-envelope-o"></i>: <a href="mailto:confusion@food.net">mail@inoverte.com</a>
		           </address>
              <div className="content mt-3">
                <RenderSocialMedia />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="has-background-black has-text-white">
        <div className="container py-3">
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <p>© 2020, Your company. All rights reserved.</p>
              </div>
            </div>
            <div className="level-right">
            <p className="m-1 is-size-4-widescreen is-size-6-desktop has-text-white"><i className="fa fa-cc-paypal fa-lg"></i></p>
            <p className="m-1 is-size-4-widescreen is-size-6-desktop has-text-white"><i className="fa fa-cc-mastercard fa-lg"></i></p>
            <p className="m-1 is-size-4-widescreen is-size-6-desktop has-text-white"><i className="fa fa-cc-visa fa-lg"></i></p>
            <p className="m-1 is-size-4-widescreen is-size-6-desktop has-text-white"><i className="fa fa-cc-diners-club fa-lg"></i></p>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
