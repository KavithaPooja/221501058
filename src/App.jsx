import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShortenerPage from './pages/ShortenerPage';
import StatsPage from './pages/StatsPage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="navbar" style={{ padding: '10px', backgroundColor: '#0077cc' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Shorten URL</Link>
        <Link to="/stats">Stats</Link>
      </div>

      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatsPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
