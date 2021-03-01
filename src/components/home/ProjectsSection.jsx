/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ProjectCard from '../../components/shared/ProjectCard';
import { ReactComponent as SvgNext } from '../../assets/svg/right-chevron.svg';
import { ReactComponent as SvgPrev } from '../../assets/svg/left-chevron.svg';
import './scss/_projectsSection.scss';
import projectApi from '../../api/projectApi';
//Pagination
import Pagination from '@material-ui/lab/Pagination';

function ProjectsSection() {
  //Slice
  const limit = 9;
  const small = 823;
  const group = 3;
  const smallGroup = 1;
  let [isBig, setBig] = useState(false);
  let [page, setPage] = useState(1);
  let [total, setTotal] = useState(1);
  let [totalSlices, setTotalSlices] = useState(1);
  let [bigSlices, setBigSlices] = useState([]);
  let [smallSlices, setSmallSlices] = useState([]);
  let [projects, setProjects] = useState(null);

  //Fetch
  useEffect(() => {
    getProjects(1);
  }, []);

  /*New project

  */

  const getSlices = (total, group, array) => {
    let slices = [Math.ceil(total / group)];
    let cont = 0;
    for (let i = 0; i < total; i += group) {
      if (i + group - 1 < total) {
        slices[cont] = array.slice(i, i + group);
      } else {
        slices[cont] = array.slice(i, total);
      }
      cont++;
    }
    return slices;
  };

  const getProjects = async () => {
    projectApi.getProjects(limit).then(
      (res) => {
        let result = res.data;
        setPage(1);

        bigSlices = getSlices(result.totalDocs, group, result.docs);
        smallSlices = getSlices(result.totalDocs, smallGroup, result.docs);
        setBigSlices(bigSlices);
        setSmallSlices(smallSlices);

        setTotal(result.totalDocs);
        if (window.innerWidth >= small) {
          setBig(true);
          setProjects(bigSlices[0]);
          setTotalSlices(Math.ceil(result.totalDocs / group));
        } else {
          setBig(false);
          setProjects(smallSlices[0]);
          setTotalSlices(Math.ceil(result.totalDocs / smallGroup));
        }
      },
      (error) => {
        console.error('Fetch error: ' + error);
      },
    );
  };

  function handleResize() {
    if (window.innerWidth < small) {
      if (isBig) {
        setBig(false);
        setProjects(smallSlices[0]);
        setTotalSlices(Math.ceil(total / smallGroup));
        setPage(1);
      }
    } else if (!isBig) {
      setBig(true);
      setProjects(bigSlices[0]);
      setTotalSlices(Math.ceil(total / group));
      setPage(1);
    }
  }
  window.addEventListener('resize', handleResize);

  //Pagination
  const handleChange = (event, value) => {
    setPage(value);
    let slicesArray = isBig ? bigSlices : smallSlices;
    setProjects(slicesArray[value - 1]);
  };

  const handleArrow = (num) => {
    if ((page < totalSlices && num === 1) || (page > 0 && num === -1)) {
      setPage(page + num);
      let slicesArray = isBig ? bigSlices : smallSlices;
      setProjects(slicesArray[page + num - 1]);
    }
  };

  return (
    <section
      className="projects is-flex is-flex-direction-column is-align-items-center has-background-white pt-6 pb-0"
      id="Projects"
    >
      <h1 className="title has-text-centered has-text-dark">Trendy projects</h1>
      <div className="projects__cards is-flex is-justify-content-space-between is-align-items-center my-2">
        <SvgPrev
          className={page === 1 ? 'arrow-blocked' : 'arrow'}
          onClick={() => handleArrow(-1)}
        />
        <div className="is-flex is-justify-content-center is-flex-wrap-wrap">
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
      <div className="projects__pagination">
        <Pagination count={totalSlices} page={page} onChange={handleChange} />
      </div>
    </section>
  );
}

export default ProjectsSection;
