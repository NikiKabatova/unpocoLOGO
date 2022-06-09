import React from 'react';
import { useState } from 'react';
import Button from '../Button';
import Sound from '../Sound';
import GameRulesInfo from '../GameRulesInfo';
import VictoryPopup from '../VictoryPopup';
import './style.css';

const pictureGallery = [
  {
    id: 1,
    image: require('./img/lion.png'),
  },
  {
    id: 2,
    image: require('./img/lion.png'),
  },
  {
    id: 3,
    image: require('./img/lion.png'),
  },
  {
    id: 4,
    image: require('./img/lion.png'),
  },
  {
    id: 5,
    image: require('./img/lion.png'),
  },
  {
    id: 6,
    image: require('./img/lion.png'),
  },
];

const Game2 = () => {
  const [currentPicture, setCurrentPicture] = useState(pictureGallery[0].id);
  const [donePictures, setDonePictures] = useState([]);
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const [isVictory, setIsVictory] = useState(false);

  const handlePictureClick = (id) => {
    if (currentPicture === id) {
      setDonePictures((pictures) => [...pictures, id]);
      if (id === 1) setCurrentPicture(6);
      if (id === 6) setCurrentPicture(2);
      if (id === 2) setIsVictory(true);
    }
    console.log(id, donePictures, currentPicture);
  };
  return (
    <main>
      {isInfoVisible && (
        <GameRulesInfo hide={() => setIsInfoVisible(false)} currentGame={0} />
      )}
      {isVictory && <VictoryPopup />}

      <nav className="navigation">
        <Button image="arrow" target="/map" className="back__button" />
        <Button image="home" target="/" className="home__button" />
      </nav>
      <Sound />
      <div className="content">
        {pictureGallery.map((picture) => {
          console.log(picture, donePictures, donePictures.includes(picture.id));
          const isDone = donePictures.includes(picture.id);
          return (
            <img
              onClick={() => handlePictureClick(picture.id)}
              className={
                isDone
                  ? 'game2__picture game2__picture--done'
                  : 'game2__picture'
              }
              key={picture.id}
              src={picture.image}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Game2;
