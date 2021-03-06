import React from 'react';
import { useDrag } from 'react-dnd';

const Picture = ({ id, image, onClick, selectedPicture }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      className="game1__image"
      onClick={onClick}
      ref={drag}
      src={image}
      width="150px"
      style={{
        filter:
          isDragging || id === selectedPicture
            ? 'drop-shadow(0 0 0.75rem rgb(160, 0, 210))'
            : 'none',
      }}
    />
  );
};

export default Picture;
