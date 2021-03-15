import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './scss/_navbar.scss';

function Navbar({ items, auth }) {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <nav
      className="navbar is-white is-fixed-top py-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand is-align-items-center">
        <Link to="/">
          <img
            alt="Inoverte logo || Redirect to home"
            src={process.env.REACT_APP_IMAGES_SRC + 'logo.jpg'}
          />
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
        <a href={`/#Projects`} className="navbar-item mx-6 has-text-dark">
          {items[0]}
        </a>
        <a href={`/about`} className="navbar-item mx-6 has-text-dark">
          {items[1]}
        </a>
        <a href={`/#Supporters`} className="navbar-item mx-6 has-text-dark">
          {items[2]}
        </a>
        {/*items.map((e) => (
            <a key={e} href={`/${e}`} className="navbar-item mx-6 has-text-dark">
              {e}
            </a>
          ))*/}
        <div className="navbar-end pr-4">
          <a id="SupportNow" href={`/#Projects`} className="mx-6">
            <button id="SupportNow" className="button navbar-btn">
              {items[3]}
            </button>
          </a>
          <div className="navbar-divider" />
          <div className="navbar-item navbar__registration">
            <div className="buttons is-justify-content-center">
              {auth ? (
                <button
                  onClick={() => {
                    Auth.signOut();
                  }}
                  className="button is-white has-text-weight-bold"
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => {
                    Auth.federatedSignIn();
                  }}
                  className="button is-white has-text-weight-bold"
                >
                  Login / Sign up
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
const props = (state) => ({
  auth: state.user.auth,
});

export default connect(props, null)(Navbar);
