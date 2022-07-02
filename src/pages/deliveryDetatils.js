import React, { useState } from "react";
import Footer from "../footer";
import "./plans12.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PricingCard from "./pricingcard";
import Meals from "./meals";
import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import { Map, Draggable, Marker } from "pigeon-maps";
import { MyMap } from "./Map";

/*
    Fetch data from the DB 
    Everything is Static
*/

const DeliveryDetails = (props) => {
  const [isMapClicked, setMapClicked] = useState(false);
  const handleClick = (event) => {
    setMapClicked(!isMapClicked);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="my-5 px-1 py-4 w-75 w-sm-100"
        style={{ backgroundColor: "#FFF9F0", borderRadius: "25px" }}
      >
        <p className=" display-5 fw-bold mb-5 text-center pb-3 px-5">
          You are just some steps away from confirming your order ...
        </p>
        <Container className="ms-2 ">
          <Row className="d-flex flex-wrap">
            <Col className="text-start ms-5">
              <p className="fs-4 text-start">
                Where should we deliver your food ?
              </p>
              <Form.Group className="mb-3 " controlId="">
                <Form.Control
                  type="text"
                  className="w-50 px-3"
                  placeholder="You can type your address"
                  style={{
                    backgroundColor: "rgba(1, 146, 103, 0.1)",
                    display: "inline-flex",
                    borderRadius: "15px",
                  }}
                />
                <span onClick={handleClick}>
                  {isMapClicked === true && <MyMap />}
                  {isMapClicked === false && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      className="ms-2 pb-2"
                      fill="#019267"
                      class="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  )}
                </span>
              </Form.Group>
            </Col>
            <Col className="text-start ms-5">
              <p className="fs-4 ps-sm-4">Confirm your phone number</p>
              <Form.Group className="mb-3 " controlId="">
                <Form.Control
                  type="text"
                  className="w-50 ps-sm-5 ms-sm-4"
                  placeholder=""
                  style={{
                    backgroundColor: "rgba(1, 146, 103, 0.1)",
                    display: "inline-flex",
                    borderRadius: "15px",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="d-flex flex-wrap">
            <Col className="ms-5">
              <p className="fs-4">When should we deliver your food ?</p>
              <Form.Group className="me-4 mb-3 " controlId="">
                <Form.Control
                  type="date"
                  className="w-50 px-3"
                  placeholder=""
                  style={{
                    backgroundColor: "rgba(1, 146, 103, 0.1)",
                    display: "inline-flex",
                    borderRadius: "15px",
                  }}
                />
                <span className="ms-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    className="ps-1 fw-bold"
                    fill="#019267"
                    class="bi bi-calendar4-week"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  </svg>
                </span>
              </Form.Group>
            </Col>
            <Col>
              <div className="mt-4 ms-4 ">
                <Button
                  variant="secondary"
                  className="px-4 py-2 btn btn-transparent bg-transparent fw-bold text-center fs-5 me-5 ms-4"
                  style={{
                    color: "#019267",
                    border: "solid",
                    borderRadius: "25px",
                  }}
                  size="md"
                >
                  Confirm your order
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      )
    </div>
  );
};

export default DeliveryDetails;
