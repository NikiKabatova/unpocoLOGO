import React from 'react';
import Picture from './Picture';
import { useDrop } from 'react-dnd';
import boxImg from '../img/box.png';

const DragDrop = ({
  pictures,
  removePicture,
  selectedPicture,
  setSelectedPicture,
  handleBoxClick,
}) => {
  const [_, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => removePicture(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <>
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

      <div onClick={handleBoxClick} className="box" ref={drop}>
        <img className="box__img" src={boxImg} />
      </div>
    </>
  );
};

export default DragDrop;
