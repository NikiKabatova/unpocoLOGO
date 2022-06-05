import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import heart from './heart.png';
import Button from '../Button';
import DragDrop from './Components/DragDrop';
import { useState } from 'react';
import './style.css';

const initialPictures = [
  {
    id: 1,
    image: require('./img/kytara.png'),
  },
  {
    id: 2,
    image: require('./img/medved.png'),
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

const forbiddenItems = [2, 5];
console.log(forbiddenItems.includes(3));

const Game1 = () => {
  const [pictures, setPictures] = useState(initialPictures);
  const [selectedItem, setSelectedItem] = useState();

  const removeImg = (id) => {
    if (!forbiddenItems.includes(id)) {
      setPictures((pictures) =>
        pictures.filter((picture) => id !== picture.id),
      );
    }
  };

  const handleBoxClick = () => {
    console.log(selectedItem);
    if (!selectedItem) return;
    if (forbiddenItems.includes(selectedItem)) {
    } else {
      removeImg(selectedItem);
    }
  };
  return (
    <main>
      <nav className="navigation">
        <Button image="home" target="/" />
        <img className="lives" src={heart} />
        <img className="lives" src={heart} />
        <img className="lives" src={heart} />
        <Button image="home" target="/" />
      </nav>
      <div>
        <DndProvider backend={HTML5Backend}>
          <DragDrop
            pictures={pictures}
            removeImg={removeImg}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            handleBoxClick={handleBoxClick}
          />
        </DndProvider>
      </div>
    </main>
  );
};

export default Game1;
