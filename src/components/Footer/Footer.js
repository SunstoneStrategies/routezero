import React from 'react'
import { Card, CardContent, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Footer() {
  return (
     <>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5vh",
          marginBottom: "5vh",

          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5vh",
            marginBottom: "5vh",
            flexDirection: "column",
            alignItems: "center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            overflow: "hidden", 
            width: "90%",
            height: "30vh",
          }}
        >
          <div>
            <h3 style={{ color: "white", textAlign: "center" ,  fontFamily: 'Poppins',  }}>
              Want to learn more about Route Zero and find out if we’re <br /> going to
              be cruising through a city near you?
            </h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: "#FFA800", height: "60px", width: "200px" ,borderRadius: "20px"}}
                sx={{ height: "60px", width: "200px" }}
                
              >
                Email Us!
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="blockquote-footer"
        style={{ textAlign: "center", marginTop: "5vh", marginBottom: "15vh" }}
      >
        Route Zero Relay © 2023 . All rights reserved
      </footer>
     </>
  )
}
