import React from 'react';
import Pictures from './Picture';
import { useState } from 'react';
import { useDrop } from 'react-dnd';
import boxImg from '../krabice.png';

const initialPictures = [
  {
    id: 1,
    image: require('./game_img/kytara.png'),
  },
  {
    id: 2,
    image: require('./game_img/medved.png'),
  },
  {
    id: 3,
    image: require('./game_img/rocket.png'),
  },
  {
    id: 4,
    image: require('./game_img/unicorn.png'),
  },
  {
    id: 5,
    image: require('./game_img/car.png'),
  },
];

const DragDrop = () => {
  const [pictures, setPictures] = useState(initialPictures);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => removeImg(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  console.log(isOver);
  const removeImg = (id) => {
    console.log(id);
    setPictures((pictures) => pictures.filter((picture) => id !== picture.id));
  };
  return (
    <>
      <div className="box" ref={drop}>
        <img className="box" src={boxImg} />
      </div>
      <div className="pictures">
        {pictures.map((picture) => {
          return (
            <Pictures image={picture.image} id={picture.id} key={picture.id} />
          );
        })}
      </div>
    </>
  );
};

export default DragDrop;
