import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Iframe from 'react-iframe';

import './scss/_projectExtra.scss';

function ProjectExtra({images, maps}){
    function RenderGallery({list}) {
        const listImages = list.map((item, i) => {
          return(
            <div className="project__galleryimg" key={"gallery-"+i} style={{
              backgroundImage: `url(${item})`,
            }}>
            </div>
          );
        });
    
        return(
          <Carousel className="mt-5" centerMode={true} showThumbs={false} autoPlay={false} showStatus={false}>
            {listImages}
          </Carousel>
        );
      }

    return(
        <div className="is-flex is-flex-direction-column is-justify-content-center">
            <RenderGallery list = {images}/>
            <h1 className="title is-2 has-text-dark mt-4">Skills &amp; resources needed</h1>
            <p>Skills &amp; resources needed</p>
            <h1 className="title is-2 has-text-dark mt-4">Project location</h1>
            <Iframe
                  className="responsive-iframe"
                  src={maps}
                  width="auto"
                  height="300"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></Iframe>
        </div>
    );
}

export default ProjectExtra;