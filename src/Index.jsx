import React from "react";
import { Link } from 'react-router-dom';
export function Index() {
  return (
    <>
        <div className="home">
            <div className="form">
                <h1>Login / Daftar</h1>
                <div className="input-user">
                    <input type="text" />    
                    <input type="password" />    
                </div>    
                <div className="btn-proses">
                    <Link to="/dashboard" type="button">Masuk</Link>
                    <Link to="/regis" type="button">Daftar</Link>
                </div>
            </div>
        </div>
    </>
    )
}
