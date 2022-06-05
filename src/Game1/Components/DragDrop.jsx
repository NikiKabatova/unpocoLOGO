import React from 'react';
import Picture from './Picture';
import { useDrop } from 'react-dnd';
import boxImg from '../img/krabice.png';

const DragDrop = ({
  pictures,
  removeImg,
  selectedItem,
  setSelectedItem,
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
      <div onClick={handleBoxClick} className="box" ref={drop}>
        <img className="box__img" src={boxImg} />
      </div>
      <div className="pictures">
        {pictures.map((picture) => {
          return (
            <Picture
              onClick={() => setSelectedItem(picture.id)}
              image={picture.image}
              id={picture.id}
              key={picture.id}
              selectedItem={selectedItem}
            />
          );
        })}
      </div>
    </>
  );
};

export default DragDrop;
