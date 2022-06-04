import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Intro from './Intro';
import Map from './Map';
import './style.css';

const App = () => (
  <div>
    <nav
      className="navigation"
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <button>
        <Link className="home" to="/">
          Home
        </Link>
      </button>
      <Link className="about" to="/about">
        About
      </Link>{' '}
      <Link className="intro" to="/intro">
        Intro
      </Link>
      <Link className="maps" to="/maps">
        Maps
      </Link>
    </nav>

    <Outlet />
  </div>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="intro" element={<Intro />} />
        <Route path="maps" element={<Map />} />
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
  </BrowserRouter>,
);
