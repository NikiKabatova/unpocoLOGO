import React from 'react';
import map from './img/map.png';
import level1 from './img/level1.png';
import level2 from './img/level2.png';
import level3 from './img/level3.png';
import './style.css';

const Map = () => {
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
