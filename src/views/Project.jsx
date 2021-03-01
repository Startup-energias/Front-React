import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//components
import ProjectInfo from '../components/project/ProjectInfo';
import ProjectExtra from '../components/project/ProjectExtra';
import ProjectDetails from '../components/project/ProjectDetails';
import ProjectTeam from '../components/project/ProjectTeam';
import projectApi from '../api/projectApi';
//styles
import './scss/_project.scss';

function Project() {
  let { id } = useParams();
  const images__project =
    process.env.REACT_APP_IMAGES_SRC + 'projects/projects__images/project__' + id + '/';

  let [project, setProject] = useState(null);
  useEffect(() => {
    projectApi.getProject(id).then(
      (res) => {
        setProject(res.data);
      },
      (error) => {
        console.error('ERROR: ' + error);
      },
    );
  }, []);

  return (
    <div className="project is-flex is-flex-direction-column">
      {project ? (
        <div>
          <img
            className="project__banner"
            loading="lazy"
            src={
              project.banner
                ? images__project + project.banner
                : process.env.REACT_APP_IMAGES_SRC + 'util/bigplaceholder.jpg'
            }
            alt="banner"
          />
          <div className="columns is-multiline is-centered is-6 mb-5">
            <div className="project__main column is-12-mobile is-12-tablet is-8-desktop is-8-widescreen is-8-fullhd">
              <ProjectInfo
                title={project.title}
                categories={project.categories}
                location={project.location}
                description={project.description}
                characteristics={project.characteristics}
              />
              <ProjectExtra
                images={project.images}
                maps={project.maps}
                resources={project.resources}
                skills={project.skills}
                video={project.video}
                imgSrc={images__project}
              />
            </div>
            <div className="project__side column has-background-light ">
              <ProjectDetails
                name={project.title}
                goal={project.goal}
                amount={project.amount}
                currency={project.currency}
                organization={project.organization}
                supporters={project.supporters}
                university={project.university}
                company={project.company}
                slogan={project.slogan}
                logo={project.logo}
                email={project.email}
                resources={project.resources}
                imgSrc={images__project}
              />
              <hr />
              <ProjectTeam team={project.team} imgSrc={images__project} />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Project;
