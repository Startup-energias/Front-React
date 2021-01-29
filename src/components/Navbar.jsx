import { Auth } from 'aws-amplify';
import LogoDefault from '../assets/images/logo-black.png';
import '../assets/scss/_navbar.scss';

function Navbar({ items, logo }) {
  return (
    <nav
      className="navbar is-white is-fixed-top py-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img alt="iKonnekta logo" src={logo || LogoDefault} />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          {items.map((e) => (
            <a key={e} href={`#${e}`} className="navbar-item is-size-5 mx-6 has-text-dark">
              {e}
            </a>
          ))}
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
