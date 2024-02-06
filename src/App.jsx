import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Intro from './pages/Intro';
import './index.css';
import './App.css';


function App() {
  return (
    <>
      <HashRouter>
        <div id="content">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
