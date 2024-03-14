import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './global.css';
import Dashboard from './pages/Dashboard';
import Laporan from './pages/Laporan';
import Daftar from './pages/Daftar';
import Index from './Index';
import Regis from './pages/Regis';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Main Routes
      { path: '/', element: <Index /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/laporan', element: <Laporan /> },
      { path: '/daftar', element: <Daftar /> },
      { path: '/regis', element: <Regis /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
