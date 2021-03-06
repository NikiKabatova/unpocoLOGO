import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Rules from './Rules';
import Map from './Map';
import Game1 from './Game1';
import Game2 from './Game2';
import Game3 from './Game3';
import InfoPopup from './InfoPopup';
import useLocalStorage from './hooks/useLocalStorage';

import './style.css';

const Wrapper = () => (
  <div>
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
          <Route path="rules" element={<Rules />} />
          <Route path="map" element={<Map unlockedLevels={unlockedLevels} />} />
          <Route
            path="game1"
            element={<Game1 setUnlockedLevels={setUnlockedLevels} />}
          />
          <Route
            path="game2"
            element={<Game2 setUnlockedLevels={setUnlockedLevels} />}
          />
          <Route path="game3" element={<Game3 />} />
          <Route path="rules-info" element={<InfoPopup />} />
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
