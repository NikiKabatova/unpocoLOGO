import React from 'react';
import map from './map.png';
import level1 from './level1.png';
import './style.css';

const Map = () => {
  return (
    <div className="map">
      <div className="map__image" style={{ backgroundImage: `url(${map})` }}>
        <img className="level1" src={level1} />
      </div>
    </div>
  );
};

export default Map;
