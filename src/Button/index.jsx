import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from './img/home.png';
import arrowIcon from './img/arrow.png';

const ICON = {
  home: homeIcon,
  arrow: arrowIcon,
};
const Button = ({ image, target, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <Link className={onClick ? 'button link-disabled' : 'button'} to={target}>
        <img className="button__icon" src={ICON[image]} />
      </Link>
    </button>
  );
};

export default Button;
