import React from 'react';
import Button from '../Button';
import Sound from '../Sound';
import InfoPopup from '../InfoPopup';
import VictoryPopup from '../VictoryPopup';
import FinalVictoryPopup from '../FinalVictoryPopup';
import { useState } from 'react';
import './style.css';

const initialPictures = [
  {
    id: 1,
    image: require('./img/strawberry.png'),
    text: `To byla nehoda!
Spadla mi _ _ _ _ _ _!`,
    sound: require('./audio/jahoda.mp3'),
  },
  {
    id: 2,
    image: require('./img/panda.png'),
    text: `Ptá se Tondy Vanda,
jak vypadá _ _ _ _ .`,
    sound: require('./audio/panda.mp3'),
  },
  {
    id: 3,
    image: require('./img/snake.png'),
    text: `Padá voda, padá,
máme doma _ _ _ _.`,
    sound: require('./audio/had.mp3'),
  },
  {
    id: 4,
    image: require('./img/trumpet.png'),
    text: `Troubil Toník na _ _ _ _,
vyplašil pár holoubků.`,
    sound: require('./audio/trubka.mp3'),
  },
];

const Game3 = () => {
  const [currentPicture, setCurrentPicture] = useState(initialPictures[1].id);

  const currentText = initialPictures.find(
    (picture) => currentPicture === picture.id,
  ).text;

  const currentSound = initialPictures.find(
    (picture) => currentPicture === picture.id,
  ).sound;

  const [donePictures, setDonePictures] = useState([]);
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const [isVictory, setIsVictory] = useState(false);

  const handleCLick = (id) => {
    if (currentPicture === id) {
      setDonePictures((pictures) => [...pictures, id]);
      if (id === 2) setCurrentPicture(3);
      if (id === 3) setCurrentPicture(4);
      if (id === 4) setCurrentPicture(1);
      if (id === 1) setIsVictory(true);
    }
  };
  return (
    <main>
      {isInfoVisible && (
        <InfoPopup hide={() => setIsInfoVisible(false)} currentGame={2} />
      )}
      {/* TODO:přidat popup pro dokončení celé hry místo VictoryPopup */}
      {isVictory && <FinalVictoryPopup />}
      <nav className="navigation-game">
        <Button image="arrow" target="/map" className="back__button" />
        <Button
          onClick={() => setIsInfoVisible(true)}
          image="info"
          target="/"
          className="info__button"
        />
      </nav>

      <div className="content">
        <p className="rhyme__text">{currentText}</p>
        <div className="content__images">
          {initialPictures.map((picture) => {
            const isDone = donePictures.includes(picture.id);
            return (
              <img
                key={picture.id}
                src={picture.image}
                className={
                  isDone ? 'game__picture game__picture--done' : 'game__picture'
                }
                onClick={() => handleCLick(picture.id)}
              />
            );
          })}
        </div>
        <Sound sound={currentSound} />
      </div>
    </main>
  );
};

export default Game3;
