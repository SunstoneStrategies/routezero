import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/us-albers.json";

const containerStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
  ,backgroundColor:"#f3e9b4"
  
};

export default function UsMap() {
  return (
    <div style={containerStyle}>
       
        <ComposableMap
          projection="geoAlbersUsa"
          viewBox="-250 0 1260 600"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} 
                stroke="#0000"
                fill="#4C7A81"
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      
    </div>
  );
}
