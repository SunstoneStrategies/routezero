import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./style.css";

export default function Footer() {
  return (
    <>
      <div className="containerDiv">
        <div className="carddiv">
        <button type="button" className="btn btn-secondary button-style">Learn more</button>

          <h6
            className="text custom-text"
            style={{ marginTop: "10px" }} // added margin top
          >
            Want to learn more about Route Zero and find out if we’re <br />{" "}
            going to be cruising through a city near you?
          </h6>
        </div>

        <footer className="footer">
          Route Zero Relay © 2023 . All rights reserved
        </footer>
      </div>
    </>
  );
}
