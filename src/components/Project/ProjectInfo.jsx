
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faFaucet, faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarkerAlt, faFaucet, faUsers);
 
function ProjectInfo(props) {

    function RenderGallery({list}) {
        const listImages = list.map((item) => {
          return(
            <div className="column is-one-quarter-desktop is-half-tablet" key={item.name}>
                  <img src={item.content} alt={item.name}/>
            </div>
          );
        });
    
        return(
          <div className="columns is-multiline">
            {listImages}
          </div>
        );
      }

      function RenderCaracteristics({list}){
        const listIcons = list.map((item) => {
          return(
            <li className="mr-3" key={item.icon}>
              <FontAwesomeIcon className="mr-1" icon={item.icon}/>
              <span className="is-size-6 has-text-grey-dark">{item.info}</span>
            </li>
          );
        });
    
        return (
            <div className="caracteristics">
              <ul className="has-text-warning">
                {listIcons}
              </ul>
            </div>
        );
      }

    return(
        <div className="content">
            <h5 className="subtitle is-5 has-text-success">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {props.info.location}
            </h5>
            <h2 className="title is-2 has-text-primary-dark is-spaced mt-1">{props.info.name}</h2>
            <h5 className="subtitle is-5 has-text-info-dark">{props.info.category}</h5>
            <div className="content">
              <RenderCaracteristics list={props.info.caracteristics} />
            </div>
            <p className="has-text-grey">{props.info.description}</p>
            <hr />

            <h4 className="title is-4 has-text-primary-dark is-spaced">Gallery</h4>
            <RenderGallery list = {props.info.images}/>
        </div>
    );
}

export default ProjectInfo;