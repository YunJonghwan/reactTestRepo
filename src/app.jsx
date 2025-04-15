import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import UseState1 from './page/useState1';
import UseState2 from './page/useState2';

function Link() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/useState1" element={<UseState1 />} />
          <Route path="/useState2" element={<UseState2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Link;