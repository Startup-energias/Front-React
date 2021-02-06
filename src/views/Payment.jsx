import { payContent } from '../helpers/constants/shareContent';
import './scss/_payment.scss';

function Payment() {
  function getSection(section, index) {
    let tempVar = '';
    if (index % 2 === 0) {
      tempVar = 'has-background-grey-lighter';
    } else {
      tempVar = 'has-background-white';
    }

    return (
      <div className={tempVar + ' payment__container is-flex py-6'} key={'section__' + index}>
        <div className="payment__icon mx-5">
          <img src={section.image} alt={'payment-icon'} />
        </div>
        <div className="payment__text is-flex is-flex-direction-column is-justify-content-center">
          <h2 className="title is-3 has-text-dark">{section.title}</h2>
          <p className="is-size-6 has-text-dark">{section.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="payment is-flex is-flex-direction-column">
      {payContent.sections.map((section, i) => getSection(section, i))}
      <div className="payment__btn is-flex is-justify-content-center py-6">
        <button className="button is-large is-dark">Continue</button>
      </div>
    </div>
  );
}

export default Payment;
