import React, { useState } from "react";
import Footer from "../footer";
import "./plans12.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PricingCard from "./pricingcard";
import Meals from "./meals";
import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
let stateColor = "";

/*
    Fetch data from the DB 
    Everything is statics
*/


const OrderTemplate = (props) => {
  const progress = props.progress;
  let progressColor = "";
  let progressState = "";
  if (progress.toLowerCase() === "p") {
    progressColor = "red";
    progressState = "In progress"
  }
  else if (progress.toLowerCase() === "d") {
    progressColor = "blue";
    progressState = "Delivered"
  }
  else{
    progressState = "Cancelled"
    progressColor = "black";
  }
  return (
    <Row className="mt-3">
      <Col style={{ display: "flex", alignItems: "center" }}>
        <p className="fs-3" style={{ fontSize: "20px" }}>
          {props.name}
        </p>
      </Col>
      <Col
        className="fw-bolder fs-5 justify-content-end"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p style={{ color: "#019267" }} className="">
          {props.price}
        </p>
      </Col>
      <Col style={{}} className="text-end">
        <p style={{color:progressColor}} className="fw-bold">{progressState}</p>
        <p className="px-1">{props.date}</p>
      </Col>
      <hr />
    </Row>
  );
};
export default OrderTemplate;
