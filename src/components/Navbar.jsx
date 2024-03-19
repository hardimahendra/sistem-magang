import React from "react";

const toggleButton = () => {

}

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 flex items-center justify-between px-2 bg-blue-500 w-[96%] ml-[4%]">
        <div className="bg-yellow-500 flex justify-center items-center p-5">
          <button>X</button>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex-col font-mono text-end pr-4">
            <p>Hardi Mahendra</p>
            <p>18002</p>
          </div>
          <div className=" w-[50px] ">
            <img className="rounded-full" src="img/hardi.jpg" alt="profil" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;