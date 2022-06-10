import React from 'react';
import Picture from './Picture';
import { useDrop } from 'react-dnd';
import boxImg from '../img/box.png';
import Sound from '../../Sound';

const DragDrop = ({
  pictures,
  removeImg,
  selectedPicture,
  setSelectedPicture,
  handleBoxClick,
}) => {
  const [_, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => removeImg(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <>
      <div className="pictures">
        {pictures.map((picture) => {
          return (
            <Picture
              id={picture.id}
              key={picture.id}
              image={picture.image}
              selectedPicture={selectedPicture}
              onClick={() => setSelectedPicture(picture.id)}
            />
          );
        })}
      </div>
      <div onClick={handleBoxClick} className="box" ref={drop}>
        <img className="box__img" src={boxImg} />
      </div>
    </>
  );
};

export default DragDrop;
