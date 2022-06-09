import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Button from '../Button';
import DragDrop from './Components/DragDrop';
import GameRulesInfo from '../GameRulesInfo';
import { useState } from 'react';
import './style.css';
import Sound from '../Sound';
import VictoryPopup from '../VictoryPopup';

const initialPictures = [
  {
    id: 1,
    image: require('./img/princess.png'),
  },
  {
    id: 2,
    image: require('./img/bear.png'),
  },
  {
    id: 3,
    image: require('./img/rocket.png'),
  },
  {
    id: 4,
    image: require('./img/unicorn.png'),
  },
  {
    id: 5,
    image: require('./img/ball.png'),
  },
];

const forbiddenPictures = [2, 5];
console.log(forbiddenPictures.includes(3));

const Game1 = ({ setUnlockedLevels }) => {
  const text = ['picture1', 'picture2', 'picture3'];
  const currentPicture = text[currentPicture]; // TODO: nevím kam to přidat a jetli to můžu takhle nazývat
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
