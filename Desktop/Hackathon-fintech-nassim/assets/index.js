import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Component/App';

const root = ReactDOM.createElement(document.querySelector('#app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);