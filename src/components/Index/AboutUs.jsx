
function AboutUs() {

    let renderContent = () => {
        <div className="content py-2">
            <div className="columns">
                <div className="column is-flex is-align-items-center">

                </div>
                <div className="column is-flex is-align-items-center">
                    <div className="container has-text-centered">
                        <h1 className="title is-1 has-text-info">
                            Get to know inverte
                        </h1>
                        <p className="has-text-info-dark">
                            En Inverte impulsamos la sostenibilidad, pues conectamos innovación, financiación y comunidades
                        </p>
                    </div>
                </div>
            </div>
        </div>
    }

    return(
        <section className="section has-background-primary">
            <div className="container py-6">
                {renderContent()}
            </div>
        </section>
    );
}

export default AboutUs;