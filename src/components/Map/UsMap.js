import React, { useState } from "react";
import CityInfoCard from "./CityInfoCard";
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
  const handleButtonClicked = () => {
    setHoveredState("");
  };
  return geoUrl !== "" ? (
    <div className="container-map">
      <ComposableMap
        projection="geoAlbersUsa"
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
                setHoveredState(state);
              }}
              
              onMouseLeave={handleStateLeave}
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
  ) : (
    <div>Loading...</div>
  );
}
