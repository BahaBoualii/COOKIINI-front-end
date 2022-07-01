import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import foodImage from "../assets/meal.png"
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

const MealTempate = (props) => {
  return (
    <>
      <Card style={{ display: "inline-flex",width:"250px",heigt:"100px" ,borderRadius:"15px",backgroundColor:"rgba(1, 146, 103, 0.2)",}} className="mx-md-3 mx-sm-1 my-2">
        <Card.Img variant="top" src={foodImage} className="fluid px-3 py-3" style={{height:"250px",width:"250px"}}/>
        <Card.Body className="mh-25">
            <span className="fw-bolder text-start me-5">Delicious Meal</span>
            <span className="text-start ms-1">10TND</span>
        </Card.Body>
      </Card>
    </>
  );
};

export default MealTempate;
