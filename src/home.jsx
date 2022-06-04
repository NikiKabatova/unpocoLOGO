import React from 'react';
import logo from './img/logo.svg';

const Home = () => {
  return (
    <main>
      <div className="container">
        <img className="logo" src={logo} />
        <button>Start</button>
        <button>O hře</button>
      </div>
    </main>
  );
};

export default Home;
