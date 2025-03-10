// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import AppContextProvider from './utils/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Using createRoot method
root.render(
  <AppContextProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </AppContextProvider>
);
