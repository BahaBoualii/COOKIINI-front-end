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
  const [initialValue, setInitialValue] = useState("1");
  return (
    <Row className="mt-3">
      <Col style={{ display: "flex", alignItems: "center" }}>
        <p className="" style={{ fontSize: "20px" }}>
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
            onClick={setInitialValue(initialValue + 1)}
          >
            +
          </Button>
          <InputGroup
            size="sm"
            className="mb-3 w-25"
            style={{ display: "inline-flex" }}
          >
            <Form.Control
              aria-label="Small"
              className="rounded-pill fw-bold text-center"
              style={{
                backgroundColor: "rgba(1, 146, 103, 0.5)",
                color: "white",
              }}
              defaultValue={initialValue}
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
      <hr />
    </Row>
  );
};
export default BasketElementTemplate;
