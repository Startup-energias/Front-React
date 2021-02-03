import TabContent from '../shared/TabContent';
import { steps, support } from '../../helpers/constants/howSteps.js';
import './scss/_howSectionOld.scss';

function HowSection() {
  let RenderSteps = ({ steps }) => {
    return steps.map((step) => (
      <div
        className="step column is-12-tablet is-12-desktop is-4-widescreen has-text-justified p-6 is-flex is-flex-direction-column is-justify-content-flex-end"
        key={step.title}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${step.image})`,
        }}
      >
        <h1 className="title is-size-3-widescreen is-size-5-touch has-text-white">{step.title}</h1>
        <p className="is-size-6 has-text-white">{step.content}</p>
      </div>
    ));
  };

  return (
    <section className="section how mt-6 p-0 has-background-white">
      <div className="columns is-multiline">
        <RenderSteps steps={steps} />
      </div>

      <TabContent titles={['Finance a proyect', 'Support with knowledge']} info={support} />

      <div className="columns mx-6">
        <div className="column is-offset-2 is-8">
          <nav className="level">
            <div className="level-left">
              <div className="button is-link is-medium">
                <a className="black-link" href="#Projects">
                  Support a proyect
                </a>
              </div>
            </div>
            <div className="level-right">
              <div className="button is-primary is-medium">Register a proyect</div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default HowSection;
