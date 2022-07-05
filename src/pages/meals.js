import React from "react";
import { PolymerElement, html } from "@polymer/polymer";
import "paperwave-range-slider/paperwave-range-slider.js";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Rating } from "react-simple-star-rating";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Checkbox,
  Radio,
  Button,
  Form,
  ButtonToolbar,
} from "react-bootstrap";
import MealTempate from "./mealTempalte";

const Category = (props) => {
  return (
    <Form.Check
      inline
      label={props.categName}
      name={props.categName}
      type="checkbox"
      id={props.categName}
      style={{ color: "#019267" }}
      className="fs-md-5 fs-sm-6"
    />
  );
};

const Meals = () => {
  /*
          Everything is statc      
          Fetch data from the DB as props for the Meals Template
  */

  //To do :
  //planChosen === true ? don't display the price : display the price
  return (
    <Container className="text-center justify-content-center">
      <Row fluid className="mt-5 sticky ">
        <Col
          sticky="top"
          md={3}
          lg={2}
          style={{
            borderColor: "black",
            backgroundColor: "#FFF9F0",
            borderRadius: "15px",
            width: "18%",
          }}
          className="d-none d-xl-block ms-5 me-5 pb-3 pt-3 h-25 text-start w-md-50 pe-md-5"
        >
          <h2
            className="text-start ms-md-2 fw-bolder "
            style={{ color: "#019267" }}
          >
            Categories
          </h2>
          <ul type="none" className="mt-2 fs-xxl-5 me-xxl-3">
            <li>
              <Category categName="Category 1" />
            </li>
            <li>
              <Category categName="Category 2" />
            </li>
            <li>
              <Category categName="Category 3" />
            </li>
            <li>
              <Category categName="Category 4" />
            </li>
            <li>
              <Category categName="Category 5" />
            </li>
            <li>
              <Category categName="Category 6" />
            </li>
          </ul>
          <p
            style={{ color: "#019267" }}
            className="fs-2 fw-bolder ms-md-2 d-none d-xxl-block"
          >
            Rating
            <span className="py-5">
              <Rating
                step="0.5"
                className="bg-transparent"
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
                transition={true}
                allowHalfIcon={true}
                tooltipDefaultText={true}
              />
            </span>
          </p>
          <p
            className="fs-2 fw-bolder ms-md-2 mt-3 d-none d-xxl-block"
            style={{ color: "#019267" }}
          >
            Price
            <span>
              <paperwave-range-slider
                id="priceSilder"
                min="0"
                max="300"
                lowValue="30"
                highValue="90"
                minInterval="20"
                pin
              ></paperwave-range-slider>
            </span>
          </p>
          <p
            className="fs-2 fw-bolder ms-md-2 mt-3 d-none d-xxl-block"
            style={{ color: "#019267" }}
          >
            Cooking time
            <span>
              <paperwave-range-slider
                id="timeSilder"
                min="0"
                max="300"
                lowValue="30"
                highValue="90"
                minInterval="20"
                pin
              ></paperwave-range-slider>
            </span>
          </p>
        </Col>
        <Col
          xl={8}
          md={8}
          lg={8}
          style={{ backgroundColor: "#FFF9F0", borderRadius: "15px" }}
          className="px-lg-1 px-md-1 ms-md-3"
        >
          <>
            <div className="text-end d-flex justify-content-end mt-1 me-1">
              <Form.Select aria-label="" className="w-25 text-left">
                <option>Sort by: Lowest price</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Form.Select>
            </div>
          </>
          <br />
          <div className="text-center px-lg-1 ">
            <MealTempate
              calories="450"
              raters="3520"
              rating="4.5"
              time="30 min"
            />
            <MealTempate
              calories="450"
              raters="3520"
              rating="4.5"
              time="30 min"
            />
            <MealTempate
              calories="450"
              raters="3520"
              rating="4.5"
              time="30 min"
            />
            <MealTempate
              calories="450"
              raters="3520"
              rating="4.5"
              time="30 min"
            />
            <MealTempate
              calories="450"
              raters="3520"
              rating="4.5"
              time="30 min"
            />
            <MealTempate
              calories="450"
              raters="3520"
              rating="4.5"
              time="30 min"
            />
            <MealTempate
              calories="450"
              raters="3520"
              rating="4.5"
              time="30 min"
            />
            <MealTempate
              calories="450"
              raters="3520"
              rating="4.5"
              time="30 min"
            />
            <MealTempate
              calories="450"
              raters="3520"
              rating="4.5"
              time="30 min"
            />
            <MealTempate
              calories="450"
              raters="3520"
              rating="4.5"
              time="30 min"
            />
            <MealTempate
              calories="450"
              raters="3520"
              rating="4.5"
              time="30 min"
            />
            <MealTempate
              calories="450"
              raters="3520"
              rating="4.5"
              time="30 min"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Meals;
