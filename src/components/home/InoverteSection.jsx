import Iframe from 'react-iframe';
import '../../assets/scss/04_layout/_inoverteSection.scss';

function InoverteSection() {
  return (
    <section className="inoverteSection is-flex is-justify-content-center is-align-items-center is-flex-wrap-wrap">
      <div
        className="is-flex is-align-items-center is-justify-content-center"
        style={{ transform: 'rotate(-4deg)' }}
      >
        <Iframe
          className="quoteCard mr-5"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6egSMBVH0ok"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
      </div>
      <div className="quoteCard ml-5" style={{ transform: 'rotate(5deg)' }}>
        <div className="quoteCard__body">
          <p className="is-size-5 is-italic">
            We unit innovators from universities and investors in one platform to promote
            sustainable projects that provide electricity and potable water to communities in need.
          </p>
        </div>
        <div className="quoteCard__footer has-background-info">
          <h2 className="title is-3 has-text-white">Connecting people with renewable energies.</h2>
        </div>
      </div>
    </section>
  );
}

export default InoverteSection;
