import React from "react";
import LALogo from "./Images/LA.png";
import KCLogo from "./Images/KC.png";

import PPLogo from "./Images/PP.png";

import DMLogo from "./Images/DM.png";

import WDLogo from "./Images/WD.png";

import "./style.css";
export default function CityInfoCard(props) {
  const LosAngelesCA = {
    stations: [
      {
        title: "Monica Pier",
        description:
          "Route Zero is kicking off at the end of historic Route 66 in Santa Monica! What better way to charge ahead to a zero emissions future than with a nod to the history and nostalgia of Route 66?",
      },
      {
        title: "Flagstaff, Arizona",
        description:
          "The Route Zero Relay will be stopping in Arizona on our zero emission trek across the country. Strong cleaner cars standards will help reduce tailpipe pollution and protect the health of Arizonans and people all across the country.",
      },
    ],
  };
  const KansasCityMO = {
    stations: [
      {
        title: "Kansas City, MO",
        description:
          "Our Route Zero Relay team will be holding a press event and rally in Kansas City, MO in May with advocates, community members and elected leaders like Kansas City, MO’s Mayor Quinton Lucas!",
      },
      {
        title: "Joliet, IL",
        description:
          "We’re nearly halfway there! Joliet is quickly becoming a clean transportation hub with electric vehicle manufacturing facilities being planned in this region. The Route Zero Relay is stopping here to raise awareness about how zero emission vehicles can create jobs, boost our economy, and clean up our air.",
      },
    ],
  };

  const DetroitMichigan = {
    stations: [
      {
        title: "Detroit, Michigan",
        description:
          "Our relay wouldn’t be complete without a stop in Motor City!  Our Route Zero Relay team will be holding a press conference in Motown to celebrate the zero emission transportation revolution that is coming to  Detroit and across the region.",
      },
    ],
  };
  const PittsburghPennsylvania = {
    stations: [
      {
        title: "Pittsburgh, Pennsylvania",
        description:
          "We will be rallying for strong cleaner cars standards and a zero emission transportation future in Pittsburgh! Route Zero will be holding a press conference and rally to highlight the importance of public health protection, job creation, and consumer savings!.",
      },
      {
        title: "Baltimore, Maryland",
        description:
          "Our last stop on the way to the capitol is Charm City, where we will be advocating for a zero emission transportation sector to clean up our air and fight the climate crisis.",
      },
    ],
  };
  const WashingtonDC = {
    stations: [
      {
        title: "Washington, DC",
        description:
          "The culmination of the Route Zero Relay trip across the country, will be at EPA headquarters in DC where we will deliver comments from people all across the country who want the strongest standards possible to put us on the route to Zero Emissions!",
      },
    ],
  };
  return props.state === "Los Angeles, CA" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(50%, 10px)" }}
    >
      {
    
      (
        <>
          {" "}
          <div className="card-container flexconY">
            <div className=" flexcon ">
              <div className="row1logo bgimageLA"></div>
              <div className="row1station1">
                <h6 className="card-title" style={{ color: "#E89725" }}>
                  &#8226; {LosAngelesCA.stations[1].title}
                </h6>
                <p
                  className="card-text"
                  style={{
                    color: "#555555",
                    textAlign: "left",
                    fontSize: "14px",
                    paddingTop: "10px",
                  }}
                >
                  {LosAngelesCA.stations[1].description}
                </p>
              </div>
            </div>
            <div className=" flexcon">
              <div className="row1station2">
                <h6 className="card-title" style={{ color: "#E89725" }}>
                  &#8226; {LosAngelesCA.stations[0].title}
                </h6>
                <p
                  className="card-text"
                  style={{
                    color: "#555555",
                    textAlign: "left",
                    fontSize: "14px",
                    paddingTop: "10px",
                  }}
                >
                  {LosAngelesCA.stations[0].description}
                </p>
              </div>
              <div className="row1station3"> </div>
            </div>
            {/* <a
              href="/"
              className="btn btn-primary"
              style={{ margin: "20px", backgroundColor: "#E89725" }}
            >
              Learn more
            </a> */}
          </div>
        </>
      )}
    </div>
  ) : props.state === "Kansas City, MO" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-50%, 10px)" }}
    >
      {
      
      (
        <>
          {" "}
          <div className="card-container flexconY ">
            <div className=" flexcon">
              <div className="row1logo bgimageKC"></div>
              <div className="row1station1">
              
                <h6 className="card-title" style={{ color: "#E89725" }}>
                  &#8226; {KansasCityMO.stations[1].title}             
                </h6>
                
                <p
                  className="card-text"
                  style={{
                    color: "#555555",
                    textAlign: "left",
                    fontSize: "14px",
                    paddingTop: "10px",
                  }}
                >
                  {KansasCityMO.stations[1].description}
                </p>
              </div>
            </div>
            <div className=" flexcon">
              <div className="row1station2">
                
                <h6 className="card-title" style={{ color: "#E89725" }}>
                  &#8226; {KansasCityMO.stations[0].title} 
                </h6>
                
                <p
                  className="card-text"
                  style={{
                    color: "#555555",
                    textAlign: "left",
                    fontSize: "14px",
                    paddingTop: "10px",
                  }}
                >
                  {KansasCityMO.stations[0].description}
                </p>
              </div>
              {/* <div className="row1station3"> </div> */}
            </div>
            {/* <a
              href="/"
              className="btn btn-secondary"
              style={{ margin: "20px", backgroundColor: "#E89725" }}
            >
              Learn more
            </a> */}
          </div>
        </>
      )}
    </div>
  ) : props.state === "Detroit, Michigan" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-50%, 10px)" }}
    >
      { (
        <div
          className="card "
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "350px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <img className="card-img-top" src={DMLogo} alt="carddetail" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#E89725" }}>
              {DetroitMichigan.stations[0].title}
            </h5>
            <p className="card-text">
              {DetroitMichigan.stations[0].description}
            </p>
            {/* <a
              href="/"
              className="btn btn-primary"
              style={{
                display: "block",
                marginLeft: "70px",
                marginRight: "70px",
                backgroundColor: "#E89725",
              }}
            >
              Learn more
            </a> */}
          </div>
        </div>
      ) }
    </div>
  ) : props.state === "Pittsburgh, Pennsylvania" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-50%, 10px)" }}
    >
      {   (
        <>
          {" "}
          <div className="card-container flexconY">
            <div className=" flexcon">
              <div className="row1logo bgimagePP"></div>
              <div className="row1station1">
                <h6 className="card-title" style={{ color: "#E89725" }}>
                  &#8226; {PittsburghPennsylvania.stations[1].title}
                </h6>
                <p
                  className="card-text"
                  style={{
                    color: "#555555",
                    textAlign: "left",
                    fontSize: "14px",
                    paddingTop: "10px",
                  }}
                >
                  {PittsburghPennsylvania.stations[1].description}
                </p>
              </div>
            </div>
            <div className=" flexcon">
              <div className="row1station2">
                <h6 className="card-title" style={{ color: "#E89725" }}>
                  &#8226; {PittsburghPennsylvania.stations[0].title}
                </h6>
                <p
                  className="card-text"
                  style={{
                    color: "#555555",
                    textAlign: "left",
                    fontSize: "14px",
                    paddingTop: "10px",
                  }}
                >
                  {PittsburghPennsylvania.stations[0].description}
                </p>
              </div>
              {/* <div className="row1station3"> </div> */}
            </div>
            {/* <a
              href="/"
              className="btn btn-secondary"
              style={{ margin: "20px", backgroundColor: "#E89725" }}
            >
              Learn more
            </a> */}
          </div>
        </>
      )}
    </div>
  ) : props.state === "Washington, DC" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-50%, 10px)" }}
    >
      { (
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "350px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <img className="card-img-top" src={WDLogo} alt="carddetail" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#E89725" }}>
              {WashingtonDC.stations[0].title}
            </h5>
            <p className="card-text">{WashingtonDC.stations[0].description}</p>
            {/* <a
              href="/"
              className="btn btn-primary"
              style={{
                display: "block",
                marginLeft: "70px",
                marginRight: "70px",
                backgroundColor: "#E89725",
              }}
            >
              Learn more
            </a> */}
          </div>
        </div>
      ) 
            }

    </div>
  ) : (
    <div></div>
  );
}
