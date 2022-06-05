import React from 'react';
import map from './img/map.png';
import caveGray from './img/caveGray.png';
import waterfallGray from './img/waterfallGray.png';
import vulcanoGray from './img/vulcanoGray.png';
import caveColor from './img/caveColor.png';
import waterfallColor from './img/waterfallColor.png';
import vulcanoColor from './img/vulcanoColor.png';

import './style.css';

const Map = ({ unlockedLevels }) => {
  console.log(unlockedLevels);
  const level1 = unlockedLevels[1] ? caveColor : caveGray;
  const level2 = unlockedLevels[2] ? waterfallColor : waterfallGray;
  const level3 = unlockedLevels[3] ? vulcanoColor : vulcanoGray;
  return (
    <div className="map">
      <img className="map__image" src={map} />
      <img className="level1" src={level1} />
      <img className="level2" src={level2} />
      <img className="level3" src={level3} />
    </div>
  );
};

export default Map;
