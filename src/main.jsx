import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// React 18 버전의 새로운 Root API 사용
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
