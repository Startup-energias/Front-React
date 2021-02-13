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
  let [amount, setAmount] = useState(10);
  let [amountChoice, setAmountChoice] = useState(0);
  let [timeChoice, setTimeChoice] = useState(0);
  let [other, setOther] = useState(false);
  let [valid, setValid] = useState(true);

  function changeAmount(cant, i) {
    setAmountChoice(i);
    console.log('changing amount');
    if (cant !== -1) {
      setOther(false);
      setValid(true);
      setAmount(cant);
    } else {
      setValid(false);
      setAmount(0);
      setOther(true);
    }
  }

  function otherChange(amount) {
    let value = parseInt(amount);
    if (Number(value)) {
      setAmount(value);
      setValid(true);
    } else {
      setValid(false);
    }
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
    return (
      <div className="info is-flex is-flex-direction-column is-align-items-center">
        {payContent.info.map((infoSec, i) => (
          <div
            className={
              'row is-flex is-flex-direction-column is-justify-content-center' +
              (i % 2 == 1 ? ' right' : ' left')
            }
            key={'infoSec__' + i}
          >
            <h2 className="has-text-dark">{infoSec.title}</h2>
            <p className=" has-text-dark">{infoSec.content}</p>
          </div>
        ))}
      </div>
    );
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
                  value={amount}
                  onChange={(e) => otherChange(e.target.value)}
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

  let TimeStep = () => {
    return (
      <div className="pay is-flex is-flex-direction-column">
        <h1 className="is-size-2 has-text-dark has-text-centered">
          How often do you want to support?
        </h1>
        <div className="is-flex is-justify-content-center is-flex-wrap-wrap">
          {payContent.time.map((denomination, i) => (
            <div
              className={
                'pay__option is-flex is-flex-direction-column is-align-items-center' +
                (timeChoice === i ? ' selected' : '')
              }
              key={'tim_' + i}
            >
              <button className="button" onClick={() => setTimeChoice(i)}>
                <img src={denomination.image} alt={'den_' + i} />
              </button>
              <p className="has-text-centered has-text-dark">{denomination.freq}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  let MedalStep = () => {
    return (
      <div className="category is-flex is-flex-direction-column">
        <h1 className="is-size-2 has-text-dark has-text-centered has-text-dark">
          Supporter Category
        </h1>
        <div className="category__items is-flex is-justify-content-center">
          <img src={payContent.medals[0].image} alt="medal_img" />
          <div className="is-flex is-flex-direction-column is-justify-content-center">
            <p className="is-size-5 mb-2 has-text-dark">Congratulations!</p>
            <p className="is-size-5 mb-2 has-text-dark">
              Your contribution belongs to the{' '}
              <strong>{payContent.medals[0].value} category</strong>
            </p>
          </div>
        </div>
      </div>
    );
  };

  let EndStep = () => {
    return (
      <div className="end">
        <div className="is-flex is-flex-direction-column is-justify-content-center">
          <h1 className="title has-text-dark is-capitalized mb-2">Thank you!</h1>
          <p className="is-size-4 has-text-dark mb-2">
            With your help we are able to bring electricity and water to communities in need
          </p>
        </div>
        <img src={payContent.end} alt="end_img" />
      </div>
    );
  };

  return (
    <div className="payment is-flex is-flex-direction-column is-align-items-center">
      {activeStep === 0 && <InfoStep />}
      {activeStep === 1 && <MoneyStep />}
      {activeStep === 2 && <TimeStep />}
      {activeStep === 3 && <MedalStep />}
      {activeStep === 4 && <EndStep />}

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
      <div className="buttons is-centered py-6">
        {activeStep !== 0 && (
          <button className="button payment__button " onClick={() => handleBack()}>
            Back
          </button>
        )}
        {activeStep !== 4 &&
          (valid ? (
            <button className="button payment__button" onClick={() => handleNext()}>
              Continue
            </button>
          ) : (
            <button className="button payment__button" onClick={() => handleNext()} disabled>
              Continue
            </button>
          ))}
        {activeStep === 4 && <button className="button payment__button ">End</button>}
      </div>
    </div>
  );
}

export default Payment;
