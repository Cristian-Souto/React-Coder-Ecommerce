import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index'
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { CartContextProvider } from './context/cartContext';

const firebaseConfig = {
  apiKey: "AIzaSyC5E1rXTOYTKS5xOWaTZ6kiTXJEI8rydVA",
  authDomain: "ecommerce-4fb2d.firebaseapp.com",
  projectId: "ecommerce-4fb2d",
  storageBucket: "ecommerce-4fb2d.appspot.com",
  messagingSenderId: "95463840331",
  appId: "1:95463840331:web:136aaca565ba3f4fa08bce"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);


reportWebVitals();
