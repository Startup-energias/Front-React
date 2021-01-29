import Iframe from 'react-iframe';
import './scss/_inoverteSection.scss';

function InoverteSection() {
  return (
    <section className="has-background-dark">
      <div className="container py-6">
        <div className="columns">
          <div className="column is-flex is-align-items-center is-justify-content-center">
            <Iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6egSMBVH0ok"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></Iframe>
          </div>
          <div className="column is-flex is-align-items-center is-justify-content-center">
            <div className="container mb-6 pr-6">
              <h1 className="title is-2 has-text-white">
                CONNECTING PEOPLE WITH RENEWABLE ENERGIES
              </h1>
              <p className="has-text-white pl-5 is-size-6 pr-6 mr-6">
                We unit innovators from universities and investors in one platform to promote
                sustainable projects that provide electricity and potable water to communities in
                need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InoverteSection;
