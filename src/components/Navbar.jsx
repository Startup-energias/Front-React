import LogoDefault from '../assets/images/logo-black.png';
import '../assets/scss/_navbar.scss';

function Navbar({ items, logo }) {
  //const langs = ['English', 'Español'];
  
  return (
    <nav className="navbar is-white is-fixed-top py-2" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img alt="iKonnekta logo" src={logo || LogoDefault} />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {/*<div className="navbar-item">
            <div className="dropdown">
              <div className="dropdown-trigger">
                <button className="button is-info is-small" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span><strong>EN/ES</strong></span>
                  <span className="icon is-small">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu has-background-info-light has-text-dark" id="dropdown-menu" role="menu">
                <a href="#Home" className="dropdown-item is-active">
                  {langs[0]}
                </a>
                <a href="#Home" className="dropdown-item">
                  {langs[1]}
                </a>
              </div>
            </div>
          </div>*/}
            
          
        </div>
        <div className="navbar-end">
          {items.map((e) => (
              <a key={e} href={`#${e}`} className="navbar-item is-size-5 mx-6 has-text-dark">
                {e}
              </a>
            ))}
          <div className="navbar-item">
            <div className="buttons">
              <a href="a.com" className=" has-text-dark ml-6 mr-4">
                <strong>Sign up</strong>
              </a>
              <div className="navbar-line"></div>
              <a href="a.com" className=" has-text-dark ml-4 mr-6">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
