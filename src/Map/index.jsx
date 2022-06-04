import React from 'react';
import map from './map.png';
import level1 from './level1.png';
import './style.css';

const Map = () => {
  return (
    <div className="map">
      <img className="map__image" src={map} />
      <img className="level1" src={level1} />
    </div>
  );
};

export default Map;
