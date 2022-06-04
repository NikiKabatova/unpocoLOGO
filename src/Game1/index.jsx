import React from 'react';
import heart from './heart.png';
const Game1 = () => {
  return (
    <div>
      <div className="panel">
        <button>home</button>
        <img className="lives" src={heart} />
      </div>
    </div>
  );
};

export default Game1;
