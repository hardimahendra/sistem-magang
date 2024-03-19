import React from "react";
import { Link } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { TbReportAnalytics, TbLogout } from 'react-icons/tb';
import { IoMdList } from 'react-icons/io';
const SideBar = () => {
  return (
    <>
      <nav className="fixed left-0 flex flex-col h-full w-[4%] justify-between items-center bg-red-500 ">
        <div className="p-2 flex flex-col justify-around w-full gap-5">
          <div className="flex p-1 justify-center items-center">
            <Link to="/">
              <img className="w-[45px]" src="img/unsika-logo.png" />
              {/* <span className="nav_logo-name">UNSIKA</span> */}
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link to="/dashboard" className="flex w-[30px] my-2 ">
              <RxDashboard className="w-full h-full" />
            </Link>
            <Link to="/laporan" className="w-[30px] my-2 ">
              <TbReportAnalytics className="w-full h-full" />
            </Link>
            <Link to="/daftarMagang" className="w-[30px] my-2 ">
              <IoMdList className="w-full h-full" />
            </Link>
          </div>
        </div>
        <div className="flex mb-2  items-center justify-center">
          <a href="/" className="w-[55px] h-[55px] flex justify-center items-center">
            <TbLogout className="w-1/2 h-1/2" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default SideBar;