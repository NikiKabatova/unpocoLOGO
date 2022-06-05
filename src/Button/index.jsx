import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from './img/home.png';

const ICON = {
  home: homeIcon,
};
const Button = ({ image, target, className }) => {
  return (
    <button className={className}>
      <Link className="button" to={target}>
        <img className="button__icon" src={ICON[image]} />
      </Link>
    </button>
  );
};

export default Button;
