import React from 'react';
import Button from '../Button';
const pictureGalery = [
  {
    id: 1,
    image: require('./img/princess.png'),
  },
  {
    id: 2,
    image: require('./img/princess.png'),
  },
  {
    id: 3,
    image: require('./img/princess.png'),
  },
  {
    id: 4,
    image: require('./img/princess.png'),
  },
  {
    id: 5,
    image: require('./img/princess.png'),
  },
  {
    id: 6,
    image: require('./img/princess.png'),
  },
];

const Game2 = () => {
  return (
    <main>
      <nav className="navigation">
        <Button image="arrow" target="/map" className="back__button" />
        <Button image="home" target="/" className="home__button" />
      </nav>
      <Sound text={currentPicture} />
      <div className="content">
        {pictureGalery}
        {/* nebo mám dát obrázky přímo sem dovnitř?  */}
      </div>
    </main>
  );
};

export default Game2;
