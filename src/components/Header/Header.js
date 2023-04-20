import React from "react";
import "../Header/style.css";

export default function Header() {
  return (
    <>
      <div className="fcontainer">
        <div className="fitem item1">
          <div className="item1Child1">
            <div className="item1-child1-kid1">
              <h1 className="text1">ROUTE ZERO</h1>
            </div>
            <div className="item1-child1-kid2">
              <h1 className="item1text2text1">RELAY</h1>
              <div className="rounded-div">
                <p className="centered-text">2023</p>
              </div>
            </div>
          </div>

          <div className="item1Child2">
            <h5 className="text2">
              Charging Ahead to a Zero Emission <br /> Transportation Feature
            </h5>
          </div>
        </div>

        <div className="fitem item2"> </div>
      </div>
    </>
  );
}

// <div className="sub-hero-image">

//        <h1 className="text1">
//          ROUTE ZERO
//          <br />
//          <div className="inline-container">
//            <span>Relay</span>
//            <div className="container">2023</div>
//          </div>
//        </h1>
//      </div>
//    </div>
//    <div style={{ display: "flex", alignItems: "center" }}>
//      <div
//        style={{
//          height: "100%",
//          display: "flex",
//          alignItems: "center",
//          flexGrow: 1,
//        }}
//      >
//        <div className="text2">
//          Charging Ahead <br /> to a Zero Emission <br /> Transportation{" "}
//          <br /> Feature
//        </div>
//      </div>
//      <div
//        style={{
//          height: "100%",
//          borderLeft: "1px solid black",
//          margin: "0 0 0 20px",
//        }}
//      ></div>
