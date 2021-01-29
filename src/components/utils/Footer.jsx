
import '../../assets/scss/_footer.scss';

function Footer() {
  const inoverte = ['Home','Projects', 'About us', 'Our impact'];
  const socialMedia = ['twitter', 'facebook', 'instagram', 'linkedin', 'pinterest', 'whatsapp', 'envelope'];
  
  let SocialMedia = ({ icons }) => {
    const list = icons.map((icon) => (
      <div className="icon-container mx-1 is-flex is-justify-content-center is-align-items-center" key={"footer-"+icon}>
        <i className={"fa fa-"+icon+" fa-lg"}></i>
      </div>
    ));
    return (
      <div className="icons-container">
        {list}
      </div>
    );
  };

  let Links = ({links}) => {
    const list = links.map((link) => (
      <a className="mx-3 is-uppercase" href={"#"+link} key={"footer-"+link}>{link}</a>
    ));
    return(
      <div className="text-container is-flex is-justify-content-center is-align-items-center">
        <span className="mx-3">
        @COPYRIGHT 2021
        </span>
        {list}
      </div>
    );
  }

  return (
    <footer className="footer p-6 has-background-grey-light">
      <div className="container">
        <div className="is-flex is-flex-direction-column is-justify-content-center">
          <SocialMedia icons={socialMedia} />
          <div className="my-3"></div>
          <Links links={inoverte} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
