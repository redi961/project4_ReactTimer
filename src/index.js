import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const tick = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

setInterval(tick, 1000);

/* setInterval(() => root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
), 1000) */

reportWebVitals();
