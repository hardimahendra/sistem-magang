import React from "react";

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
                    <a href="/dashboard" type="button">Masuk</a>
                    <a href="/regis" type="button">Daftar</a>
                </div>
            </div>
        </div>
    </>
    )
}
