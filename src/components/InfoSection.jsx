import { bannerImages, keywords } from '../helpers/constants/infoSection';
import { useState } from 'react';
import { useInterval } from '../helpers/hooks/timerHook';
import '../assets/scss/04_layout/_infoSection.scss';

function App() {
  const images = bannerImages.map((item, index) => ({
    img: item,
    opacity: index === 0 ? 1 : 0,
  }));
  const [banner, setBanner] = useState(images);
  const [infoKeywords, setInfoKeywords] = useState(keywords[0]);
  let indexImage = 0,
    indexKeyword = 0;

  function reasignImage() {
    indexImage += 1;
    if (indexImage === images.length) indexImage = 0;
    const imagesUpdate = images.map(({ img }, index) => ({
      img,
      opacity: index === indexImage ? 1 : 0,
    }));
    setBanner(imagesUpdate);
  }

  function updateKeyword() {
    indexKeyword += 1;
    if (indexKeyword === keywords?.length - 1) indexKeyword = 0;
    setInfoKeywords(keywords[indexKeyword]);
  }
  useInterval(reasignImage);
  useInterval(updateKeyword, 3000);

  return (
    <div className="infoSection">
      <section className="is-relative">
        {banner.map(({ img, opacity }, index) => (
          <div
            key={index}
            className="infoSection__background"
            style={{ backgroundImage: `url(${img})`, opacity: opacity }}
          ></div>
        ))}
        <div className="container">
          <h1 className="title">
            PEOPLE <span className="title"> {infoKeywords} </span> PEOPLE THROUGH RENEWABLE ENERGIES
          </h1>
        </div>
      </section>
    </div>
  );
}

export default App;
