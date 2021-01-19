import { useState } from 'react';

function HomeFooter() {
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
          <h5 className="title is-5">Directory</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          &nbsp;
          <RenderSocialMedia />
        </div>

        <div className="column is-half-desktop is-one-quarter-widescreen">
          <RenderFullList list={rentals} title="Rentals" />
        </div>

        <div className="column is-half-desktop is-one-quarter-widescreen">
          <RenderFullList list={pages} title="Pages" />
        </div>

        <div className="column is-half-desktop is-one-quarter-widescreen">
          <RenderFullList list={rentals} title="Rentals" />
        </div>
      
      </div>
    </footer>
  );
}

export default HomeFooter;
