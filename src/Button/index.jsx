import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from './img/home.png';

const ICON = {
  home: homeIcon,
};
//
const Button = ({ image, target }) => {
  // const getIcon = (image) => {
  //   if (image === 'home') return home;
  // };
  return (
    <button>
      {/* <Link className="home" to={target}>
        <img className="home" src={getIcon(image)} />
      </Link> */}
      <Link className="button" to={target}>
        <img className="button__icon" src={ICON[image]} />
      </Link>
    </button>
  );
};

export default Button;
