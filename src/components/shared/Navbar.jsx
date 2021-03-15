import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { defaultImagePic } from '../../helpers/constants/userModel';
import './scss/_navbar.scss';

function Navbar({ items, auth, image }) {
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
        <a
          href={`/about`}
          className="navbar-item mx-6 has-text-dark is-flex is-justify-content-center is-align-items-center"
        >
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
          <div className="navbar-item navbar__registration is-flex is-justify-content-center is-align-items-stretch">
            {auth ? (
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link profileImage py-0">
                  <img src={image || defaultImagePic} alt="profile main pic" />
                </div>
                <div className="navbar-dropdown is-boxed">
                  <Link className="navbar-item has-text-dark has-text-weight-bold" to="/profile">
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      Auth.signOut();
                    }}
                    className="button is-white has-text-weight-bold navbar-item has-text-dark"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  Auth.federatedSignIn();
                }}
                className="button--login button is-white has-text-weight-bold"
              >
                Login / Sign up
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
const props = (state) => ({
  auth: state.user.auth,
  image: state.user.userInfo.profile_img,
});

export default connect(props, null)(Navbar);
