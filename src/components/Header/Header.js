import React from "react";
import "../Header/style.css";

export default function Header() {
  return (
    <>
      <div className="hero-image">
        <div className="sub-hero-image">
          <div className="divCon">
            <h1 className="text1">
              ROUTE ZERO
              <br />
              <div className="inline-container">
                <span>Relay</span>
                <div className="container">2023</div>
              </div>
            </h1>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <div className="text2">
              Charging Ahead <br /> to a Zero Emission <br /> Transportation{" "}
              <br /> Feature
            </div>
          </div>
          <div
            style={{
              height: "100%",
              borderLeft: "1px solid black",
              margin: "0 0 0 20px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
