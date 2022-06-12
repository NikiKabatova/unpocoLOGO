import React, { useEffect } from 'react';
import speaker from './speaker.png';
import './style.css';

const Sound = ({ text, sound }) => {
  const audio = new Audio(sound);
  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, []);
  return (
    <button
      className={text ? 'audio__button audio__button--text' : 'audio__button'}
      onClick={() => {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }}
    >
      <img className="button__icon" src={speaker} />
      {text}
    </button>
  );
};

export default Sound;
