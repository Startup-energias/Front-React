import people from '../../assets/images/home/gente.png';

function PhraseSection(){
    return(
        <section className="phrase section">
            <div className="columns is-gapless">
                <div className="column is-6 is-flex is-justify-content-center is-align-items-flex-end is-flex-direction-column">
                    <div className="block m-0 is-flex is-justify-content-flex-end is-align-items-flex-start is-flex-direction-column">
                        <p className="is-size-4 title m-0">Are you passionate about renewable energy? </p>
                        <p className="is-size-4">We too! Join Inoverte community.</p>
                    </div>
                    <div className="columns">
                        <div className="column is-offset-4 pl-3 ">
                            <p className="is-size-6">We find human talent and funds to support innovative renewable energy projects from universities that provide electricity and water solutions.</p>
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