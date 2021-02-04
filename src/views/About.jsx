import './scss/_about.scss';
const images__about = process.env.REACT_APP_IMAGES_SRC + 'about/';
function About() {
  return (
    <div className="is-flex is-justify-content-center">
      <img src={images__about + 'banner.jpg'} alt="banner img" />
    </div>
  );
}

export default About;
