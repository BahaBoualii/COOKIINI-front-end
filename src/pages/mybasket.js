import React, { useState } from "react";
import Footer from "../footer";
import "./plans12.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PricingCard from "./pricingcard";
import Meals from "./meals";
import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import BasketElementTemplate from "./BasketElementTemplate";

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
          <BasketElementTemplate name={"Delicious meal 1"} price={"19.99TND"} number={"1"} peopleNbr={"2"}></BasketElementTemplate>
          <BasketElementTemplate name={"Delicious meal 2"} price={""} peopleNbr={"4"}></BasketElementTemplate>
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
              <p style= {{ color: "#019267" }} className="fs-4 ">
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
