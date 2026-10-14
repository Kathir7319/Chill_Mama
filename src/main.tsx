import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
        <CartDrawer />
        <CheckoutModal />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
