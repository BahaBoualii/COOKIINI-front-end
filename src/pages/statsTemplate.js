import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import MealTempate from "./mealTempalte";
import MealImage from "../assets/meal.png";

const StatsTemplate = (props) => {
  return (
    <Row className=" py-3 py-1 ps-4" style={{ display: "" }}>
      <Col style={{ display: "flex" }}>
        <Container>
          <Row>
            <Col>
              <Image src={MealImage} className="my-1 " fluid />
            </Col>
            <Col className="pt-3">
              <p className="fs-3">{props.name}</p>
              <p style={{}} className="">
                <span className="fw-bolder">Uploaded: </span>
                {props.date}
              </p>
              <p>
                <span className="fw-bolder">Number of purchases: </span>
                {props.purchaseNumber}
              </p>
              <p
                className="py-2 px-2"
                style={{ backgroundColor: "#ECE9E5", borderRadius: "10px" }}
              >
                <span className="fw-bolder">Total income: </span>
                {props.income} TND
              </p>
            </Col>
          </Row>
        </Container>
      </Col>
      <Col className="my-3 pt-5" style={{ alignContent: "center" }}>
        <Rating
          initialValue={props.stars}
          className="pb-3 me-1"
          readonly="true"
          size="35px"
        />
        <span>(rated by : {props.rating})</span>
      </Col>
      
    </Row>
  );
};
export default StatsTemplate;
