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

const MyOrders = (props) => {
  return (
    <>
      <div className="mx-5 mb-5">
        <Container
          className="w-75 mt-5 px-5 py-4"
          style={{
            backgroundColor: "rgb(255, 249, 240)",
            borderRadius: "15px",
          }}
        >
          <p className="text-start fw-bold display-4 mb-5">My orders</p>
          <OrderTemplate price="29.99 TND" name="Delivery 1" progress="p" date="27 - 06 - 2022"/>
          <OrderTemplate price="29.99 TND" name="Delivery 2" progress="d" date="26 - 06 - 2022"/>
          <OrderTemplate price="29.99 TND" name="Delivery 3" progress="" date="25 - 06 - 2022"/>
        
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default MyOrders;
