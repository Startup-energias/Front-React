import image1 from '../../assets/images/about/objective.jpg';
import image2 from '../../assets/images/about/sdg6.png';
import image3 from '../../assets/images/about/sdg7.png';
import image4 from '../../assets/images/about/about2.jpeg';
import './scss/_aboutSection.scss';

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
      image: image4,
    },
  ];

  let RenderContentLeft = ({ info }) => {
    return (
    <div className='m-0 columns is-gapless'>
          <div className="column is-6 is-flex is-align-items-center is-justify-content-flex-end">
            <img className="about-image" src={info.image} alt={'about_image'} />
          </div>
          <div className="column is-6 is-flex is-align-items-center is-justify-content-flex-start">
            <p className="is-size-6 has-text-white">{info.content}</p>
          </div>
        </div>
    );
  };

  let RenderContentRight = ({ info }) => {
    return (
    <div className='m-0 columns reverse-columns is-gapless'>
          <div className="column is-6 is-flex is-flex-direction-row-reverse is-align-items-center is-justify-content-flex-end">
            <img className="about-image" src={info.image} alt={'about_image'} />
          </div>
          <div className="column is-6 is-flex is-align-items-center is-justify-content-flex-end">
            <p className="is-size-6 has-text-white">{info.content}</p>
          </div>
        </div>
    );
  };

  return (
    <section className="section about has-background-dark pb-6" id="About us">
      <h1 className="title has-text-white is-1 has-text-centered">About us</h1>
      <div className="container p-6">
          <div className='m-0 columns is-gapless'>
            <div className="column is-6 is-flex is-align-items-center is-justify-content-flex-end">
              <img className="about-image-small" src={info[0].image} alt={'about_image'} />
              <img className="about-image-small" src={info[0].image2} alt={'about_image'} />
            </div>
            <div className="column is-6 is-flex is-align-items-center is-justify-content-flex-start">
              <p className="is-size-6 has-text-white">{info[0].content}</p>
            </div>
          </div>
        <RenderContentRight info={info[1]}/>
        <RenderContentLeft info={info[2]}/>
      </div>
    </section>
  );
}

export default AboutSection;
