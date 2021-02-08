//components
import ProjectInfo from '../components/project/ProjectInfo';
import ProjectExtra from '../components/project/ProjectExtra';
import ProjectDetails from '../components/project/ProjectDetails';
import ProjectTeam from '../components/project/ProjectTeam';

//helpers
import project from '../helpers/constants/pilotProject';
//styles
import './scss/_project.scss';

const images__project = process.env.REACT_APP_IMAGES_SRC + 'projects/projects__images/project__1/';

function Project() {
  return (
    <div className="project is-flex is-flex-direction-column">
      <img src={images__project + project.banner} alt="banner" />
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
            imgSrc={images__project}
          />
        </div>
        <div className="project__side column has-background-light ">
          <ProjectDetails
            goal={project.goal}
            amount={project.amount}
            organization={project.organization}
            supporters={project.supporters}
            university={project.university}
            company={project.company}
            slogan={project.slogan}
            logo={project.logo}
            email={project.email}
            imgSrc={images__project}
          />
          <hr />
          <ProjectTeam team={project.team} imgSrc={images__project} />
        </div>
      </div>
    </div>
  );
}

export default Project;
