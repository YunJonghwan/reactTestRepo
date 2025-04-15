import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import UseState1 from './page/useState1';
import UseState2 from './page/useState2';
import UseState3 from './page/useState3';

function Link() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/useState1" element={<UseState1 />} />
          <Route path="/useState2" element={<UseState2 />} />
          <Route path="/useState3" element={<UseState3 />} />
          <Route path="/useState4" element={<UseState4 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Link;