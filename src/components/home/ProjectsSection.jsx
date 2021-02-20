/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import ProjectCard from '../../components/shared/ProjectCard';
import { ReactComponent as SvgNext } from '../../assets/svg/right-chevron.svg';
import { ReactComponent as SvgPrev } from '../../assets/svg/left-chevron.svg';
import './scss/_projectsSection.scss';
//Pagination
import Pagination from '@material-ui/lab/Pagination';

function ProjectsSection() {
  const limit = 3;
  const projectsUrl = process.env.REACT_APP_INOVERTE_API + 'projects';
  let [page, setPage] = useState(1);
  let [total, setTotal] = useState(1);
  let [projects, setProjects] = useState(null);

  //Fetch
  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    fetch(projectsUrl + '?limit=' + limit + '&page=' + page, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setProjects(result.docs);
          setTotal(result.totalPages);
        },
        (error) => {
          console.log('ERROR: ' + error);
        },
      );
  };

  //Pagination
  const handleChange = (event, value) => {
    setPage(value);
    console.log(page);
    getProjects();
  };
  const handleNext = () => {
    console.log(page);
    if (page < total) {
      setPage((prevActiveStep) => prevActiveStep + 1);
      console.log(page);
      getProjects();
    }
  };
  const handleBack = () => {
    console.log(page);
    if (page > 1) {
      setPage((prevActiveStep) => prevActiveStep - 1);
      console.log(page);
      getProjects();
    }
  };

  return (
    <section
      className="projects is-flex is-flex-direction-column is-align-items-center has-background-white pt-6 pb-0"
      id="Projects"
    >
      <h1 className="title has-text-centered has-text-dark">Trendy projects</h1>
      <div className="projects__cards is-flex is-justify-content-space-between is-align-items-center">
        <SvgPrev className={page === 1 ? 'arrow-blocked' : 'arrow'} onClick={handleBack} />
        <div className="is-flex is-justify-content-center is-flex-wrap-wrap	mt-2 mb-6">
          {projects ? (
            projects.map((item) => <ProjectCard key={item._id} {...item} />)
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <SvgNext className={page === total ? 'arrow-blocked' : 'arrow'} onClick={handleNext} />
      </div>
      <div className="projects__pagination">
        <Pagination count={total} page={page} onChange={handleChange} />
      </div>
    </section>
  );
}

export default ProjectsSection;
