import { useState } from 'react';

function Footer({selector}) {
  let [socialMedia] = useState(['twitter', 'facebook', 'instagram', 'linkedin', 'pinterest']);
  let [rentals] = useState(['Rooms', 'Map on top', 'Side map', 'No map', 'Room detail']);
  let [pages] = useState(['Comparison', 'Team', 'Contact']);
  
  function RenderSocialMedia() {
    return socialMedia.map((item) => (
      <span className="icon-text" key={item}>
        <span className="icon">
          <i className={'fa fa-' + item}></i>
        </span>
      </span>
    ));
  }

  function RenderFullList({ list, title }) {
    const listObjects = list.map((item) => {
      return <li key={item}>{item}</li>;
    });

    return (
      <div className="content">
        <h5 className="title is-5 is-family-monospace">{title}</h5>
        <ul>{listObjects}</ul>
      </div>
    );
  }

  return (
    <footer className="footer has-background-grey-lighter p-0">
      <div className="py-5">
        <div className="container">
          <div className="columns is-multiline mx-6 mt-4">
            <div className="column is-half-desktop is-one-quarter-widescreen">
              <h5 className="title is-5 is-family-monospace">DIRECTORY</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <div className="content mt-3">
                <RenderSocialMedia />
              </div>
            </div>

            <div className="column is-half-desktop is-one-quarter-widescreen">
              <RenderFullList list={rentals} title="RENTALS" />
            </div>

            <div className="column is-half-desktop is-one-quarter-widescreen">
              <RenderFullList list={pages} title="PAGES" />
            </div>

            <div className="column is-half-desktop is-one-quarter-widescreen">
              <RenderFullList list={rentals} title="RENTALS" />
            </div>
          </div>
        </div>
      </div>
      <div className="has-background-black has-text-white">
        <div className="container py-5">
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <p>© 2020, Your company. All rights reserved.</p>
              </div>
            </div>
            <div className="level-right">
              {selector()}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
