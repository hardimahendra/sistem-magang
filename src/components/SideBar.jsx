import React from "react";
import { Link } from 'react-router-dom';
export function SideBar() {
  return ( 
      <>
    <div className="l-navbar" id="nav-bar">
        <nav className="nav">
            <div> 
                <Link to="/dashboard" className="nav_logo"> 
                    <img width="25" src="img/unsika-logo.png"/>
                    <span className="nav_logo-name">UNSIKA</span> 
                </Link>
                <div className="nav_list">
                    <Link to="/dashboard" className="nav_link active">
                        <i class="fas fa-th-large nav_icon"></i>
                        <span className="nav_name">Dashboard</span> 
                    </Link>
                    <Link to="/laporan" className="nav_link">
                        <i class="fas fa-book nav_icon"></i>
                        <span className="nav_name">Laporan Magang</span> 
                    </Link>
                    <Link to="/daftar" className="nav_link">
                        <i class="fa-solid fa-calendar-week nav_icon"></i>
                        <span className="nav_name">Daftar Magang</span> 
                    </Link>
                </div>
            </div> 
            <Link to="/" className="nav_link"> 
                <i className='fas fa-sign-out-alt nav_icon'></i> 
                <span className="nav_name">SignOut</span> 
            </Link>
        </nav>
    </div>
  </>
    ) 
}
