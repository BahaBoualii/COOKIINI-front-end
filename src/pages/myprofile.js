import React, { useState } from "react";
import Footer from "../footer";
import "./plans12.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PricingCard from "./pricingcard";
import Meals from "./meals";
import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";

/*
    Fetch data from the DB 
    Everything is Static
*/

const MyProfile = (props) => {
  const userPhoneNumber = "55 555 555";
  const userEmail = "foulenbenfoulen@gmail.com";
  const userBirthDay = "14 - 03 - 2001";
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
          <h1 className="fw-bold mb-5 display-5">My Profile</h1>
          <Row>
            <Col style={{ borderRight: "solid" }}>
              <p className="fw-bold fs-4 mt-3" style={{color:"#019267"}}>First Name</p>
              <p className="fs-">Foulen</p>
              <p className="fw-bold fs-4" style={{color:"#019267"}}>Last Name</p>
              <p className="fs-5">Ben Foulen</p>
              <p className="fw-bold fs-4" style={{color:"#019267"}}>Phone Number</p>
              <input
                type="text"
                className="bg-transparent"
                defaultValue={"(+216) " + userPhoneNumber}
                style={{ outline: "none", border: "none" }}
              ></input>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </span>
              <hr className="w-50" />
            </Col>
            <Col className="text-start mt-5 pt-5 ms-5">
              <p className="fw-bold fs-4" style={{color:"#019267"}}>Email address</p>
              <input
                type="text"
                className="bg-transparent w-50"
                maxLength="35"
                defaultValue={userEmail}
                style={{ outline: "none", border: "none" }}
              ></input>
              <hr className="w-50 mb-5" />
              <div className="text-center mt-5">
                <Button
                  variant="secondary"
                  className="px-4 py-2 btn btn-transparent bg-transparent fw-bold text-center fs-3 "
                  style={{
                    color: "#019267",
                    border: "solid",
                    borderRadius: "20px",
                  }}
                  size="md "
                >
                  Save <br />
                  Changes
                </Button>
              </div>
            </Col>
          </Row>
          <p className="fw-bold fs-4 mt-3" style={{color:"#019267"}}>Date of birh </p>
          <p className="fs-5">{userBirthDay}</p>
        </Container>
      </div>
      <br/><br/><br/>
      <Footer />
    </>
  );
};

export default MyProfile;
