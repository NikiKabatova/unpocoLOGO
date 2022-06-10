import React from 'react';
import Button from '../Button';
import Sound from '../Sound';
import GameRulesInfo from '../GameRulesInfo';
import VictoryPopup from '../VictoryPopup';
import { useState } from 'react';
import './style.css';

const rhymePictures = [
  {
    id: 1,
    image: require('./img/strawberry.png'),
    text: `To byla nehoda!
    \n
    Spadla mi _ _ _ _ _ _!`,
  },
  {
    id: 2,
    image: require('./img/panda.png'),
    text: `Ptá se Tondy Vanda,
jak vypadá _ _ _ _ _ .`,
  },
  {
    id: 3,
    image: require('./img/snake.png'),
    text: 'Padá voda, padá, máme doma _ _ _ _.',
  },
  {
    id: 4,
    image: require('./img/trumpet.png'),
    text: 'Troubil Toník na _ _ _ _ _ _, vyplašil pár holoubků.',
  },
];

const Game3 = () => {
  const [currentPicture, setCurrentPicture] = useState(rhymePictures[1].id);

  const currentText = rhymePictures.find(
    (picture) => currentPicture === picture.id,
  ).text;

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
    console.log(id, donePictures, currentPicture);
  };
  return (
    <main>
      {isInfoVisible && (
        <GameRulesInfo hide={() => setIsInfoVisible(false)} currentGame={2} />
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

      <div className="game3-content">
        <p className="rhyme__text">{currentText}</p>
        <div className="content__images">
          {rhymePictures.map((picture) => {
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
        <Sound />
      </div>
    </main>
  );
};

export default Game3;
