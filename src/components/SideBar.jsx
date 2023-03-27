import React from "react";

export function SideBar() {
  return ( 
      <>
    <div className="l-navbar" id="nav-bar">
        <nav className="nav">
            <div> 
                <a href="/" className="nav_logo"> 
                    <img width="25" src="img/unsika-logo.png"/>
                    <span className="nav_logo-name">UNSIKA</span> 
                </a>
                <div className="nav_list">
                    <a href="/" className="nav_link active">
                        <i class="fas fa-th-large nav_icon"></i>
                        <span className="nav_name">Dashboard</span> 
                    </a>
                    <a href="laporan" className="nav_link">
                        <i class="fas fa-book nav_icon"></i>
                        <span className="nav_name">Laporan Magang</span> 
                    </a>
                    <a href="/daftar" className="nav_link">
                        <i class="fa-solid fa-calendar-week nav_icon"></i>
                        <span className="nav_name">Daftar Magang</span> 
                    </a>
                </div>
            </div> 
            <a href="/" className="nav_link"> 
                <i className='fas fa-sign-out-alt nav_icon'></i> 
                <span className="nav_name">SignOut</span> 
            </a>
        </nav>
    </div>
  </>
    ) 
}
