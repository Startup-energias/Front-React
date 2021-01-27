import image1 from '../../assets/images/about/objective.jpg';
import image2 from '../../assets/images/about/sdg6.png';
import image3 from '../../assets/images/about/sdg7.png';

function AboutSection() {
  const info = [
    {
      content:
        'We envision a world where sustainable technologies drive our society, and everyone has access to basic resources from renewable energy',
      image: image2,
      image2: image3,
    },
    {
      content:
        'Our goal is to supply water and / or energy to 5 million people (the equivalent of the total population of Ireland) by 2025 ',
      image: image1,
    },
    {
      content:
        'We connect sustainable projects with financing and human talent so that they can be implemented in the communities that need it through the visibility and dissemination that our platform promotes ',
      image: image3,
    },
  ];

  let RenderContentLeft = ({ info }) => {
    return (
      <div className="container">
        <div className='columns mb-6 is-6'>
          <div className="column is-1"></div>
          <div className="column is-4 is-flex is-align-items-center is-justify-content-center">
            <img className="about_image" src={info.image} alt={'about_image'} />
          </div>
          <div className="column is-6 is-flex is-align-items-center is-justify-content-center">
            <p className="is-size-3 has-text-white">{info.content}</p>
          </div>
          <div className="column is-1"></div>
        </div>
      </div>
    );
  };

  let RenderContentRight = ({ info }) => {
    return (
      <div className="container">
        <div className='columns reverse-columns mb-6 is-6'>
          <div className="column is-4 is-flex is-align-items-center is-justify-content-center">
            <img className="about_image" src={info.image} alt={'about_image'} />
          </div>
          <div className="column is-6 is-flex is-align-items-center is-justify-content-center">
            <p className="is-size-3 has-text-right-tablet has-text-white">{info.content}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section about has-background-dark pb-6" id="About us">
      <h1 className="title has-text-white has-text-centered">About us</h1>
      <div className="container p-6">
        <div className="container">
          <div className={'columns mb-6 is-6'}>
            <div className="column is-6 is-flex is-align-items-center is-justify-content-center">
              <img className="about_image" src={info[0].image} alt={'about_image'} />
              <img className="about_image" src={info[0].image2} alt={'about_image'} />
            </div>
            <div className="column is-6 is-flex is-align-items-center is-justify-content-center">
              <p className="is-size-3 has-text-white">{info[0].content}</p>
            </div>
          </div>
        </div>
        <RenderContentRight info={info[1]}/>
        <RenderContentLeft info={info[2]}/>
      </div>
    </section>
  );
}

export default AboutSection;
