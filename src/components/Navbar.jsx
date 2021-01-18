function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img alt="hol" src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
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
          <a href="a.com" className="navbar-item">
            Home
          </a>

          <a href="a.com" className="navbar-item">
            Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href="a.com" className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a href="a.com" className="navbar-item">
                About
              </a>
              <a href="a.com" className="navbar-item">
                Jobs
              </a>
              <a href="a.com" className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider"></hr>
              <a href="a.com" className="navbar-item">
                Report an issue
              </a>
            </div>
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
