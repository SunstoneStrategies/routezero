import React from "react";
import "../Slider/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Carousel } from "react-bootstrap";
export default function Slider() {
  return (
    <div className="bgD">
      <Row className="d-flex align-items-center justify-content-center">
        <Col className="text-center">
          <div className="sliderDiv1"></div>
        </Col>

        <Col className="text-center">
          <Carousel>
            <Carousel.Item>
              <div
                style={{
                  backgroundColor: "#689DAA",
                  borderRadius: "20px",
                  padding: "10px",
                  height: "40vh",
                  color: "#FFFFFF",
                }}
              >
                <Carousel.Caption>
                  <p>
                    We need strong federal standards to reduce tailpipe
                    emissions and charge forward on a zero emission future!
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  backgroundColor: "#669DA6",
                  borderRadius: "10px",
                  padding: "10px",
                  height: "40vh",
                  color: "#FFFFFF",
                }}
              >
                <Carousel.Caption>
                  <p>
                    Thanks to historic investments in charging infrastructure,
                    battery manufacturing, recent commitments from automakers,
                    and tax incentives for consumers to make the transition to
                    electric and hybrid vehicles, the United States is on a
                    path to a zero emission transportation future.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  backgroundColor: "#689DAA",
                  borderRadius: "10px",
                  padding: "10px",
                  height: "40vh",
                  color: "#FFFFFF",
                }}
              >
                <Carousel.Caption>
                  <p>
                    Join us this spring on Route Zero as we make stops from
                    California to Washington, D.C. to raise awareness about the
                    importance of reducing tailpipe emissions to protect public
                    health, address the climate crisis, and provide consumer
                    savings.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}
