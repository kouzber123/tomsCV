import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './routes/Routes';
import "./components/styles/index.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>
);
