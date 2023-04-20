import React from "react";
import companyLogo from './Images/zero.png';

export default function CityInfoCard(props) {
  return (
    (
        <div className="card" style={{ position: "absolute" }}>
          <div class="card" style={{width: "18rem"}}>
            <img className="card-img-top " src={companyLogo} alt="Card image cap" />
            <div className="card-body ">
              <h5 className="card-title texttitle">Special title treatment</h5>
              <p className="card-text" texttitle>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/" class="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>
      )
  );
}
