import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="header" id="header">
        <div className="header_toggle"></div>
        <div className="tentang-mahasiswa">
          <p>Hardi Mahendra</p>
          <p>18002</p>
        </div>
        <div className="header_img">
          <img src="img/hardi.jpg" alt="profil" />
        </div>
      </header>
    </>
  );
};

export default Navbar;