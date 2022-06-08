import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import heart from './heart.png';
import Button from '../Button';
import DragDrop from './Components/DragDrop';
import GameRulesInfo from '../GameRulesInfo';
import { useState } from 'react';
import './style.css';
import Sound from '../Sound';

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
    image: require('./img/car.png'),
  },
];

const forbiddenPictures = [2, 5];
console.log(forbiddenPictures.includes(3));

const Game1 = () => {
  const [pictures, setPictures] = useState(initialPictures);
  const [selectedPicture, setSelectedPicture] = useState();
  const [isInfoVisible, setIsInfoVisible] = useState(true);

  const removeImg = (id) => {
    if (!forbiddenPictures.includes(id)) {
      setPictures((pictures) =>
        pictures.filter((picture) => id !== picture.id),
      );
    }
  };

  const handleBoxClick = () => {
    console.log(selectedPicture);
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

      <nav className="navigation">
        <Button image="home" target="/" />
        <img className="lives" src={heart} />
        <img className="lives" src={heart} />
        <img className="lives" src={heart} />
        <Button image="home" target="/" />
      </nav>
      <Sound />
      <div>
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
