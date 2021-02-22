/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ProjectCard from '../../components/shared/ProjectCard';
import { ReactComponent as SvgNext } from '../../assets/svg/right-chevron.svg';
import { ReactComponent as SvgPrev } from '../../assets/svg/left-chevron.svg';
import './scss/_projectsSection.scss';
//Pagination
import Pagination from '@material-ui/lab/Pagination';

function ProjectsSection() {
  const projectsUrl = process.env.REACT_APP_INOVERTE_API + 'projects';
  //Slice
  const limit = 9;
  const group = 3;
  const smallGroup = 1;
  let [isBig, setBig] = useState(false);
  let [page, setPage] = useState(1);
  let [total, setTotal] = useState(1);
  let [totalSlices, setTotalSlices] = useState(1);
  let [slices, setSlices] = useState([]);
  let [smallSlices, setSmallSlices] = useState([]);
  let [projects, setProjects] = useState(null);

  //Fetch
  useEffect(() => {
    getProjects(1);
  }, []);

  const getProjects = async () => {
    fetch(projectsUrl + '?limit=' + limit, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setPage(1);

          let slices = [Math.ceil(result.totalDocs / group)];
          for (let i = 0; i < result.totalDocs; i += group) {
            if (i + group - 1 < result.totalDocs) {
              slices[i] = result.docs.slice(i, i + group);
            } else {
              slices[i] = result.docs.slice(i, result.totalDocs);
            }
          }
          setSlices(slices);

          let smallSlices = [Math.ceil(result.totalDocs / smallGroup)];
          for (let i = 0; i < result.totalDocs; i += smallGroup) {
            if (i + smallGroup - 1 < result.totalDocs) {
              smallSlices[i] = result.docs.slice(i, i + smallGroup);
            } else {
              smallSlices[i] = result.docs.slice(i, result.totalDocs);
            }
          }
          setSmallSlices(smallSlices);

          setTotal(result.totalDocs);
          if (window.innerWidth > 800) {
            setBig(true);
            setProjects(slices[0]);
            setTotalSlices(Math.ceil(result.totalDocs / group));
          } else {
            setBig(false);
            setProjects(smallSlices[0]);
            setTotalSlices(Math.ceil(result.totalDocs / smallGroup));
          }
        },
        (error) => {
          console.err('Fetch error: ' + error);
        },
      );
  };
  function handleResize() {
    if (window.innerWidth < 800) {
      if (isBig) {
        setBig(false);
        setProjects(smallSlices[0]);
        setTotalSlices(Math.ceil(total / smallGroup));
        setPage(1);
      }
    } else if (!isBig) {
      setBig(true);
      setProjects(slices[0]);
      setTotalSlices(Math.ceil(total / group));
      setPage(1);
    }
  }
  window.addEventListener('resize', handleResize);

  //Pagination
  const handleChange = (event, value) => {
    setPage(value);
    if (isBig) {
      setProjects(slices[value - 1]);
    } else {
      setProjects(smallSlices[value - 1]);
    }
  };

  const handleArrow = (num) => {
    if ((page < totalSlices && num === 1) || (page > 0 && num === -1)) {
      setPage(page + num);
      if (isBig) {
        setProjects(slices[page + num - 1]);
      } else {
        setProjects(smallSlices[page + num - 1]);
      }
    }
  };

  return (
    <section
      className="projects is-flex is-flex-direction-column is-align-items-center has-background-white pt-6 pb-0"
      id="Projects"
    >
      <h1 className="title has-text-centered has-text-dark">Trendy projects</h1>
      <div className="projects__cards is-flex is-justify-content-space-between is-align-items-center">
        <SvgPrev
          className={page === 1 ? 'arrow-blocked' : 'arrow'}
          onClick={() => handleArrow(-1)}
        />
        <div className="is-flex is-justify-content-center is-flex-wrap-wrap	mt-2 mb-6">
          {projects ? (
            projects.map((item) => <ProjectCard key={item._id} {...item} />)
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <SvgNext
          className={page === totalSlices ? 'arrow-blocked' : 'arrow'}
          onClick={() => handleArrow(1)}
        />
      </div>
      {slices || smallSlices ? (
        <div className="projects__pagination">
          <Pagination count={totalSlices} page={page} onChange={handleChange} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}

export default ProjectsSection;
