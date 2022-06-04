import React from 'react';
import heart from './heart.png';
import Button from '../Button';

const Game1 = () => {
  return (
    <div>
      <div className="panel">
        <Button image="home" target="/" />
        <img className="lives" src={heart} />
        <img className="lives" src={heart} />
        <img className="lives" src={heart} />
      </div>
    </div>
  );
};

export default Game1;
