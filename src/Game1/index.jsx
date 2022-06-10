import React from 'react';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Button from '../Button';
import DragDrop from './Components/DragDrop';
import GameRulesInfo from '../GameRulesInfo';
import Sound from '../Sound';
import VictoryPopup from '../VictoryPopup';
import './style.css';
import useLocalStorage from '../hooks/useLocalStorage';

const initialPictures = [
  {
    id: 1,
    image: require('./img/princess.png'),
    text: 'Princezna',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 2,
    image: require('./img/robot.png'),
    text: 'Robot',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 3,
    image: require('./img/rocket.png'),
    text: 'Raketa',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 4,
    image: require('./img/unicorn.png'),
    text: 'Jednorožec',
    sound: require('./doorbell-sound-effect.mp3'),
  },
];

const Game1 = ({ setUnlockedLevels }) => {
  const [currentPicture, setCurrentPicture] = useState(initialPictures[1].id);
  const [pictures, setPictures] = useState(initialPictures);
  const [selectedPicture, setSelectedPicture] = useState();
  const [isInfoVisible, setIsInfoVisible] = useLocalStorage('Game1Info', true);
  const [isVictory, setIsVictory] = useState(false);

  const currentText = initialPictures.find(
    (picture) => currentPicture === picture.id,
  ).text;

  const currentSound = initialPictures.find(
    (picture) => currentPicture === picture.id,
  ).sound;

  const removePicture = (id) => {
    if (currentPicture === id) {
      setPictures((pictures) =>
        pictures.filter((picture) => id !== picture.id),
      );
      if (id === 2) setCurrentPicture(1);
      if (id === 1) setCurrentPicture(3);
      if (id === 3) setCurrentPicture(4);
      if (id === 4) {
        setIsVictory(true);
        setUnlockedLevels({ 1: true, 2: true, 3: false });
      }
    }
  };

  const handleBoxClick = () => {
    if (!selectedPicture) return;
    removePicture(selectedPicture);
  };

  return (
    <main>
      {isInfoVisible && (
        <GameRulesInfo hide={() => setIsInfoVisible(false)} currentGame={0} />
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

      <div className="game1-content">
        <DndProvider backend={HTML5Backend}>
          <DragDrop
            pictures={pictures}
            removePicture={removePicture}
            selectedPicture={selectedPicture}
            setSelectedPicture={setSelectedPicture}
            handleBoxClick={handleBoxClick}
          />
        </DndProvider>
      </div>
      <Sound text={currentText} sound={currentSound} />
    </main>
  );
};

export default Game1;
