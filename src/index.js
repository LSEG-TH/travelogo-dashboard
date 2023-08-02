import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const loadTheme = () => {
  return new Promise((resolve) => {
    const theme = sessionStorage.getItem('elf-theme') || 'light';
    document.body.setAttribute('color-scheme', theme);
    import(`./themes/${theme}`);
    resolve(theme);
  });
};

loadTheme().then((theme) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App theme={theme} />
    </React.StrictMode>,
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
