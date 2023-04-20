import React from "react";
import "./style.css";
export default function Banner() {
  return (
    <div
      className="maincontainer"
      style={{ width: "100%", height: "30vh"  ,backgroundColor:"#f3e9b4"
    }}
    >
      <div className="row d-flex justify-content-end align-items-center align-self-center" >
        <div className="logoclass col-md-3 d-flex justify-content-end align-items-end align-self-end"></div>
        <div className="titleclass col-md-9 d-flex flex-column justify-content-center align-items-start">
          <div className="text-center">
            <h1 className="titletext d-flex justify-content-start align-items-start align-self-start">ROUTE ZERO</h1>
            <h3 className="subtitletext ">RELAY</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
