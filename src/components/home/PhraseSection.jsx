import './scss/_phraseSection.scss';

function PhraseSection() {
  return (
    <section className="phraseSection is-flex is-flex-wrap-wrap	is-justify-content-center is-align-items-center">
      <div className="phraseSection__container py-3">
        <div className="phraseSection__title mb-5">
          <div className="phraseSection__title__text">
            <p className="title mb-1">Are you passionate about renewable energy?</p>
            <p>We too! Join Inoverte community.</p>
          </div>
        </div>
        <p className="phraseSection__subtext">
          We find human talent and funds to support innovative renewable energy projects from
          universities that provide electricity and water solutions.
        </p>
      </div>
      <img
        className="mt-4"
        src={process.env.REACT_APP_IMAGES_SRC + 'home/gente.png'}
        alt="people collaborating to get clean energies"
      />
    </section>
  );
}

export default PhraseSection;
