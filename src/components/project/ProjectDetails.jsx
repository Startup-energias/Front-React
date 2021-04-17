/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import BulmaModal from 'utils/bulmaModal';
import './scss/_projectDetails.scss';
import SupportModal from './SupportModal';
import { FormattedNumber } from 'react-intl';
import chart_img from 'assets/img/project/chart.png';
import clock_img from 'assets/img/project/clock.png';

function ProjectDetails({
  id,
  name,
  link,
  goal,
  amount,
  currency,
  features,
  supporters,
  email,
  resources,
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
          <p className=" is-size-4 has-text-centered is-italic">Starting soon!</p>
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

      <button
        id={supportBtn}
        className="project__button button is-align-self-center is-flex is-justify-content-center is-align-items-center is-size-4 title"
      >
        Invest now
      </button>
      <SupportModal
        id={id}
        modalId={supportId}
        name={name}
        link={link}
        email={email}
        resources={resources}
      />
      <hr />
      <div className="project__details is-align-items-self-start m-4 px-2">
        <h1 className="title is-size-4 has-text-dark">Details</h1>
        <div className="project__badges is-flex is-align-content-space-between my-5">
          <div className="badge">
            <img className="mb-2" src={chart_img} alt="chart" />
            <p className="has-text-centered">{features.return}%</p>
            <p className="badge__text--little has-text-centered">Annual return</p>
          </div>
          <div className="divisor" />
          <div className="badge">
            <img
              className="mb-2"
              src={process.env.REACT_APP_IMAGES_SRC + 'projects/user.png'}
              alt="user"
            />
            <p className="has-text-centered">{supporters}</p>
            <p className="badge__text--little has-text-centered">Investors</p>
          </div>
          <div className="divisor" />
          <div className="badge">
            <img className="mb-2" src={clock_img} alt="clock" />
            <p className="has-text-centered">{features.year}</p>
            <p className="badge__text--little has-text-centered">Completition year</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
