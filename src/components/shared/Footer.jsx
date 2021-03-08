import React from 'react';
import { socialMedia } from '../../helpers/constants/socialMedia';
import './scss/_footer.scss';

function Footer() {
  const inoverte = ['Home', 'Projects', 'About us', 'Our impact'];
  let SocialMedia = () => {
    const list = socialMedia.map((actual) => (
      <React.Fragment key={'footer-' + actual.icon}>
        {actual.link ? (
          <a
            className="icon-container mx-1 is-flex is-justify-content-center is-align-items-center"
            href={actual.link}
            target="Starfall"
          >
            <i className={'fa fa-' + actual.icon + ' fa-lg'}></i>
          </a>
        ) : (
          <div className="icon-disabled mx-1 is-flex is-justify-content-center is-align-items-center">
            <i className={'fa fa-' + actual.icon + ' fa-lg'}></i>
          </div>
        )}
      </React.Fragment>
    ));
    return <div className="icons-container">{list}</div>;
  };

  let Links = ({ links }) => {
    const list = links.map((link) => (
      <a className="mx-3 is-uppercase" href={'/#' + link} key={'footer-' + link}>
        {link}
      </a>
    ));
    return (
      <div className="text-container is-flex is-justify-content-center is-align-items-center has-text-light">
        <span className="mx-3">@COPYRIGHT 2021</span>
        {list}
      </div>
    );
  };

  return (
    <footer className="footer px-6 pb-6 pt-2 has-background-dark">
      <div className="container">
        <div className="is-flex is-flex-direction-column is-justify-content-center">
          <SocialMedia />
          <div className="my-3"></div>
          <Links links={inoverte} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
