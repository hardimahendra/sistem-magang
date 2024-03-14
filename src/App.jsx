import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Outlet />
      {/*  */}
    </>
  );
}

export default App;
