import { useState } from 'react';
import projectSectionMock from '../../helpers/constants/projectSectionMock';
import ProjectCard from '../../components/shared/ProjectCard';

function ProjectsSection() {
  let [projects] = useState(projectSectionMock);

  return (
    <section className="projectsSection has-background-white pt-6 pb-0">
      <h1 className="title is-1 has-text-centered has-text-dark mb-6">Trendy projects</h1>
      <div className="is-flex is-justify-content-center is-flex-wrap-wrap	 mt-2">
        {projects.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
