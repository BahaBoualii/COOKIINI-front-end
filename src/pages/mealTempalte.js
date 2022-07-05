import React, { useTransition } from "react";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import foodImage from "../assets/meal.png";
import "../css/Meal/meal.css";
import caloriesOnHover from "../assets/caloriesOnHover.png";
import ratingOnHover from "../assets/ratingOnHover.png";
import timeOnHover from "../assets/timeOnHover.png";

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
  Card,
} from "react-bootstrap";

/*
  Everything is static
  Fetch data from the DB
*/

const MealTempate = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={{ display: "inline-flex", }}>
      <Card
        style={{
          display: "inline-flex",
          width: "260px",
          height: "260px",
          borderRadius: "15px",
          backgroundColor: "rgba(1, 146, 103, 0.2)",
        }}
        className="mx-md-2 mx-sm-1 mb-5"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div className="containerImg">
          <div style={{ marginTop: "-16px", marginLeft: "240px" }}>
            <div
              className="text-end "
              style={{
                visibility: isHovered === true ? "visible" : "hidden",
              }}
            >
              <Badge
                className="rounded-pill fw-bold addToBasketBtn fs-6 py-1 px-2 "
                bg="dark"
              >
                +
              </Badge>
            </div>
          </div>
          <Card.Img
            variant="top"
            // Image directory fetched from DB
            src={foodImage}
            className="justify-content-center fluid px-3 pb-4 image "
            style={{ height: "220px", width: "260px" }}
          />
          <div className="middle">
            <div className="text">
              <table>
                <tr>
                  <td>
                    <img src={timeOnHover} class="img-fluid px-2" />
                  </td>
                  <td className="text-start">
                    <b>{props.time}</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={caloriesOnHover} class="img-fluid px-2" />
                  </td>
                  <td class="text-start">
                    <b>{props.calories}Kcal</b>
                  </td>
                </tr>
                <tr>
                  <td>     
                    <img src={ratingOnHover} class="img-fluid px-2" />
                  </td>
                  <td class="text-start pt-1">
                    <b>
                      {props.rating}/5 <br />
                      <span style={{ fontSize: "10px", color: "black" }}>
                        (by {props.raters} users)
                      </span>
                    </b>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <p style={{
          marginTop:"-10px"
        }}>
          <span className="fw-bolder text-start me-5 ps-1">Delicious Meal</span>
          <span className="text-start ms-1 justify-content-start">10TND</span>
        </p>
      </Card>
    </div>
  );
};

export default MealTempate;
