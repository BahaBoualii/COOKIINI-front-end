import React, { useState } from "react";
import Footer from "../footer";
import "./plans12.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PricingCard from "./pricingcard";
import Meals from "./meals";
import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form, Image } from "react-bootstrap";
import MealImage from "../assets/meal.png";

/*
    Fetch data from the DB 
    Everything is statics
*/

const MyRecipesTemplate = (props) => {
  const progress = props.progress;
  let progressColor = "";
  let progressState = "";
  if (progress == "pending") {
    progressColor = "Blue";
    progressState = "Pending";
  } else if (progress == "uploaded") {
    progressColor = "green";
    progressState = "Uploaded";
  } else if (progress=="denied"){
    progressState = "Denied";
    progressColor = "red";
  }
  return (
    <Row className="mt-3 gx-3 my-2 py-1" style={{ display: "" }}>
      <Col style={{ display: "flex" }}>
        <Container>
          <Row>
            <Col>
              <Image
                src={MealImage}
                style={{ height: "175px", width: "175px" }}
                className="my-1 "
              />
            </Col>
            <Col className="mt-3 py-3">
              <p className="">{props.name}</p>
              <p style={{fontSize:"11px"}}>
                <span className="fw-bolder">Submission date : </span>
                {props.date}
              </p>
              <p>
                <span style={{border:"1px black solid",borderRadius:"15px",fontSize:"10px",marginRight:"3px"}} className="px-1 py-1">Category</span>
                <span style={{border:"1px black solid",borderRadius:"15px",fontSize:"10px",marginRight:"3px"}} className="px-1 py-1">Category</span>
                <span style={{border:"1px black solid",borderRadius:"15px",fontSize:"10px"}} className="px-1 py-1">Category</span>
              
              </p>
              {/* <span>
                Category
              </span> */}
            </Col>
          </Row>
        </Container>
      </Col>
      <Col style={{}} className="my-3" style={{alignContent:"center"}}>
        <p style={{ color: progressColor }} className="fw-bold mt-3">
          {progressState}
        </p>{" "}
        <p className="">
            {props.uploadDate}
        </p>
      </Col>
      <Col
        className="fw-bolder justify-content-end d-none d-md-block"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p style={{ color: "" }} className="fw-normal mt-3 py-3">
          {props.details}
        </p>
      </Col>
      <hr />
    </Row>
  );
};
export default MyRecipesTemplate;
