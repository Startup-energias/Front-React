
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faMapMarkerAlt);
 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function ProjectInfo(props) {

    function RenderGallery({list}) {
        const listImages = list.map((item) => {
          return(
            <div key={item.name}>
              <img className="center-img" src={item.content} alt={item.name}/>
            </div>
          );
        });
    
        return(
          <Carousel dynamicHeight={true}>
            {listImages}
          </Carousel>
        );
      }

      function RenderCaracteristics({list}){
        const listIcons = list.map((item, i) => {
          return(
            <li className="mr-3" key={"project_icon_"+i}>
              <img className="project-icon mr-1" src={item.icon} alt={"project_icon_"+i} />
              <span className="is-size-6 has-text-grey-dark">{item.info}</span>
            </li>
          );
        });
    
        return (
            <div className="caracteristics">
              <ul className="has-text-info">
                {listIcons}
              </ul>
            </div>
        );
      }

    return(
        <div className="content">
          <h5 className="subtitle is-5 has-text-link-dark">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {props.info.location}
          </h5>
          <h2 className="title is-2 has-text-primary is-spaced mt-1">{props.info.name}</h2>
          <h5 className="subtitle is-5 has-text-grey is-uppercase">{props.info.category}</h5>
          <div className="content">
            <RenderCaracteristics list={props.info.caracteristics} />
          </div>
          {
          props.info.description.map((paragraph, i) => {
            return(
              <p className="has-text-grey" key={"p_number_"+i}>{paragraph}</p>
            );
          })}

          <hr />

          <h4 className="title is-2 has-text-primary-dark is-spaced">Gallery</h4>
          <RenderGallery list = {props.info.images}/>
        </div>
    );
}

export default ProjectInfo;