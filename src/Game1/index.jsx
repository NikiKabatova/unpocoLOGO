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
    text: 'Rocket',
    sound: require('./doorbell-sound-effect.mp3'),
  },
  {
    id: 4,
    image: require('./img/unicorn.png'),
    text: 'Unicorn',
    sound: require('./doorbell-sound-effect.mp3'),
  },
];
//TODO: Změnit/vymazat ty forbidden pictures, protože nakonec žádné takové nebudou ne? Jsme se bavili že uklidí teda všechny ty hračky
const forbiddenPictures = [2];
console.log(forbiddenPictures.includes(3));

const Game1 = ({ setUnlockedLevels }) => {
  const text = ['picture1', 'picture2', 'picture3'];
  const currentPicture = text[currentPicture];
  const [pictures, setPictures] = useState(initialPictures);
  const [selectedPicture, setSelectedPicture] = useState();
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const [isVictory, setIsVictory] = useState(false);

  const removeImg = (id) => {
    if (!forbiddenPictures.includes(id)) {
      setPictures((pictures) => {
        if (pictures.length === 3) {
          setIsVictory(true);
          setUnlockedLevels({ 1: true, 2: true, 3: false });
        }
        console.log(pictures);
        return pictures.filter((picture) => id !== picture.id);
      });
    }
  };

  const handleBoxClick = () => {
    if (!selectedPicture) return;
    if (forbiddenPictures.includes(selectedPicture)) {
    } else {
      removeImg(selectedPicture);
    }
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
      <Sound text={currentPicture} />
      <div className="content">
        <DndProvider backend={HTML5Backend}>
          <DragDrop
            pictures={pictures}
            removeImg={removeImg}
            selectedPicture={selectedPicture}
            setSelectedPicture={setSelectedPicture}
            handleBoxClick={handleBoxClick}
          />
        </DndProvider>
      </div>
    </main>
  );
};

export default Game1;
