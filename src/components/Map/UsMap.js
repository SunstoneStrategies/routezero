import React, { useState } from "react";
import CityInfoCard from './CityInfoCard'
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
  const [hoveredState, setHoveredState] = useState(false);

  const handleStateEnter = () => {
    setHoveredState(true);
  };
  const handleStateLeave = () => {
    setHoveredState(false);
  };

  return (
    <div style={containerStyle}>
      <ComposableMap projection="geoAlbersUsa" viewBox="-250 0 1260 600">
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
        <Marker
          coordinates={[-74.006, 40.7128]}
          onMouseEnter={handleStateEnter}
          onMouseLeave={handleStateLeave}
        >
          <circle r={8} fill="#F53" />
        </Marker>
      </ComposableMap>
      {hoveredState && <CityInfoCard/>}
    </div>
  );
}
