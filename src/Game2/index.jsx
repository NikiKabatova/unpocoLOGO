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
    text: 'text1',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 2,
    image: require('./img/saw.png'),
    text: 'text2',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 3,
    image: require('./img/dummy.png'),
    text: 'text3',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 4,
    image: require('./img/butterfly.png'),
    text: 'text4',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 5,
    image: require('./img/apple.png'),
    text: 'text5',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 6,
    image: require('./img/dolphin.png'),
    text: 'text6',
    sound: require('./doorbell-sound-effect.mp3'),
  },
];

const Game2 = () => {
  const [currentPicture, setCurrentPicture] = useState(pictureGallery[0].id);
  const [donePictures, setDonePictures] = useState([]);
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const [isVictory, setIsVictory] = useState(false);

  const currentText = pictureGallery.find(
    (picture) => currentPicture === picture.id,
  ).text;

  const currentSound = pictureGallery.find(
    (picture) => currentPicture === picture.id,
  ).sound;

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

      <div className="content">
        {pictureGallery.map((picture) => {
          const isDone = donePictures.includes(picture.id);
          return (
            <img
              key={picture.id}
              src={picture.image}
              onClick={() => handlePictureClick(picture.id)}
              className={
                isDone ? 'game__picture game__picture--done' : 'game__picture'
              }
            />
          );
        })}
      </div>
      <Sound text={currentText} sound={currentSound} />
    </main>
  );
};

export default Game2;
