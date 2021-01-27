import Iframe from 'react-iframe';

function InoverteSection() {

    return(
        <section className="">
            <div className="container py-6">
                <div className="container mb-6 mx-6 has-text-justified">
                <h1 className="title has-text-info is-2"> 
                We unit innovators from universities and investors in one platform to promote sustainable projects that provide electricity and potable water to communities in need
                </h1>
                </div>

                <div className="columns">
                    <div className="column is-flex is-align-items-center is-justify-content-center">
                        <Iframe width="600" height="300" src="" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </Iframe>
                    </div>
                    <div className="column is-flex is-align-items-center is-justify-content-center">
                        <div className="container has-text-justified mb-6">
                            <h1 className="title is-2 has-text-info">
                                CONNECTING PEOPLE WITH RENEWABLE ENERGIES
                            </h1>
                            <p className="has-text-info-dark is-size-5">
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