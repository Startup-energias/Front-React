import Iframe from 'react-iframe';

function InoverteSection() {

    return(
        <section className="">
            <div className="container py-6">
                {/*<div className="container mb-6 mx-6 has-text-justified">
                <h1 className="title has-text-primary-dark is-1"> 
                    Are you passionate about renewable energy? We also! Join the Inoverte community.
                </h1>
                <h2 className="subtitle has-text-info-dark is-2"> 
                    Create your Inoverte account and support innovative renewable energy projects.
                </h2>
                </div>*/}

                <div className="columns">
                    <div className="column is-flex is-align-items-center is-justify-content-center">
                        <Iframe width="600" height="300" src="" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </Iframe>
                    </div>
                    <div className="column is-flex is-align-items-center is-justify-content-center">
                        <div className="container has-text-justified mb-6">
                            <h1 className="title is-1 has-text-info">
                                CONNECTING PEOPLE WITH RENEWABLE ENERGIES
                            </h1>
                            <p className="has-text-info is-size-5">
                                We unit innovators from universities and investors in one platform to promote sustainable projects that provide electricity and potable water to communities in need
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InoverteSection;