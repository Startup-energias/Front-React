import Iframe from 'react-iframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faMapMarkerAlt);
 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, YoutubeSlide } from 'react-responsive-carousel';

function ProjectInfo({info, icons}) {

    function RenderGallery({list}) {
        const listImages = list.map((item, i) => {
          return(
            <div className="gallery-container" key={"gallery-"+i} style={{
              backgroundImage: `url(${item})`,
            }}>
            </div>
          );
        });
    
        return(
          <Carousel centerMode={true} showThumbs={false} autoPlay={false} showStatus={false}>
            <YoutubeSlide key="youtube-1" url="https://www.youtube.com/embed/_K1imkQTy7w" />
          <Iframe width="auto" height="600" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            {listImages}
          </Carousel>
        );
      }

      function RenderCaracteristics({list, icons}){
        const listIcons = list.map((item, i) => {
          return(
            <li className="mr-3" key={"project_icon_"+i}>
              <img className="project-icon mr-1" src={icons[i]} alt={"project_icon_"+i} />
              <span className="is-size-6 has-text-grey-dark">{item}</span>
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
          <h5 className="subtitle is-5 has-text-info">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {info.location}
          </h5>
          <h2 className="title is-2 has-text-dark is-spaced mt-1">{info.name}</h2>
          <h5 className="subtitle is-5 has-text-grey is-uppercase">{info.category}</h5>
          <div className="content">
            <RenderCaracteristics list={info.caracteristics} icons={icons}/>
          </div>
          {
          info.description.map((paragraph, i) => {
            return(
              <p className="has-text-grey" key={"p_number_"+i}>{paragraph}</p>
            );
          })}
          <RenderGallery list = {info.images}/>
        </div>
    );
}

export default ProjectInfo;