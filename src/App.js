import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Puzzle from './Puzzle';
import Timeline from './Timeline';
import Letter from './Letter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Puzzle" element={<Puzzle />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </Router>
  );
}

export default App;
