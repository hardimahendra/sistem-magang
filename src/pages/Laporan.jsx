import React from "react";
import {Navbar} from "../components/Navbar"
import { SideBar } from "../components/SideBar";
export function Laporan() {
  return (
  <>
  <Navbar />
    <SideBar/>
    <div className="container">
        <div className="container-laporan">
            <div className="preview-content">
                <div>
                <img src="img/sample-laporan.png"/>
                </div>
                <div>
                    <a href="#">
                        <i className="bx bxs-file-pdf"></i>
                    </a>
                </div>
            </div>
            <div className="preview-content">
                <div>
                <img src="img/sample-laporan.png"/>
                </div>
                <div>
                    <a href="#">
                        <i className="bx bxs-file-pdf"></i>
                    </a>
                </div>
            </div>
            <div className="preview-content">
                <div>
                <img src="img/sample-laporan.png"/>
                </div>
                <div>
                    <a href="#">
                        <i className="bx bxs-file-pdf"></i>
                    </a>
                </div>
            </div>
            <div className="preview-content">
                <div>
                <img src="img/sample-laporan.png"/>
                </div>
                <div>
                    <a href="#">
                        <i className="bx bxs-file-pdf"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</>
  )
}
