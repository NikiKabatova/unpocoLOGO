import React from 'react';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Button from '../Button';
import DragDrop from './Components/DragDrop';
import InfoPopup from '../InfoPopup';
import Sound from '../Sound';
import VictoryPopup from '../VictoryPopup';
import './style.css';
import useLocalStorage from '../hooks/useLocalStorage';

const initialPictures = [
  {
    id: 1,
    image: require('./img/princess.png'),
    text: 'Princezna',
    sound: require('./audio/princezna.mp3'),
  },
  {
    id: 2,
    image: require('./img/robot.png'),
    text: 'Robot',
    sound: require('./audio/robot.mp3'),
  },
  {
    id: 3,
    image: require('./img/rocket.png'),
    text: 'Raketa',
    sound: require('./audio/raketa.mp3'),
  },
  {
    id: 4,
    image: require('./img/unicorn.png'),
    text: 'Jednorožec',
    sound: require('./audio/jednorozec.mp3'),
  },
];

const Game1 = ({ setUnlockedLevels }) => {
  const [currentPicture, setCurrentPicture] = useState(initialPictures[3].id);
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
      if (id === 4) setCurrentPicture(3);
      if (id === 3) setCurrentPicture(2);
      if (id === 2) setCurrentPicture(1);
      if (id === 1) {
        setIsVictory(true);
        setUnlockedLevels((unlockedLevels) => ({ ...unlockedLevels, 2: true }));
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
        <InfoPopup hide={() => setIsInfoVisible(false)} currentGame={0} />
      )}
      {isVictory && <VictoryPopup />}

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
        <div className="game1__container">
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
      </div>
    </main>
  );
};

export default Game1;
