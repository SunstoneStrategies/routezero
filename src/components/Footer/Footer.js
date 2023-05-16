import React from "react";
// import { Card, CardContent, Button, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
import "./style.css";

export default function Footer() {
  return (
    <>
      <div className="containerDiv">
        <div className="carddiv">
          <div
            className="btn btn-secondary button-style"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="mailto:info@rtzero.org, info@rtzero.org"
              style={{ color: "white", textDecoration: "none" }}
            >
              Email us!
            </a>
          </div>

          <h6
            className="text custom-text"
            style={{ marginTop: "10px" }} // added margin top
          >
            Want to learn more about Route Zero and find out if we’re <br />{" "}
            going to be cruising through a city near you?
          </h6>
        </div>

        <footer className="footer">
          Address: 360 Grand Avenue, #187 Oakland, CA 94610-4840
        </footer>
      </div>
    </>
  );
}
