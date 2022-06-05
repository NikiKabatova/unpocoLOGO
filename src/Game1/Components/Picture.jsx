import React from 'react';
import { useDrag } from 'react-dnd';

const Picture = ({ id, image, onClick, selectedItem }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      onClick={onClick}
      ref={drag}
      src={image}
      width="150px"
      style={{
        // border: isDragging ? '5px solid green' : '0px',
        filter:
          isDragging || id === selectedItem
            ? 'drop-shadow(0 0 0.75rem crimson)'
            : 'none',

        // filter: 'drop-shadow(0 0 0.75rem crimson)',
      }}
    />
  );
};

export default Picture;
