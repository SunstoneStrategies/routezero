import React from "react";
import "../Slider/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Carousel } from "react-bootstrap";
export default function Slider() {
  return (
    <div className="bgD">
      <div className="parent">
        <div className="sliderDiv1"></div>

        <div className="text-center sliderDiv2">
          <Carousel className="">
            <Carousel.Item>
              <div className="sliderItem">
                <p className="padding-100">
                  We need strong federal standards to reduce tailpipe emissions
                  and charge forward on a zero emission future!
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="sliderItem padding-100">
                <p className="padding-200">
                  Thanks to historic investments in charging infrastructure,
                  battery manufacturing, recent commitments from automakers, and
                  tax incentives for consumers to make the transition to
                  electric and hybrid vehicles, the United States is on a path
                  to a zero emission transportation future.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="sliderItem">
                <p className="padding-100">
                  Join us this spring on Route Zero as we make stops from
                  California to Washington, D.C. to raise awareness about the
                  importance of reducing tailpipe emissions to protect public
                  health, address the climate crisis, and provide consumer
                  savings.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
