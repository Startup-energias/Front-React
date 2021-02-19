import { useEffect, useState } from 'react';
import ProjectCard from '../../components/shared/ProjectCard';

function ProjectsSection() {
  const projectsUrl = process.env.REACT_APP_INOVERTE_API + 'projects';
  let [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    fetch(projectsUrl, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setProjects(result);
          console.log(projects);
        },
        (error) => {
          console.log('ERROR: ' + error);
        },
      );
  };

  return (
    <section className="projectsSection has-background-white pt-6 pb-0" id="Projects">
      <h1 className="title is-1 has-text-centered has-text-dark mb-6">Trendy projects</h1>
      <div className="is-flex is-justify-content-center is-flex-wrap-wrap	 mt-2">
        {projects ? (
          projects.map((item) => <ProjectCard key={item._id} {...item} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
