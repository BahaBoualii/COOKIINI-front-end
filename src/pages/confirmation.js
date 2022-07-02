import React, { useState } from "react";
import Footer from "../footer";
import "./plans12.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PricingCard from "./pricingcard";
import Meals from "./meals";
import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import DeliveryTemplate from "./BasketElementTemplate";
import OrderTemplate from "./orderTemplate";

/*
    Fetch data from the DB 
    Everything is statics
*/

const Confirmation = (props) => {
  return (
    <div>
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="mx-5 my-5 text-center w-75"
          style={{ backgroundColor: "#FFF9F0", borderRadius: "15px" }}
        >
          <h1 className="fw-bold mt-5">Thank you for using COOKIINI</h1>
          <div className="mt-5 fs-4 pb-5">
            <p>Check your inbox,we have sent you a confirmation email.</p>
            <p>
              Your order will be delivered within a maximum period of 48 hours.
            </p>
            <p>
              If something went wrong , don't hesitate to contact us at anytime.
            </p>
          </div>
          <Button
                  variant="secondary"
                  className="px-4 py-2 btn btn-transparent bg-transparent fw-bold text-center fs-5 mb-5"
                  style={{
                    borderRadius:"14px",
                    color: "#019267",
                    border: "solid",
                  }}
                  size="md"
                >
                  Back to meals
                </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmation;
