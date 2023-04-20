import React, { useState } from "react";
import CityInfoCard from "./CityInfoCard";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/us-albers.json";

const containerStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f3e9b4",
};

export default function UsMap() {
  const [hoveredState, setHoveredState] = useState("");
  const coordinatedData = [
    {
      coordinates: [-79.995888, 40.440624],
      state: "Pittsburgh, Pennsylvania",
    },
    {
      coordinates: [-76.609383, 39.299236],
      state: "Baltimore, Maryland",
    },
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
    {
      coordinates: [-111.651299, 35.198284],
      state: "Flagstaff, Arizona",
    },
    {
      coordinates: [-105.944183, 35.691544],
      state: "Santa Fe, NM",
    },
    {
      coordinates: [-94.578331, 39.099724],
      state: "Kansas City, MO",
    },
    {
      coordinates: [-88.150558, 41.520557],
      state: "Joliet, IL",
    },
  ];
  const handleStateLeave = () => {
    setHoveredState("");
  };

  return (
    <div style={containerStyle}>
      <ComposableMap projection="geoAlbersUsa" viewBox="-150 0 1100 600">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#4C7A81"
                stroke="#f3e9b4"
                strokeWidth={2}
                // onMouseEnter={() => {
                //   setHoveredState(geo.properties);
                // }}
                // onMouseLeave={handleStateLeave}
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

        {coordinatedData &&
          coordinatedData.map(({ state, coordinates }) => (
            <Marker
              key={state}
              coordinates={coordinates}
              onMouseEnter={() => {
                setHoveredState(state);
                console.log("aubair", hoveredState);
              }}
              onMouseLeave={handleStateLeave}
            >
              <circle r={8} fill="#F53" />
            </Marker>
          ))}
      </ComposableMap>
      {hoveredState !== "" ? <CityInfoCard /> : <div></div>}
    </div>
  );
}
