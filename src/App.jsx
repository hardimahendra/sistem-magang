
import {Routes, Route} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Laporan } from "./pages/Laporan";
import { Daftar } from "./pages/Daftar";
import { Index } from "./Index";
import { Regis } from "./pages/Regis";
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/regis" element={<Regis/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/laporan" element={<Laporan />} />
          <Route path="/daftar" element={<Daftar/>} />
        </Routes>
    </>
  );
}

export default App;