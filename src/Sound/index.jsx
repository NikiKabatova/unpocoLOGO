import React from 'react';
import doorbell from './doorbell-sound-effect.mp3';
import speaker from './speaker.png';
import './style.css';

const Sound = () => {
  const audio = new Audio(doorbell);
  return (
    <div>
      <button
        className="audio__button"
        onClick={() => {
          audio.play();
        }}
      >
        <img className="button__icon" src={speaker} />
        Jednorožec{' '}
        {/* TODO: vložit ten currentPicture + vložit icon repráku! */}
      </button>
    </div>
  );
};

export default Sound;
