import people from '../../assets/images/home/gente.png';
import './scss/_phraseSection.scss';

function PhraseSection(){
    return(
        <section className="phrase section">
            <div className="columns is-gapless">
                <div className="column is-6 is-flex is-justify-content-center is-align-items-flex-end is-flex-direction-column">
                    <div className="block m-0 is-flex is-justify-content-flex-end is-align-items-flex-start is-flex-direction-column">
                        <p className="m-0 text-title has-text-dark">Are you passionate about renewable energy? </p>
                        <p className="text-subtitle has-text-dark">We too! Join Inoverte community.</p>
                    </div>
                    <div className="columns">
                        <div className="column is-2-fullhd is-3-widescreen is-2-desktop is-1-tablet is-0-mobile "></div>
                        <div className="column">
                            <p className="text-content is-size-6">We find human talent and funds to support innovative renewable energy projects from universities that provide electricity and water solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="column is-6 is-flex is-justify-content-flex-start is-align-items-center is-flex-direction-row">
                    <img src={people} alt="" />
                </div>
            </div>
        </section>
    );
}

export default PhraseSection;