import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CounterProvider } from './context/CounterContext'; 
import {CartProvider} from './context/CartContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterProvider>
      <CartProvider><App /></CartProvider>
    </CounterProvider>
  </React.StrictMode>
);


reportWebVitals();
