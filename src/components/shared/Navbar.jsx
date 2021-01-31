import { Auth } from 'aws-amplify';
import LogoDefault from '../../assets/images/logo-black.jpg';
import './scss/_navbar.scss';

function Navbar({ items }) {
  return (
    <nav
      className="navbar is-white is-fixed-top py-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand is-align-items-center">
        <img alt="Inoverte logo" src={LogoDefault} />
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div
          className="navbar-end pr-4
        "
        >
          {items.map((e) => (
            <a key={e} href={`#${e}`} className="navbar-item mx-6 has-text-dark">
              {e}
            </a>
          ))}
          <div className="navbar-divider" />
          <div className="navbar-item">
            <div className="buttons">
              <button
                onClick={() => {
                  Auth.federatedSignIn();
                }}
                className="button is-white has-text-weight-bold"
              >
                Login / Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
