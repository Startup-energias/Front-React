import LogoDefault from '../assets/images/logo.png';
import { Auth } from 'aws-amplify';

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
              <button
                onClick={() => {
                  Auth.federatedSignIn();
                }}
                className="button is-success"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
