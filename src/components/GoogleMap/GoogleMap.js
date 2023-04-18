import React from "react";
import GoogleMapComponent from "./GoogleMapComponent";

export default function GoogleMap() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding:'140px'
      }}
    >
      <GoogleMapComponent />
    </div>
  );
}
