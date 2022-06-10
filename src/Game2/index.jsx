import React from 'react';
import { useState } from 'react';
import Button from '../Button';
import Sound from '../Sound';
import GameRulesInfo from '../GameRulesInfo';
import VictoryPopup from '../VictoryPopup';

import './style.css';

const initialPictures = [
  {
    id: 1,
    image: require('./img/lion.png'),
    text: 'Lev spí',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 2,
    image: require('./img/saw.png'),
    text: 'Pila řeže',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 3,
    image: require('./img/dummy.png'),
    text: 'Dětský dudlík',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 4,
    image: require('./img/butterfly.png'),
    text: 'Motýl lítá',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 5,
    image: require('./img/apple.png'),
    text: 'Červené jablko',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 6,
    image: require('./img/dolphin.png'),
    text: 'Delfín skáče',
    sound: require('./doorbell-sound-effect.mp3'),
  },
];

const Game2 = ({ setUnlockedLevels }) => {
  const [currentPicture, setCurrentPicture] = useState(initialPictures[0].id);
  const [donePictures, setDonePictures] = useState([]);
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const [isVictory, setIsVictory] = useState(false);

  const currentText = initialPictures.find(
    (picture) => currentPicture === picture.id,
  ).text;

  const currentSound = initialPictures.find(
    (picture) => currentPicture === picture.id,
  ).sound;

  const handlePictureClick = (id) => {
    if (currentPicture === id) {
      setDonePictures((pictures) => [...pictures, id]);
      if (id === 1) setCurrentPicture(6);
      if (id === 6) setCurrentPicture(2);
      if (id === 2) {
        setIsVictory(true);
        setUnlockedLevels({ 1: true, 2: true, 3: true });
      }
    }
  };
  return (
    <main>
      {isInfoVisible && (
        <GameRulesInfo hide={() => setIsInfoVisible(false)} currentGame={1} />
      )}
      {isVictory && <VictoryPopup />}

      <nav className="navigation-game">
        <Button image="arrow" target="/map" className="back__button" />
        <Button
          onClick={() => setIsInfoVisible(true)}
          image="home"
          target="/"
          className="home__button"
        />
      </nav>

      <div className="game2-content">
        <div className="content__images">
          {initialPictures.map((picture) => {
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
      </div>
      <Sound text={currentText} sound={currentSound} />
    </main>
  );
};

export default Game2;
