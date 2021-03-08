import { sections } from 'helpers/constants/inoverteInfo';
import InfoCard from 'components/shared/InfoCard';
import './scss/_featuresSection.scss';

function FeaturesSection() {
  return (
    <section className="section info mt-6">
      <h1 className="has-text-centered is-1 title has-text-dark">Why choose us</h1>
      <div className="infoCards is-flex is-flex-wrap-wrap is-justify-content-center">
        {sections.map((section, id) => (
          <InfoCard section={section} id={0} key={'section-' + id} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
