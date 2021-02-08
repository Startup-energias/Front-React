import { sections } from '../../helpers/constants/inoverteInfo';
import InfoCard from '../shared/InfoCard';

function InoverteInfo() {
  return (
    <section className="section info pt-0 mt-6" id="About us">
      <h1 className="has-text-centered is-1 title has-text-dark">Features</h1>
      <div className="is-flex is-justify-content-center is-flex-wrap-wrap mt-6">
        {sections.map((section, id) => (
          <InfoCard section={section} id={0} key={'section-' + id} />
        ))}
      </div>
    </section>
  );
}

export default InoverteInfo;
