import React from 'react';
import Pictures from './Pictures';
import { useState } from 'react';
import { useDrop } from 'react-dnd';

const PictureList = [
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
    image: require('./game_img/kytara.png'),
  },
  {
    id: 4,
    image: require('./game_img/kytara.png'),
  },
  {
    id: 5,
    image: require('./game_img/kytara.png'),
  },
];

const DragDrop = () => {
  const [box, setBox] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBox(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  console.log(isOver);
  const addImageToBox = (id) => {
    console.log(id);
    const picturesList = PictureList.filter((pictures) => id === pictures.id);
    setBox((box) => [...box, picturesList[0]]);
  };
  return (
    <>
      <div className="pictures">
        {PictureList.map((pictures) => {
          return (
            <Pictures
              image={pictures.image}
              id={pictures.id}
              key={pictures.id}
            />
          );
        })}
      </div>
      <div className="box" ref={drop}>
        {box.map((pictures) => {
          return (
            <Pictures
              image={pictures.image}
              id={pictures.id}
              key={pictures.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default DragDrop;
