import LogoDefault from '../assets/images/logo.png';

function Navbar({ items, logo }) {
  return (
    <nav className="navbar py-2 is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img alt="iKonnekta logo" src={logo || LogoDefault} width="112" height="28" />
        </a>
        <a
          href="a.com"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="dropdown">
              <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>EN/ES</span>
                  <span className="icon is-small">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <a href="#Home" className="dropdown-item is-active">
                  English
                </a>
                <a href="#Home" className="dropdown-item">
                  Español
                </a>
              </div>
            </div>
          </div>
          {items.map((e) => (
            <a key={e} href={`#${e}`} className="navbar-item">
              {e}
            </a>
          ))}
          <div className="buttons ml-5">
            <a href="a.com" className="button is-info">
              <strong>Help now</strong>
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="a.com" className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a href="a.com" className="button is-light">
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
