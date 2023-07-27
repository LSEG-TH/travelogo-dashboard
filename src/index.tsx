import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@refinitiv-ui/elements/select';
import '@refinitiv-ui/elements/chart';

import '@refinitiv-ui/halo-theme/dark/imports/native-elements';
import '@refinitiv-ui/elements/select/themes/halo/dark';
import '@refinitiv-ui/elements/chart/themes/halo/dark';
import '@refinitiv-ui/elements/panel/themes/halo/dark';

import '@refinitiv-ui/elements/button';
import '@refinitiv-ui/elements/panel';
// import styles for typography, body and other native inbuilt elements.
import '@refinitiv-ui/halo-theme/dark/imports/native-elements';
// import element themes
import '@refinitiv-ui/elements/button/themes/halo/dark';
import '@refinitiv-ui/elements/panel/themes/halo/dark';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
