import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Intro from './Intro';
import Map from './Map';
import Game1 from './Game1';
import Game2 from './Game2';
import Game3 from './Game3';
import GameRulesInfo from './GameRulesInfo';
import useLocalStorage from './hooks/useLocalStorage';

import './style.css';

const Wrapper = () => (
  <div>
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link className="home" to="/">
        Home
      </Link>
      <Link className="about" to="/about">
        About
      </Link>{' '}
      <Link className="intro" to="/intro">
        Intro
      </Link>
      <Link className="maps" to="/map">
        Maps
      </Link>
      <Link className="game1" to="/game1">
        Game1
      </Link>
      <Link className="game2" to="/game2">
        Game2
      </Link>
      <Link className="game3" to="/game3">
        Game3
      </Link>
      <Link to="/rules-info">rules-info</Link>
    </nav>

    <Outlet />
  </div>
);

const App = () => {
  const [unlockedLevels, setUnlockedLevels] = useLocalStorage(
    'unlockedLevels',
    { 1: true, 2: false, 3: false },
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="intro" element={<Intro />} />
          <Route path="map" element={<Map unlockedLevels={unlockedLevels} />} />
          <Route
            path="game1"
            element={<Game1 setUnlockedLevels={setUnlockedLevels} />}
          />
          <Route path="game2" element={<Game2 />} />
          <Route path="game3" element={<Game3 />} />
          <Route path="rules-info" element={<GameRulesInfo />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>Tady nic není!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
