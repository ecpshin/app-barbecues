import React from 'react';
import ReactDOM from 'react-dom/client';
import {GeralContextProvider} from './contexts/GeralContext';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './geral.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <GeralContextProvider>
        <Router>        
          <AppRoutes />       
        </Router>
     </GeralContextProvider>
  </React.StrictMode>
);