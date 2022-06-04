import React from 'react';
import logo from './img/logo.svg';
import './style.css';
const Home = () => {
  return (
    <main>
      <div className="container">
        <img className="logo" src={logo} />
        <button className="button1">Start</button>
        <button className="button2">O hře</button>
      </div>
    </main>
  );
};

export default Home;
