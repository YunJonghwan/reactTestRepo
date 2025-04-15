import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import UseState from './page/useState';

function Link() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UseState />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Link;