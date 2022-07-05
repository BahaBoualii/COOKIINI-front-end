import React, { useState } from "react";
import Footer from "../footer";
import "./plans12.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PricingCard from "./pricingcard";
import Meals from "./meals";
import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
const BasketElementTemplate = (props) => {
  return (
    <Row className="mt-3">
      <Col style={{ display: "flex", alignItems: "center" }}>
        <p className="" style={{ fontSize: "28px" }}>
          {props.name}
        </p>
      </Col>
      <Col
        className="fw-bolder fs-5 justify-content-end"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p style={{ color: "#019267" }} className="fs-4">
          {props.price}
        </p>
      </Col>
      <Col style={{}} className="text-end">
        <p className="fs-4">for <span className="fw-bolder">{props.peopleNbr}</span>  people</p>
      </Col>
      <hr />
    </Row>
  );
};
export default BasketElementTemplate;
