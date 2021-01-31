import image1 from '../../assets/images/about/objective.jpg';
import image2 from '../../assets/images/about/sdg6.png';
import image3 from '../../assets/images/about/sdg7.png';
import image4 from '../../assets/images/about/about2.jpg';
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

  let RenderContent = ({ info, image, rev, align }) => {
    return (
    <div className={'m-0 columns '+rev+' is-gapless'}>
          <div className="column image-comp is-6 ">
            {image}
          </div>
          <div className={"column text-comp is-6 "+align}>
            <p className="is-size-6 has-text-white">{info.content}</p>
          </div>
        </div>
    );
  };

  return (
    <section className="section is-flex is-flex-direction-column is-justify-items-center about has-background-dark pb-6">
      <h1 className="title has-text-white is-1 has-text-centered">About us</h1>
      <div className="container is-flex is-flex-direction-column is-justify-items-center p-6">
        <RenderContent info={info[0]} image={<div className="is-flex is-flex-direction-row"><img className="about-image-small" src={info[0].image} alt={'about_image'} />
        <img className="about-image-small" src={info[0].image2} alt={'about_image'} /></div>} rev="" align=""/>
        <RenderContent info={info[1]} image={<div><img className="about-image" src={info[1].image} alt={'about_image'} /></div>} rev="reverse-columns" align="has-text-right-tablet"/>
        <RenderContent info={info[2]} image={<div><img className="about-image" src={info[2].image} alt={'about_image'} /></div>} rev="" align=""/>
      </div>
    </section>
  );
}

export default AboutSection;
