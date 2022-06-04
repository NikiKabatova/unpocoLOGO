import React from 'react';
import { useDrag } from 'react-dnd';

const Pictures = ({ id, image }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(image);
  return (
    <img
      ref={drag}
      src={image}
      width="150px"
      style={{ border: isDragging ? '5px solid green' : '0px' }}
    />
  );
};

export default Pictures;
