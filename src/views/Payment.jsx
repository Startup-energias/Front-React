/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { payContent } from '../helpers/constants/shareContent';
import './scss/_payment.scss';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import QontoConnector from '../utils/stepUtils/QontoConnector';
import QontoStepIcon from '../utils/stepUtils/QontoStepIcon';

function Payment() {
  //Payment data
  let [amount, setAmount] = useState(0);
  let [amountChoice, setAmountChoice] = useState(-1);
  let [other, setOther] = useState(false);

  function changeAmount(cant, i) {
    setAmountChoice(i);
    console.log('changing amount');
    if (cant !== -1) {
      setOther(false);
      setAmount(cant);
    } else {
      setOther(true);
    }
  }

  function otherChange(e) {
    console.log(e);
    let value = parseInt(e.target.value);
    if (!Number(value)) {
      return;
    }
    setAmount(value);
  }

  //Step controlling
  const steps = ['Start', 'How much', 'How often', 'Category', 'End'];
  let [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //Steps
  let InfoStep = () => {
    const sections = payContent.info.map((infoSec, i) => (
      <div className="info__container is-flex py-6" key={'infoSec__' + i}>
        <div className="info__icon mx-5">
          <img src={infoSec.image} alt={'payment-icon'} />
        </div>
        <div className="info__text is-flex is-flex-direction-column is-justify-content-center">
          <h2 className="title is-3 has-text-dark">{infoSec.title}</h2>
          <p className="is-size-6 has-text-dark">{infoSec.content}</p>
        </div>
      </div>
    ));
    return <div className="info">{sections}</div>;
  };

  let MoneyStep = () => {
    return (
      <div className="pay is-flex is-flex-direction-column">
        <h1 className="is-size-2 has-text-dark has-text-centered">
          How much do you want to support?
        </h1>
        <div className="is-flex is-justify-content-center is-flex-wrap-wrap">
          {payContent.denominations.map((denomination, i) => (
            <div
              className={
                'pay__option is-flex is-flex-direction-column is-align-items-center' +
                (amountChoice === i ? ' selected' : '')
              }
              key={'den_' + i}
            >
              <button
                className="button"
                onClick={() => changeAmount(denomination.cant ? denomination.cant : -1, i)}
              >
                <img src={denomination.image} alt={'den_' + i} />
              </button>
              {denomination.cant ? (
                <p className="has-text-centered has-text-dark"> {'$' + denomination.cant} </p>
              ) : other ? (
                <input
                  className="input is-info"
                  min="0"
                  type="number"
                  placeholder={1}
                  onChange={otherChange}
                />
              ) : (
                <p className="has-text-centered has-text-dark">{denomination.type}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="payment is-flex is-flex-direction-column">
      {activeStep === 0 && <InfoStep />}
      {activeStep === 1 && <MoneyStep />}

      {activeStep !== 0 && (
        <div className="payment__progress">
          <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon}>
                  <span className="has-text-dark">{label}</span>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      )}
      <div className="buttons is-flex is-justify-content-center py-6">
        {activeStep !== 0 && (
          <button className="button payment__button " onClick={() => handleBack()}>
            Back
          </button>
        )}
        <button className="button payment__button" onClick={() => handleNext()}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Payment;
