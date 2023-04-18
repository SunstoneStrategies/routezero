import React from "react";
import "../Header/style.css"; 

export default function Header() {
  return (
    <>
      <div class="hero-image">
        <div class="hero-text">
          <h1  >I am Jane Doe</h1>
          <h3>And I'm a Photographer</h3>
          <button>Hire me</button>
        </div>
      </div>
      {/* <div
        style={{
          backgroundColor: "white",
          height: "600px",
          color: "#689DAA",
          fontSize: "24px",
          lineHeight: "30px",
          wordWrap: "break-word",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div class="col" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "0px" }}>
            <h1 style={{ fontSize: "90px" }}>Route Zero</h1>
          </div>
          <div
            class="row"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <div style={{ marginRight: "10px", fontSize: "30px" }}>
              <h1 style={{ fontSize: "90px" }}>Relay</h1>
            </div>
            <div
              style={{
                backgroundColor: "#f5b400",
                borderRadius: "30%",
                color: "#ffffff",
                width: "150px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "29px",
                padding: "5px",
                // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
              }}
            >
              2023
            </div>
          </div>
          <div>
            <div
              style={{
                textAlign: "right",
                margin: "50px",
                marginBottom: "0px",
              }}
            >
              Charging Ahead
            </div>
            <div
              style={{
                textAlign: "right",
                margin: "50px",
                marginBottom: "0px",
              }}
            >
              to a zero emission
            </div>
            <div
              style={{
                textAlign: "right",
                margin: "50px",
                marginBottom: "0px",
              }}
            >
              Transportation
            </div>
            <div
              style={{
                textAlign: "right",
                margin: "50px",
                marginBottom: "0px",
              }}
            >
              Feature
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
