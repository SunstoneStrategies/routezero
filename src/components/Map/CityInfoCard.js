import React from "react";
import LALogo from "./Images/LA.png";
import KCLogo from "./Images/KC.png";
import { Carousel } from "react-bootstrap";
import PPLogo from "./Images/PP.png";
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
import DMLogo from "./Images/DM.png";
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
import WDLogo from "./Images/WD.png";
import MyCarousel from "./MyCarousel";
import AZ1 from "./Images/AZ1.png";
import AZ2 from "./Images/AZ2.png";
import AZ3 from "./Images/AZ3.png";
import AZ4 from "./Images/AZ4.png";
import AZ021 from "./Images/AZ021.png";
import "./style.css";
export default function CityInfoCard(props) {
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
  const J1Images = [J1, J2, J3, J4, J5, J6, J7, J8, J9, J10, J11, J12, J13];
  const NMImages = [AZ1, AZ2, AZ3, AZ4, AZ021];
  const Ohio = {
    stations: [
      {
        title: "Cleveland OH ",
        description:
          "The Route Zero Relay will be stopping in Cleveland, OH on our zero emission trek across the country. Strong cleaner cars standards will help reduce tailpipe pollution and protect the health of the people of OH.",
      },
    ],
  };
  const LosAngelesCA = {
    stations: [
      {
        title: "Los Angeles, CA at Santa Monica Pier",
        description:
          "Route Zero is kicking off at the end of historic Route 66 in Santa Monica! What better way to charge ahead to a zero emissions future than with a nod to the history and nostalgia of Route 66?",
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
  return props.state === "Los Angeles, CA" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-121%, -48%)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "320px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {/* <img className="card-img-top" src={LALogo} alt="carddetail" /> */}
          <iframe
            src="https://player.vimeo.com/video/827442193?h=482758b9f1&autoplay=1"
            maxWidth="320px"
            height="200px"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="LA"
          ></iframe>

          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
            >
              {LosAngelesCA.stations[0].title}
            </h5>
            <p className="card-text" style={{ fontSize: "13px" }}>
              {LosAngelesCA.stations[0].description}
            </p>
          </div>
          <div className="tip"></div>
        </div>
      }
    </div>
  ) : props.state === "Flagstaff, Arizona" ? (
    <div
      onClick={props.gallery}
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-84%, -46%)" }}
    >
      <div
        className="card"
        style={{
          flex: "0 0 auto",
          margin: "10px",
          maxWidth: "320px",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        <MyCarousel Images={AZ01Images} />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
          >
            {Flagstaff.stations[0].title}
          </h5>
          <p className="card-text" style={{ fontSize: "13px" }}>
            {Flagstaff.stations[0].description}
          </p>
        </div>
        <div className="tip"></div>
      </div>
    </div>
  ) : props.state === "Santa Fe, NM" ? (
    <div
      onClick={props.gallery}
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-52%, -44%)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "320px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <MyCarousel Images={NMImages} />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
            >
              {SantaFe.stations[0].title}
            </h5>
            <p className="card-text" style={{ fontSize: "13px" }}>
              {SantaFe.stations[0].description}
            </p>
          </div>
          <div className="tip"></div>
        </div>
      }
    </div>
  ) : props.state === "Missouri" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate( 9%, -64%)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "320px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
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
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
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
            <p className="card-text" style={{ fontSize: "13px" }}>
              {KansasCityMO.stations[0].description}
            </p>
          </div>
          <div className="tip"></div>
        </div>
      }
    </div>
  ) : props.state === "Joliet, IL" ? (
    <div
      onClick={props.gallery}
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(37.5%, -65%)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "320px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <MyCarousel Images={J1Images} />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
            >
              <span> {Joliet.stations[0].title}</span>
            </h5>
            <p className="card-text" style={{ fontSize: "13px" }}>
              {KansasCityMO.stations[0].description}
            </p>
          </div>
          <div className="tip"></div>
        </div>
      }
    </div>
  ) : props.state === "Detroit, Michigan" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(61%, -88%)" }}
    >
      {
        <div
          className="card "
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "320px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
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
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
            >
              {DetroitMichigan.stations[0].title}
            </h5>
            <p className="card-text" style={{ fontSize: "13px" }}>
              {DetroitMichigan.stations[0].description}
            </p>
          </div>
          <div className="tip"></div>
        </div>
      }
    </div>
  ) : props.state === "Pittsburgh, Pennsylvania" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(91%, -83%)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "320px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {/* <img className="card-img-top" src={PPLogo} alt="carddetail" /> */}
          <iframe
            src="https://player.vimeo.com/video/850792817?h=9fc0b6f61b&autoplay=1"
            maxWidth="320px"
            height="200px"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="LA"
          ></iframe>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
            >
              {PittsburghPennsylvania.stations[0].title}
            </h5>
            <p className="card-text" style={{ fontSize: "13px" }}>
              {PittsburghPennsylvania.stations[0].description}
            </p>
          </div>
          <div className="tip"></div>
        </div>
      }
    </div>
  ) : props.state === "Baltimore, Maryland" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(103%, -105%)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "320px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {/* <img className="card-img-top" src={PPLogo} alt="carddetail" /> */}
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
            >
              {Baltimore.stations[0].title}
            </h5>
            <p className="card-text" style={{ fontSize: "13px" }}>
              {Baltimore.stations[0].description}
            </p>
          </div>
          <div className="tip"></div>
        </div>
      }
    </div>
  ) : props.state === "Ohio" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(64%, -95%)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "320px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
            >
              {Ohio.stations[0].title}
            </h5>
            <p className="card-text" style={{ fontSize: "13px" }}>
              {Ohio.stations[0].description}
            </p>
          </div>
          <div className="tip"></div>
        </div>
      }
    </div>
  ) : props.state === "Washington, DC" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(102%, -69%)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "320px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {/* <img className="card-img-top" src={WDLogo} alt="carddetail" /> */}
          <iframe
            src="https://player.vimeo.com/video/850793107?h=9fc0b6f61b&autoplay=1"
            maxWidth="320px"
            height="200px"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="LA"
          ></iframe>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
            >
              {WashingtonDC.stations[0].title}
            </h5>
            <p className="card-text" style={{ fontSize: "13px" }}>
              {WashingtonDC.stations[0].description}
            </p>
          </div>
          <div className="tip"></div>
        </div>
      }
    </div>
  ) : (
    <div></div>
  );
}
