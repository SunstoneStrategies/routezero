import React, { useState } from "react";

import mapData from "../../mapData.json";
import CityInfoCard from "./CityInfoCard";
import LALogo from "./Images/LA.png";
import KCLogo from "./Images/KC.png";
import GalleryPage from "./GalleryPage";
import PPLogo from "./Images/PP.png";
import DMLogo from "./Images/DM.png";
import "yet-another-react-lightbox/styles.css";
import J1 from "./Images/J1.png";
import J2 from "./Images/J2.png";
import J3 from "./Images/J3.png";
import J4 from "./Images/J4.png";
import J5 from "./Images/J5.png";
import J6 from "./Images/J6.png";
import J7 from "./Images/J7.png";
import J8 from "./Images/J8.png";
import J9 from "./Images/J9.png";
import J10 from "./Images/J10.png";
import J11 from "./Images/J11.png";
import J12 from "./Images/J12.png";
import J13 from "./Images/J13.png";
import AZ01 from "./Images/AZ01.png";
import AZ02 from "./Images/AZ02.png";
import AZ03 from "./Images/AZ03.png";
import AZ04 from "./Images/AZ04.png";
import AZ05 from "./Images/AZ05.png";
import AZ06 from "./Images/AZ06.png";
import AZ07 from "./Images/AZ07.png";
import AZ08 from "./Images/AZ08.png";
import AZ09 from "./Images/AZ09.png";
import AZ010 from "./Images/AZ010.png";
import AZ011 from "./Images/AZ011.png";
import AZ012 from "./Images/AZ012.png";
import AZ013 from "./Images/AZ013.png";
import AZ014 from "./Images/AZ014.png";
import AZ015 from "./Images/AZ015.png";
import AZ017 from "./Images/AZ017.png";
import AZ018 from "./Images/AZ018.png";
import AZ019 from "./Images/AZ019.png";
import AZ020 from "./Images/AZ020.png";
import AZ1 from "./Images/AZ1.png";
import AZ2 from "./Images/AZ2.png";
import AZ3 from "./Images/AZ3.png";
import AZ4 from "./Images/AZ4.png";
import WDLogo from "./Images/WD.png";
import AZ021 from "./Images/AZ021.png";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

import MyCarousel from "./MyCarousel";

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/us-albers.json";
const geoUrl = mapData;

export default function UsMap() {
  const J1Images = [J1, J2, J3, J4, J5, J6, J7, J8, J9, J10, J11, J12, J13];
  const AZ01Images = [
    AZ01,
    AZ02,
    AZ03,
    AZ04,
    AZ05,
    AZ06,
    AZ07,
    AZ08,
    AZ09,
    AZ010,
    AZ011,
    AZ012,
    AZ013,
    AZ014,
    AZ015,
    AZ017,
    AZ018,
    AZ019,
    AZ020,
  ];
  const NMImages = [AZ1, AZ2, AZ3, AZ4, AZ021];
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsMarkerClicked("");
  };
  const toggleShowImages = () => {
    setShowImages(!showImages);
  };
  const isMobile = document.documentElement.clientWidth <= 415;
  const LosAngelesCA = {
    stations: [
      {
        title: "Los Angeles, CA at Santa Monica Pier",
        description:
          "Route Zero is kicking off at the end of historic Route 66 in Santa Monica! What better way to charge ahead to a zero emissions future than with a nod to the history and nostalgia of Route 66?",
      },
    ],
  };
  const Ohio = {
    stations: [
      {
        title: "Cleveland OH ",
        description:
          "The Route Zero Relay will be stopping in Cleveland, OH on our zero emission trek across the country. Strong cleaner cars standards will help reduce tailpipe pollution and protect the health of the people of OH.",
      },
    ],
  };
  const Flagstaff = {
    stations: [
      {
        title: "Flagstaff, Arizona",
        description:
          "The Route Zero Relay will be stopping in Arizona on our zero emission trek across the country. Strong cleaner cars standards will help reduce tailpipe pollution and protect the health of Arizonans and people all across the country.",
      },
    ],
  };
  const SantaFe = {
    stations: [
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
    ],
  };

  const Joliet = {
    stations: [
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
    ],
  };
  const Baltimore = {
    stations: [
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
  const [showImages, setShowImages] = useState(false);

  const [hoveredState, setHoveredState] = useState("");
  const trailCoords = [
    [-118.243683, 34.052235],
    [-111.651299, 35.198284],
    [-105.944183, 35.691544],
    [-94.578331, 39.099724],
    [-89.242198, 39.744364],
    [-444.353266, 42.795402],
    [-442.770179, 40.329797],
    [-438.543454, 41.525032],
    [-76.609383, 39.299236],
    [-77.039726, 38.831149],
  ];
  const coordinatedData = [
    {
      coordinates: [-438.543454, 41.525032],
      state: "Pittsburgh, Pennsylvania",
    },
    {
      coordinates: [-76.609383, 39.299236],
      state: "Baltimore, Maryland",
    },
    {
      coordinates: [-77.039726, 38.831149],
      state: "Washington, DC",
    },
    {
      coordinates: [-444.353266, 42.795402],
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
    // {
    //   coordinates: [-94.578331, 39.099724],
    //   state: "Kansas City, MO",
    // },
    // {
    //   coordinates: [-98.20314200557293, 38.327227081669456],
    //   state: "Kansas City, MO",
    // },
    {
      coordinates: [-94.578331, 39.099724],
      state: "Missouri",
    },
    {
      coordinates: [-442.770179, 40.329797],
      state: "Ohio",
    },
    {
      coordinates: [-89.242198, 39.744364], //[-88.150558, 41.520557],
      state: "Joliet, IL",
    },
  ];
  const coordinatedDataStates = [
    {
      name: "Pennsylvania",
    },
    {
      name: "Maryland",
    },
    {
      name: "District of Columbia",
    },
    {
      name: "Michigan",
    },
    {
      name: "California",
    },
    {
      name: "Arizona",
    },
    {
      name: "New Mexico",
    },
    {
      name: "Kansas",
    },
    {
      name: "Missouri",
    },
    {
      name: "Ohio",
    },
    {
      name: "Illinois",
    },
  ];
  const [isMarkerClicked, setIsMarkerClicked] = useState("");
  const handleStateLeave = () => {
    setHoveredState("");
  };
  const handleStateLeaveandSetSlider = () => {};
  return geoUrl !== "" ? (
    <>
      <div className="container-map">
        <ComposableMap
          onClick={handleStateLeave}
          projection="geoAlbersUsa"
          style={{ width: "100%" }}
          projectionConfig={{
            scale: 700,
          }}
        >
          {/* <ComposableMap projection="geoAlbersUsa" viewBox="-150 0 1100 600"> */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const state = geo.properties.name;
                const IsMain = coordinatedDataStates.some((data) => {
                  return (
                    ("California" === state) |
                    ("Missouri" === state) |
                    ("Pennsylvania" === state) |
                    ("Michigan" === state) |
                    ("MO" === state)
                  );
                });
                const isHighlighted = coordinatedDataStates.some((data) => {
                  return data.name === state;
                });

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      IsMain ? "#D77358" : isHighlighted ? "orange" : "#669DA6"
                    }
                    stroke="#f3e9b4"
                    strokeWidth={2}
                    style={{
                      default: {
                        outline: "#0000",
                      },
                      hover: {
                        fill: IsMain
                          ? "#f56349"
                          : isHighlighted
                          ? "#eb8934"
                          : "#4C7A81",
                        outline: "none",
                      },
                      pressed: { fill: "#02A" },
                    }}
                  />
                );
              })
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
                  if (!isMobile) {
                    setHoveredState(state);
                  }
                }}
              >
                <>
                  {state === "Missouri" ? (
                    <image
                      style={{ position: "relative", top: "100px" }} //process.env.PUBLIC_URL +
                      href="https://rtzero.org/img/car.png"
                      x=" -32"
                      y=" -60"
                      width="55"
                      height="55"
                    />
                  ) : (
                    <div></div>
                  )}
                  {state === "Ohio" ||
                  state === "Joliet, IL" ||
                  state === "Flagstaff, Arizona" ||
                  state === "Santa Fe, NM" ? (
                    <g
                      fill="black"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      transform="translate(-12, -22)  scale(0.9)"
                    >
                      <circle cx="12" cy="10" r="1" fill="white" />{" "}
                      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 10.7z" />
                    </g>
                  ) : state === "Washington, DC" ? (
                    <text
                      fontStyle={{}}
                      textAnchor="middle"
                      y={3}
                      style={{
                        fontFamily: "system-ui",
                        fill: "black",
                        fontSize: 30,
                        color: "white",
                      }}
                    >
                      ★
                    </text>
                  ) : state === "Baltimore, Maryland" ? (
                    <g
                      fill="black"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      transform="translate(-12, -25)  scale(0.9)"
                    >
                      <circle cx="12" cy="10" r="1" fill="white" />{" "}
                      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 10.7z" />
                    </g>
                  ) : (
                    <g
                      fill="white"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      transform="translate(-12, -24)"
                    >
                      <circle cx="12" cy="10" r="3" fill="blue" />{" "}
                      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>
                  )}
                </>
              </Marker>
            ))}
        </ComposableMap>

        {hoveredState !== "" ? (
          <CityInfoCard
            state={hoveredState}
            gallery={() => {
              // setIsMarkerClicked(hoveredState);
              console.log(hoveredState + "clicked");
            }}
          />
        ) : (
          <div></div>
        )}
      </div>

      {isMobile && (
        <>
          <div className="mobiletoshowLogo">
            <div className="card-container d-flex flex-wrap">
              {
                <div className="card myclass">
                  {/* <img className="card-img-top" src={LALogo} alt="carddetail" /> */}
                  <iframe
                    src="https://player.vimeo.com/video/827442193?h=482758b9f1&autoplay=1"
                    width="100%"
                    height="200px"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="LA"
                  ></iframe>
                  <div className="card-body">
                    <h5
                      className="card-title customcardtitle"
                      style={{ fontWeight: "bold" }}
                    >
                      {LosAngelesCA.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {LosAngelesCA.stations[0].description}
                    </p>
                  </div>
                </div>
              }
            </div>
            <div className="card-container d-flex flex-wrap">
              {
                <div className="card myclass">
                  <MyCarousel Images={AZ01Images} />
                  <div className="card-body">
                    <h5
                      className="card-title customcardtitle"
                      style={{ fontWeight: "bold" }}
                    >
                      {Flagstaff.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {Flagstaff.stations[0].description}
                    </p>
                  </div>
                </div>
              }
            </div>
            <div className="card-container d-flex flex-wrap">
              {
                <div className="card myclass">
                  <MyCarousel Images={NMImages} />
                  <div className="card-body">
                    <h5
                      className="card-title customcardtitle"
                      style={{ fontWeight: "bold" }}
                    >
                      {SantaFe.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {SantaFe.stations[0].description}
                    </p>
                  </div>
                </div>
              }
            </div>
            <div className="card-container d-flex flex-wrap">
              {
                <div className="card myclass">
                  {/* <img className="card-img-top" src={KCLogo} alt="carddetail" /> */}
                  <iframe
                    src="https://player.vimeo.com/video/832408352?h=9fc0b6f61b&autoplay=1"
                    maxWidth="320px"
                    height="200px"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="LA"
                  ></iframe>
                  <div className="card-body">
                    <h5
                      className="card-title customcardtitle redColor"
                      style={{ fontWeight: "bold" }}
                    >
                      <span style={{ color: "orange" }}>
                        {" "}
                        {KansasCityMO.stations[0].title.substring(0, 12)}
                      </span>
                      <span style={{ color: "red" }}>
                        {" "}
                        {KansasCityMO.stations[0].title.substring(13, 15)}
                      </span>
                    </h5>

                    <p className="card-text customcardtext">
                      {KansasCityMO.stations[0].description}
                    </p>
                  </div>
                </div>
              }
            </div>
            <div className="card-container d-flex flex-wrap">
              {
                <div className="card myclass">
                  <MyCarousel Images={J1Images} />
                  <div className="card-body">
                    <h5
                      className="card-title customcardtitle redColor"
                      style={{ fontWeight: "bold" }}
                    >
                      <span style={{ color: "orange" }}>
                        {" "}
                        {Joliet.stations[0].title}
                      </span>
                    </h5>

                    <p className="card-text customcardtext">
                      {Joliet.stations[0].description}
                    </p>
                  </div>
                </div>
              }
            </div>
            <div className="card-container d-flex flex-wrap">
              {
                <div className="card myclass">
                  {/* <img className="card-img-top" src={DMLogo} alt="carddetail" /> */}
                  <iframe
                    src="https://player.vimeo.com/video/840225230?h=9fc0b6f61b&autoplay=1"
                    maxWidth="320px"
                    height="200px"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="LA"
                  ></iframe>
                  <div className="card-body">
                    <h5
                      className="card-title customcardtitle"
                      style={{ fontWeight: "bold" }}
                    >
                      {DetroitMichigan.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {DetroitMichigan.stations[0].description}
                    </p>
                  </div>
                </div>
              }
            </div>
            <div className="card-container d-flex flex-wrap">
              {
                <div className="card myclass">
                  <img className="card-img-top" src={PPLogo} alt="carddetail" />
                  <div className="card-body">
                    <h5
                      className="card-title customcardtitle"
                      style={{ fontWeight: "bold" }}
                    >
                      {PittsburghPennsylvania.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {PittsburghPennsylvania.stations[0].description}
                    </p>
                  </div>
                </div>
              }
            </div>
            <div className="card-container d-flex flex-wrap">
              {
                <div className="card myclass">
                  <div className="card-body">
                    <h5
                      className="card-title customcardtitle"
                      style={{ fontWeight: "bold" }}
                    >
                      {Baltimore.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {Baltimore.stations[0].description}
                    </p>
                  </div>
                </div>
              }
            </div>
            <div className="card-container d-flex flex-wrap">
              {
                <div className="card myclass">
                  <div className="card-body">
                    <h5
                      className="card-title customcardtitle"
                      style={{ fontWeight: "bold" }}
                    >
                      {Ohio.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {Ohio.stations[0].description}
                    </p>
                  </div>
                </div>
              }
            </div>
            <div className="card-container d-flex flex-wrap">
              {
                <div className="card myclass">
                  <img className="card-img-top" src={WDLogo} alt="carddetail" />
                  <div className="card-body">
                    <h5
                      className="card-title customcardtitle"
                      style={{ fontWeight: "bold" }}
                    >
                      {WashingtonDC.stations[0].title}
                    </h5>
                    <p className="card-text customcardtext">
                      {WashingtonDC.stations[0].description}
                    </p>
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
