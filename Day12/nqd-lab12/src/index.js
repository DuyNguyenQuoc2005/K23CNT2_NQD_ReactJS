import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NqdApp from './NqdApp';

const nqdRoot = ReactDOM.createRoot(document.getElementById('nqdRoot'));
nqdRoot.render(
  <React.StrictMode>
    <NqdApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
