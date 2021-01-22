import { useState } from 'react';

function Footer() {
  let [socialMedia] = useState(['twitter', 'facebook', 'instagram', 'linkedin', 'pinterest']);
  let [rentals] = useState(['Rooms', 'Map on top', 'Side map', 'No map', 'Room detail']);
  let [pages] = useState(['Comparison', 'Team', 'Contact']);

  function RenderSocialMedia() {
    return socialMedia.map((item) => (
        <span className="icon-text" key={item}>
          <span className="icon">
            <i className={'fa fa-'+item}></i>
          </span>
        </span>
    ));
  }

  function RenderFullList({list, title}){
    const listObjects = list.map((item) => {
      return(
        <li key={item}>{item}</li>
      );
    });

    return(
      <div className="content">
        <h5 className="title is-5">{title}</h5>
          <ul>
            {listObjects}
          </ul>
      </div>
    );
  }

  return (
    <footer className="footer has-background-grey-lighter">
      <div className="columns is-multiline mx-6">
        <div className="column is-half-desktop is-one-quarter-widescreen">
          <h5 className="title is-5">DIRECTORY</h5>
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
    </footer>
  );
}

export default Footer;
