import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Laporan from './pages/Laporan';
import DaftarMagang from './pages/DaftarMagang';
import Index from './Index';
import Register from './pages/Register';
const router = createBrowserRouter([
  {
    path: '*',
    Component: Root,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/daftarMagang" element={<DaftarMagang/>} />
      <Route path="/laporan" element={<Laporan />} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  );
}
