import React from 'react';
import doorbell from './doorbell-sound-effect.mp3';

const Sound = () => {
  const audio = new Audio(doorbell);
  return (
    <div>
      <button
        onClick={() => {
          audio.play();
        }}
      >
        Play
      </button>
    </div>
  );
};

export default Sound;
