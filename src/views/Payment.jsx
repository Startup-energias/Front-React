import { payContent } from '../helpers/constants/shareContent';
import './scss/_payment.scss';

function Payment() {
  return (
    <div className="payment is-flex is-flex-direction-column">
      {payContent.sections.map((section, i) => (
        <div
          className={`${section.left && 'payment__left '}${
            !section.left && ' payment__right '
          } is-flex py-6`}
          key={'section__' + i}
        >
          <div className="payment__icon mx-5">
            <img src={section.image} alt={'payment-icon'} />
          </div>
          <div className="payment__text is-flex is-flex-direction-column is-justify-content-center">
            <h2 className="title is-3 has-text-dark">{section.title}</h2>
            <p className="is-size-6 has-text-dark">{section.content}</p>
          </div>
        </div>
      ))}
      <div className="payment__btn is-flex is-justify-content-center py-6">
        <button className="button is-large is-dark">Continue</button>
      </div>
    </div>
  );
}

export default Payment;
