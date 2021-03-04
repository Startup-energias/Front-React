import React, { useEffect } from 'react';
import BulmaModal from '../../utils/bulmaModal';
import './scss/_projectDetails.scss';
import SupportModal from './SupportModal';
import { universities } from '../../helpers/constants/universitiesInfo';
import { FormattedNumber } from 'react-intl';

function ProjectDetails({
  id,
  name,
  goal,
  amount,
  currency,
  organization,
  supporters,
  university,
  company,
  slogan,
  logo,
  email,
  resources,
  imgSrc,
}) {
  const percentage = Math.round((amount * 100) / goal);
  const supportBtn = 'supportBtn';
  const supportId = 'supportModal';

  useEffect(() => {
    var btn = document.querySelector('#' + supportBtn);
    var mdl = new BulmaModal('#' + supportId);

    btn.addEventListener('click', function () {
      mdl.show();
    });
  }, []);

  return (
    <div className="is-flex is-flex-direction-column has-text-dark">
      <div className="project__percentage mt-6 is-flex is-flex-direction-column is-align-items-center">
        <i className="mb-2">
          <span className="is-size-2 has-text-dark">{percentage}%</span>
        </i>
      </div>
      <p className=" is-size-3 has-text-centered">
        <FormattedNumber
          value={amount}
          style="currency"
          currency={currency}
          compactDisplay="long"
        />{' '}
        Raised
      </p>
      <p className=" is-size-5 has-text-centered has-text-black">
        of{' '}
        <FormattedNumber value={goal} style="currency" currency={currency} compactDisplay="long" />
      </p>
      <p className=" is-size-2 has-text-centered is-italic">Starting soon!</p>
      <button
        id={supportBtn}
        className="project__button button is-align-self-center is-flex is-justify-content-center is-align-items-center is-size-4 title has-text-dark has-background-light"
      >
        Support now
      </button>
      <SupportModal id={id} modalId={supportId} name={name} email={email} resources={resources} />
      <hr />
      <div className="project__details is-align-items-self-start m-4 px-2">
        <h1 className="title is-size-4 has-text-dark">Details</h1>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">Organization type</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{organization}</p>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">Supporters</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{supporters}</p>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">University</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{universities[university].name}</p>
      </div>
      <hr />
      <div className="project__details is-align-items-self-start is-flex is-flex-direction-column m-4 px-2">
        <h1 className="title is-size-4 has-text-dark">Company</h1>
        <h2 className="subtitle is-size-5 has-text-dark mb-2">Name</h2>
        <p className="is-size-6 has-text-weight-bold mb-2">{company}</p>
        {slogan && (
          <React.Fragment>
            <h2 className="subtitle is-size-5 has-text-dark mb-2">Slogan</h2>
            <p className="is-size-6 has-text-weight-bold mb-2">{slogan}</p>
          </React.Fragment>
        )}
        {logo && <img className="is-align-self-center" src={imgSrc + logo} alt="company_logo" />}
      </div>
    </div>
  );
}

export default ProjectDetails;
