import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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

const Meals = () => {
  /*
        To Do :
            Fetch data from the DB as props for the Meals Template
    */
  return (
    <Container className="text-center">
      <Row fluid className="mt-5">
        <Col
          md={3}
          lg={3}
          style={{
            borderColor: "black",
            backgroundColor: "#FFF9F0",
            borderRadius: "15px",
          }}
          className="d-none d-md-block ps-4 me-3 pb-3 pt-3 pe-4 h-25 w-25"
        >
          <p className="fw-bolder fs-2 text-start " style={{ color: "#019267" }}>
            Categories
          </p>
          <ul type="none" className="text-start">
            
            <li className="fs-md-4">Category 1</li>
            <li className="fs-md-4">Category 2</li>
            <li className="fs-md-4">Category 3</li>
            <li className="fs-md-4">Category 4</li>
            <li className="fs-md-4">Category 5</li>
            
          </ul>
          <Form.Label className="fw-bolder" style={{ color: "#019267" }}>
            Price
          </Form.Label>
          <Form.Range />
          <div className="">
            <Row>
              <Col>
                <Form.Control type="text" id="" aria-describedby="" />
              </Col>
              _
              <Col>
                <Form.Control type="text" id="" aria-describedby=""/>
              </Col>
            </Row>
          </div>
          <Form.Label className="fw-bolder" style={{ color: "#019267" }}>
            Cooking Time
          </Form.Label>
          <Form.Range />
          <div className="">
            <Row>
              <Col className>
                <Form.Control type="text" id="" aria-describedby=""/>
              </Col>{" "}
              _
              <Col>
                <Form.Control type="text" id="" aria-describedby=""/>
              </Col>  
            </Row>
          </div>
        </Col>
        <Col
          md={7}
          lg={8}
          style={{ backgroundColor: "#FFF9F0", borderRadius: "15px" }}
          className="px-lg-1 px-md-1 ms-5"
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
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate /><MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate /><MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            <MealTempate />
            /* */
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Meals;
