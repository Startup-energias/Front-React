/* eslint-disable jsx-a11y/anchor-is-valid */
import { Auth } from 'aws-amplify';
import LogoDefault from '../../assets/images/logo-black.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './scss/_navbar.scss';

function Navbar({ items }) {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <nav
      className="navbar is-white is-fixed-top py-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand is-align-items-center">
        <Link to="/">
          <img alt="Inoverte logo || Redirect to home" src={LogoDefault} />
        </Link>
        <button
          onClick={() => setNavToggle(!navToggle)}
          className={`${navToggle && 'is-active'} button is-white navbar-burger mr-4`}
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div id="navbarBasicExample" className={`${navToggle && 'is-active'} navbar-menu`}>
        <div className="navbar-end pr-4">
          {items.map((e) => (
            <a key={e} href={`#${e}`} className="navbar-item mx-6 has-text-dark">
              {e}
            </a>
          ))}
          <div className="navbar-divider" />
          <div className="navbar-item navbar__registration">
            <div className="buttons is-justify-content-center">
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
