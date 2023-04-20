import React from "react";
import companyLogo from "./Images/zero.png";

export default function CityInfoCard(props) {
  return (
    <div className="card" style={{ position: "absolute" }}>
      <div className="card" style={{ width: "16rem" }}>
        <img className="card-img-top " src={companyLogo} alt="carddetail" />
        <div className="card-body ">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text" >
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" className="btn btn-primary">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
