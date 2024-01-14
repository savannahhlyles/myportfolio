import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Connect from './pages/Connect';

function App() {
  return (
    <>
      <HashRouter>
        <div id="content">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Connect" element={<Connect />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
