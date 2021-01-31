//components
import ProjectInfo from '../components/project/ProjectInfo';
import ProjectExtra from '../components/project/ProjectExtra';
import ProjectDetails from '../components/project/ProjectDetails';
import ProjectTeam from '../components/project/ProjectTeam';

//helpers
import project from '../helpers/constants/projectInfo';
//styles
import './scss/_project.scss';

function Project() {
  return (
    <div className="project">
      <img src={project.banner} alt="banner" />
      <div className="columns is-multiline is-centered is-6 mb-6">
        <div className="project__main p-0 column is-12-mobile is-12-tablet is-8-desktop is-8-widescreen is-8-fullhd pl-1 pr-5">
          <ProjectInfo {...project.content} />
          <ProjectExtra images={project.images} maps={project.maps}/>
        </div>
        <div className="project__side column has-background-light ">
          <ProjectDetails />
          <ProjectTeam />
        </div>
      </div>
    </div>
  );
}

export default Project;
