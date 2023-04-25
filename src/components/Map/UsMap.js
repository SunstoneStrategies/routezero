import React, { useState } from "react";
import CityInfoCard from "./CityInfoCard";
import LALogo from "./Images/LA.png";
import KCLogo from "./Images/KC.png";

import PPLogo from "./Images/PP.png";

import DMLogo from "./Images/DM.png";

import WDLogo from "./Images/WD.png";
import { SVGImageElement } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/us-albers.json";

export default function UsMap() {
  const isMobile = document.documentElement.clientWidth <= 415;

  // console.log(isMobile);
  const LosAngelesCA = {
    stations: [
      {
        title: "Los Angeles, CA at Santa Monica Pier",
        description:
          "Route Zero is kicking off at the end of historic Route 66 in Santa Monica! What better way to charge ahead to a zero emissions future than with a nod to the history and nostalgia of Route 66?",
      },
      {
        title: "Flagstaff, Arizona",
        description:
          "The Route Zero Relay will be stopping in Arizona on our zero emission trek across the country. Strong cleaner cars standards will help reduce tailpipe pollution and protect the health of Arizonans and people all across the country.",
      }
      ,
      {
        title: "Santa Fe, NM",
        description:
          "Route Zero will be hitting Santa Fe to raise awareness about clean vehicles and the importance of strong policies to reduce tailpipe pollution and tackle the climate crisis.",
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
  const [hoveredState, setHoveredState] = useState("");
  const trailCoords = [
    [-118.243683, 34.052235],
    [-94.578331, 39.099724],
    [-83.045753, 42.331429],
    [-79.995888, 40.440624],
    [-77.007507, 38.900497],
  ];
  const coordinatedData = [
    {
      coordinates: [-79.995888, 40.440624],
      state: "Pittsburgh, Pennsylvania",
    },
    // {
    //   coordinates: [-76.609383, 39.299236],
    //   state: "Baltimore, Maryland",
    // },
    {
      coordinates: [-77.007507, 38.900497],
      state: "Washington, DC",
    },
    {
      coordinates: [-83.045753, 42.331429],
      state: "Detroit, Michigan",
    },
    {
      coordinates: [-118.243683, 34.052235],
      state: "Los Angeles, CA",
    },
    // {
    //   coordinates: [-111.651299, 35.198284],
    //   state: "Flagstaff, Arizona",
    // },
    // {
    //   coordinates: [-105.944183, 35.691544],
    //   state: "Santa Fe, NM",
    // },
    {
      coordinates: [-94.578331, 39.099724],
      state: "Kansas City, MO",
    },
    // {
    //   coordinates: [-88.150558, 41.520557],
    //   state: "Joliet, IL",
    // },
  ];
  const handleStateLeave = () => {
    setHoveredState("");
  };

  return geoUrl !== "" ? (
    <>
      <div className="container-map">
        <ComposableMap
          onClick={handleStateLeave}
          projection="geoAlbersUsa"
          style={{width:"100%"}}
          projectionConfig={{
            scale: 700,
          }}
        >
          {/* <ComposableMap projection="geoAlbersUsa" viewBox="-150 0 1100 600"> */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#4C7A81"
                  stroke="#f3e9b4"
                  strokeWidth={2}
                  style={{
                    default: {
                      fill: "#4C7A81",
                      outline: "#0000",
                      backgroundImage: "url('./Images/loc.png')",
                    },
                    hover: {
                      fill: "#E89725",
                      outline: "none",
                    },
                    pressed: { fill: "#02A" },
                  }}
                />
              ))
            }
          </Geographies>
          <Line
            coordinates={trailCoords}
            stroke="black"
            strokeWidth={2}
            strokeDasharray="9 9"
          />
          {coordinatedData &&
            coordinatedData.map(({ state, coordinates }) => (
              <Marker
                key={state}
                coordinates={coordinates}
                onMouseEnter={() => {
                  if(!isMobile){
                    setHoveredState(state);
                  }
                  
                }}
                onClick={handleStateLeave}
              >
                <g
                  fill="white"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
              </Marker>
            ))}
        </ComposableMap>
        {hoveredState !== "" ? (
          <CityInfoCard state={hoveredState} />
        ) : (
          <div></div>
        )}
      </div>

      {isMobile && (
        <>
          <div className="mobiletoshowLogo">
            <div className="card-container d-flex flex-wrap">
              {
                <div
                  className="card myclass"
                  
                >
                  <img className="card-img-top" src={LALogo} alt="carddetail" />
                  <div className="card-body">
                    <h5 className="card-title customcardtitle"  style={{fontWeight:"bold" }} >
                      {LosAngelesCA.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {LosAngelesCA.stations[0].description}
                    </p>
                    <h5 className="card-title customcardtitle" >
                    &#8226; {LosAngelesCA.stations[1].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {LosAngelesCA.stations[1].description}
                    </p>
                    <h5 className="card-title customcardtitle"  >
                    &#8226; {LosAngelesCA.stations[2].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {LosAngelesCA.stations[2].description}
                    </p>
                    {/* <a
                      href="/"
                      className="btn btn-primary btnmyclass"
                      
                    >
                      Learn more
                    </a> */}
                  </div>
                </div>
              }
            </div>
            <div className="card-container d-flex flex-wrap">
              {
                <div
                  className="card myclass"
                  
                >
                  <img className="card-img-top" src={KCLogo} alt="carddetail" />
                  <div className="card-body">
                  <h5 className="card-title customcardtitle"  style={{fontWeight:"bold" }} >
                      {KansasCityMO.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {KansasCityMO.stations[0].description}
                    </p>
                    <h5 className="card-title customcardtitle" style={{ color: "#E89725" }}>
                    &#8226; {KansasCityMO.stations[1].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {KansasCityMO.stations[1].description}
                    </p>
                    {/* <a
                      href="/"
                      className="btn btn-primary btnmyclass"
                      
                    >
                      Learn more
                    </a> */}
                  </div>
                </div>
              }
            </div>

            <div className="card-container d-flex flex-wrap">
              {
                <div
                  className="card myclass"
                  
                >
                  <img className="card-img-top" src={DMLogo} alt="carddetail" />
                  <div className="card-body">
                  <h5 className="card-title customcardtitle"  style={{fontWeight:"bold" }} >
                      {DetroitMichigan.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {DetroitMichigan.stations[0].description}
                    </p>
                    {/* <a
                      href="/"
                      className="btn btn-primary btnmyclass"
                      
                    >
                      Learn more
                    </a> */}
                  </div>
                </div>
              }
            </div>
            <div className="card-container d-flex flex-wrap">
              {
                <div
                  className="card myclass"
                  
                >
                  <img className="card-img-top" src={PPLogo} alt="carddetail" />
                  <div className="card-body">
                  <h5 className="card-title customcardtitle"  style={{fontWeight:"bold" }} >
                      {PittsburghPennsylvania.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {PittsburghPennsylvania.stations[0].description}
                    </p>

                    <h5 className="card-title customcardtitle" style={{ color: "#E89725" }}>
                    &#8226; {PittsburghPennsylvania.stations[1].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {PittsburghPennsylvania.stations[1].description}
                    </p>
                    {/* <a
                      href="/"
                      className="btn btn-primary btnmyclass btnmyclass"
                       
                    >
                      Learn more
                    </a> */}
                  </div>
                </div>
              }
            </div>

            <div className="card-container d-flex flex-wrap">
              {
                <div
                  className="card myclass"
                  
                >
                  <img className="card-img-top" src={WDLogo} alt="carddetail" />
                  <div className="card-body">
                  <h5 className="card-title customcardtitle"  style={{fontWeight:"bold" }} >
                      {WashingtonDC.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {WashingtonDC.stations[0].description}
                    </p>
                    {/* <a
                      href="/"
                      className="btn btn-primary btnmyclass"
                      
                    >
                      Learn more
                    </a> */}
                  </div>
                </div>
              }
            </div>
          </div>
        </>
      )}
    </>
  ) : (
    <div>Loading...</div>
  );
}
