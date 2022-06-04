import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import OurProject from './OurProject';
import logo from './img/logo.svg';
import styles from './style.css';

const App = () => (
  <div>
    <nav
      className="navigation"
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link className="home" to="/">
        Home
      </Link>{' '}
      <Link className="about" to="/about">
        About
      </Link>{' '}
      <Link className="project" to="/ourproject">
        Project
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
        <Route path="ourproject" element={<OurProject />} />
        <Route path="about" element={<About />} />
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
