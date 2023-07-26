import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import {BookingsContextProvider} from './context/bookingsContext';
import {AuthContextProvider} from './context/authContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthContextProvider>
        <BookingsContextProvider>
             <App />
        </BookingsContextProvider>
   </AuthContextProvider>
  </React.StrictMode>
);

