/* eslint-disable no-unused-vars */

import './scss/_projectDetails.scss';
function ProjectDetails({
  goalt,
  goal,
  amount,
  organization,
  supporters,
  university,
  company,
  slogan,
  logo,
}) {
  const percentage = Math.round((amount * 100) / goal);
  return (
    <div className="is-flex is-flex-direction-column has-text-dark">
      <div className="project__percentage mt-6 is-flex is-flex-direction-column is-align-items-center">
        <i className="mb-2">
          <span className="is-size-2 has-text-dark">{percentage}%</span>
        </i>
      </div>
      <p className="project__raised is-size-3 has-text-centered">${goalt} Raised</p>
      <p className="project__raised is-size-5 has-text-centered has-text-black">of ${goalt}</p>
      <button className="project__button is-align-self-center is-flex is-justify-content-center is-align-items-center is-size-4 title has-text-dark has-background-light">
        Support now
      </button>
      <hr />
      <div className="project__details is-align-items-self-start m-4 px-2">
        <h1 className="title is-size-4 has-text-dark">Details</h1>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">Organization type</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{organization}</p>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">Supporters</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{supporters}</p>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">University</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{university}</p>
      </div>
      <hr />
      <div className="project__details is-align-items-self-start is-flex is-flex-direction-column m-4 px-2">
        <h1 className="title is-size-4 has-text-dark">Company</h1>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">Name</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{company}</p>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">Slogan</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{slogan}</p>
        <img className="is-align-self-center" src={logo} alt="company_logo" />
      </div>
    </div>
  );
}

export default ProjectDetails;
