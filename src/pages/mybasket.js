import React, { useState } from "react";
import Footer from "../footer";
import "./plans12.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PricingCard from "./pricingcard";
import Meals from "./meals";
import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";

/*
    Fetch data from the DB 
    Everything is statics
*/

const MyBasket = (props) => {
  return (
    <>
      <div className="mx-5 mb-5">
        <Container
          className="w-75 mt-5 px-5 py-4"
          style={{
            backgroundColor: "rgb(255, 249, 240)",
            borderRadius: "15px",
          }}
        >
          <p className="text-start fw-bold display-4 mb-5">My Basket</p>
          <Row className="mt-3  ">
            <Col style={{ display: "flex", alignItems: "center" }}>
              <p className="" style={{ fontSize: "20px" }}>
                Delicious Meal 1
              </p>
            </Col>
            <Col
              className="fw-bolder fs-5 justify-content-end"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p style={{ color: "#019267" }} className="">
                29.99 TND
              </p>
            </Col>
            <Col style={{}} className="text-end">
              <div>
                <Button
                  variant="secondary"
                  className="px-2 me-1 btn btn-transparent bg-transparent fw-bold"
                  style={{
                    color: "#019267",
                    border: "solid",
                    borderRadius: "75px",
                  }}
                  size="sm"
                >
                  +
                </Button>
                <InputGroup
                  size="sm"
                  className="mb-3 w-25"
                  style={{ display: "inline-flex", }}
                >
                  <Form.Control
                    aria-label="Small"
                    className="rounded-pill fw-bold text-center"
                    style={{backgroundColor:"rgba(1, 146, 103, 0.5)",color:"white"}}
                    defaultValue="1"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <Button
                  variant="secondary"
                  className="px-2 ms-1 btn btn-transparent bg-transparent fw-bold"
                  style={{
                    color: "#019267",
                    border: "solid",
                    borderRadius: "75px",
                  }}
                  size="sm"
                >
                  -
                </Button>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="mt-3">
            <Col style={{}}>
              <p
                className=""
                style={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Delicious Meal 2
              </p>
            </Col>
            <Col
              className="fw-bold fs-5 justify-content-end"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p style={{ color: "#019267" }}>29.99 TND</p>
            </Col>
            <Col style={{}} className="text-end">
              <div>
                <Button
                  variant="secondary"
                  className="px-2 me-1 btn bg-transparent fw-bold "
                  style={{
                    color: "#019267",
                    border: "solid",
                    borderRadius: "75px",
                  }}
                  size="sm"
                >
                  +
                </Button>
                <InputGroup
                  size="sm"
                  className="mb-3 w-25"
                  style={{ display: "inline-flex", }}
                >
                  <Form.Control
                    aria-label="Small"
                    className="rounded-pill fw-bold text-center"
                    style={{backgroundColor:"rgba(1, 146, 103, 0.5)",color:"white"}}
                    defaultValue="1"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <Button
                  variant="secondary"
                  className="px-2 ms-md-1 ms-sm-none btn btn-transparent bg-transparent fw-bold"
                  style={{
                    color: "#019267",
                    border: "solid",
                    borderRadius: "75px",
                  }}
                  size="sm"
                >
                  -
                </Button>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="mt-3">
            <Col style={{ display: "flex", alignItems: "center" }}>
              <p className="fw-bold fs-1" style={{ fontSize: "40px" }}>
                Total
              </p>
            </Col>
            <Col
              className="fw-bold justify-content-end"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p style={{ color: "#019267" }} className="fs-4 ">
                49.98 TND
              </p>
            </Col>
            <Col style={{}} className="text-end">
              <Button
                variant="secondary"
                className="px-5 py-2 btn btn-transparent bg-transparent fw-bold text-center fs-3"
                style={{
                  color: "#019267",
                  border: "solid",
                  borderRadius: "25px",
                }}
                size="md  "
              >
                Next
                <br />
                step
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default MyBasket;
