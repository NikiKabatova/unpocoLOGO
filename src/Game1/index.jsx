import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import heart from './heart.png';
import Button from '../Button';
import DragDrop from './Components/DragDrop';

const Game1 = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="panel">
        <Button image="home" target="/" />
        <img className="lives" src={heart} />
        <img className="lives" src={heart} />
        <img className="lives" src={heart} />
        <Button image="home" target="/" />
      </div>
      <DragDrop />
    </DndProvider>
  );
};

export default Game1;
