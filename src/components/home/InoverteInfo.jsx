import { sections } from '../../helpers/constants/inoverteInfo';
import InfoCard from '../shared/InfoCard';
import './scss/_inoverteInfo.scss';

function InoverteInfo() {
  return (
    <section className="section info mt-6" id="About us">
      <h1 className="has-text-centered is-1 title has-text-dark">Features</h1>
      <div className="infoCards is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
        {sections.map((section, id) => (
          <InfoCard section={section} id={0} key={'section-' + id} />
        ))}
      </div>
    </section>
  );
}

export default InoverteInfo;
