import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Test from './page/useEffect';

function Link() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Link;