import React from "react";
import {Link} from "react-router-dom";
export function Regis() {
  return (
    <>
        <div className="regis">
            <div className="form">
                <h1>Daftar Akun</h1>
                <div className="input-user">
                    <input type="text" />    
                    <input type="password" />    
                </div>    
                <div className="btn-proses">
                    <Link to="/" type="button">Masuk</Link>
                </div>
            </div>
        </div>
    </>
  )
}
